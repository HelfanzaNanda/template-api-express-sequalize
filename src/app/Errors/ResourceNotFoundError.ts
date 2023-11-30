import { BaseError } from './BaseError';

class ResourceNotFoundError extends BaseError {
    constructor( public stackTrace?: string, ) {
        super(
            404,
            'The requested resource was not found or does not exist.',
            stackTrace,
        );
    }
}

export { ResourceNotFoundError };