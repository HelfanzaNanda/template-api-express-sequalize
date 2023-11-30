import { BaseError } from './BaseError';

class InvalidCredentialsError extends BaseError {
    constructor() {
        super(
            401,
            'Invalid Credentials',
        );
    }
}

export { InvalidCredentialsError };