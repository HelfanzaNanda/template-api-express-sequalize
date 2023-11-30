import { NextFunction, Request, Response } from 'express';
// import { ActivateAction, LoginAction, RegisterAction } from '../Actions/Auth';
import { BadRequestError, ValidationError } from '../Errors';
import { ResponseHelper } from '../Utils/ResponseUtils';
import { RoleService } from '../Services/RoleService';
// import * as V from 'validatorjs';
let Validator = require('validatorjs');

class RoleController {
    constructor(private roleService : RoleService) { }

    public async all(request: Request, response: Response, next: NextFunction) {
        try {
            const data = await this.roleService.all();
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
            const limit = request.body.limit;
            const offset = request.body.offset;
            const order = request.body.order;
            const filters = request.body.filters;

            const data = await this.roleService.datatables(limit, offset, order, filters);
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

            const data = await this.roleService.findOne(Number(id));

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
            }

            const validation = new Validator(request.body, rules);
            if (validation.fails()) {
                throw new ValidationError({validation : validation.errors});
            }

            const name = request.body.name;


            const data = await this.roleService.create(name);
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
            }

            const validation = new Validator(request.body, rules);
            if (validation.fails()) {
                throw new ValidationError({validation : validation.errors});
            }

            const id = request.params.id;
            const name = request.body.name;


            const data = await this.roleService.update(Number(id), name);

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
            const data = await this.roleService.delete(Number(id));

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

export { RoleController };