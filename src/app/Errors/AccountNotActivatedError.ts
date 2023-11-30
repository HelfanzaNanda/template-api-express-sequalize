import { BaseError } from './BaseError';

class AccountNotActivatedError extends BaseError {
    constructor() {
        super( 401, 'Your account has not been activated yet, check your e-mail.', );
    }
}

export { AccountNotActivatedError };