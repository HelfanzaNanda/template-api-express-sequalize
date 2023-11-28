import { NextFunction, Request, Response } from 'express';
// import { ActivateAction, LoginAction, RegisterAction } from '../Actions/Auth';
import { BadRequestError } from '../Errors';
import { AuthService } from 'app/Services/AuthService';
import { UserService } from 'app/Services/UserService';

class UserController {
    constructor(private userService : UserService) { }

    public async activate(request: Request, response: Response, next: NextFunction) {
        try {
            const email = request.body.email;
            await this.userService.activate(email);

            return response.status(200).send('Account activated, you can login now.');
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Invalid activation token.');
            }

            return next(error);
        }
    }

    public async all(request: Request, response: Response, next: NextFunction) {
        try {



            const result = await this.userService.all();

            return response.status(200).send(result);
        } catch (error) {
            if (error instanceof BadRequestError) {
                return response.status(400).send('Invalid activation token.');
            }

            return next(error);
        }
    }
}

export { UserController };