import { BaseError } from './BaseError';

class ServiceUnavailableError extends BaseError {
    constructor( public stackTrace?: string, ) {
        super(
            503,
            'The service is currently temporarily unavailable.',
            stackTrace
        );
    }
}

export { ServiceUnavailableError };