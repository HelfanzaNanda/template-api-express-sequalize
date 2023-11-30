import { BaseError } from './BaseError';

class UnknownError extends BaseError {
    constructor( public stackTrace?: string, ) {
        super(
            500,
            'An error occurred, but it could not be identified.',
            stackTrace,
        );
    }
}

export { UnknownError };