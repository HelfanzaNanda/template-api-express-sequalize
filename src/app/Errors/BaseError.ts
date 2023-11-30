import { APP_ENV } from '../../config/app';

abstract class BaseError {

    constructor( public code: number, public message: string, public stackTrace?: string, ) {}

    public toPlainObject(): object {
        if (APP_ENV === 'development') {
            return {
                status: false,
                code: this.code,
                message: this.message,
                data: {},
                stackTrace: this.stackTrace,
            };
        }

        return {
            status: false,
            code: this.code,
            message: this.message,
            data: {},
        };
    }
}

export { BaseError };