import { BaseError } from './BaseError';
import {
    AccountNotActivatedError, BadRequestError, EmailAlreadyInUseError, ForbiddenError,
    InvalidCredentialsError, ResourceNotFoundError, ServiceUnavailableError, ValidationError,
    UnauthorizedError, UnknownError,
} from '.';

class ErrorParser {
    public static parse(error: any): BaseError {
        switch (error.name) {
            case 'AccountNotActivatedError':
                return new AccountNotActivatedError();

            case 'BadRequestError':
                return new BadRequestError(error.stack);

            case 'EmailAlreadyInUseError':
                return new EmailAlreadyInUseError();

            case 'ForbiddenError':
                return new ForbiddenError(error.stack);

            case 'InvalidCredentialsError':
                return new InvalidCredentialsError();

            case 'ResourceNotFoundError':
                return new ResourceNotFoundError(error.stack);

            case 'ServiceUnavailableError':
            case 'SequelizeConnectionRefusedError':
                return new ServiceUnavailableError(error.stack);

            case 'SequelizeForeignKeyConstraintError':
            case 'SequelizeValidationError':
            case 'SequelizeUniqueConstraintError':
                return new ValidationError({error : error});

            case 'UnauthorizedError':
                return new UnauthorizedError(error.stack);

            default:
                return new UnknownError(error.stack);
        }
    }
}

export { ErrorParser };