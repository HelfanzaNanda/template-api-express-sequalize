import { BaseError } from './BaseError';

class UnauthorizedError extends BaseError {
    constructor(public stackTrace?: string, ) {
        super(
            401,
            'No authorization token was found.',
            stackTrace,
        );
            // 'Unauthorized',
    }
}

export { UnauthorizedError };