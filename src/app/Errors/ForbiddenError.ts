import { BaseError } from './BaseError';

class ForbiddenError extends BaseError {
    constructor(public stackTrace?: string, ) {
        super(
            403,
            'The provided token does not have access to the requested resource.',
            stackTrace,
        );
    }
}

export { ForbiddenError };