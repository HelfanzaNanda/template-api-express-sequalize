import { NextFunction, Request, Response } from 'express';
// import { ActivateAction, LoginAction, RegisterAction } from '../Actions/Auth';
import { BadRequestError, ValidationError } from '../Errors';
import { UserService } from '..//Services/UserService';
import { ResponseHelper } from '..//Utils/ResponseUtils';
import { Order } from 'sequelize';
// import * as V from 'validatorjs';
let Validator = require('validatorjs');
import qs from 'qs';


class UserController {
    constructor(private userService : UserService) { }

    public async all(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await this.userService.all();
            const result = ResponseHelper.success({data : data})

            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Invalid activation token.');
            }

            return next(error);
        }
    }

    public async datatables(request: Request, response: Response, next: NextFunction) {
        try {
            const limit = request.query.limit;
            const offset = request.query.offset;
            const order = request.query.order;

            const fltr = request.query.filter as string;
            const f = new URLSearchParams(fltr);
            const filter = Object.fromEntries(f);

            console.log('filter : ', filter);
            

            const data = await this.userService.datatables(Number(limit), Number(offset), [], filter);
            
            const result = ResponseHelper.success({data : data})
            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Server Error');
            }

            return next(error);
        }
    }

    public async findOne(request: Request, response: Response, next: NextFunction) {
        try {
            const { id } = request.params;

            const data = await this.userService.findOne(Number(id));

            const result = ResponseHelper.success({data : data})
            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Server Error');
            }

            return next(error);
        }
    }

    public async create(request: Request, response: Response, next: NextFunction) {
        try {
            const rules = {
                name : 'required',
                email : 'required',
                password : 'required',
                phone : 'required',
                roles : 'required|array',
            }

            const validation = new Validator(request.body, rules);
            if (validation.fails()) {
                throw new ValidationError({validation : validation.errors});
            }

            const name = request.body.name;
            const email = request.body.email;
            const password = request.body.password;
            const phone = request.body.phone;
            const roles = request.body.roles;


            const data = await this.userService.create(name, email, password, phone, roles);
            const result = ResponseHelper.success({data : {}})
            return response.status(200).json(result);
        } catch (error) {
            
            if (error instanceof BadRequestError) {
                return response.status(400).send('Server Error');
            }

            return next(error);
        }
    }

    public async update(request: Request, response: Response, next: NextFunction) {
        try {
            const rules = {
                name : 'required',
                email : 'required',
                password : 'required',
                phone : 'required',
                roles : 'required|array',
            }

            const validation = new Validator(request.body, rules);
            if (validation.fails()) {
                throw new ValidationError({validation : validation.errors});
            }

            const id = request.params.id;
            const name = request.body.name;
            const email = request.body.email;
            const password = request.body.password;
            const phone = request.body.phone;
            const roles = request.body.roles;


            const data = await this.userService.update(Number(id), name, email, password, phone, roles);

            const result = ResponseHelper.success({data : {}})
            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Server Error');
            }

            return next(error);
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction) {
        try {
            const id = request.params.id;
            const data = await this.userService.delete(Number(id));

            const result = ResponseHelper.success({data : {}})
            return response.status(200).json(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Server Error');
            }

            return next(error);
        }
    }
}

export { UserController };