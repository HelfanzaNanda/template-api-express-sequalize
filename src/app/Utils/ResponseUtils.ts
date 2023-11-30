/* eslint-disable no-console */

import symbols from 'log-symbols';
import chalk from 'chalk';
import { APP_ENV } from '../../config/app';

interface ResponseSuccess {
    code?: number,
    message?: string,
    data?: any
}

class ResponseHelper {
    // constructor(
    //     public code?: number,
    //     public message?: string,
    //     public data?: any,
    // ) {}

    static success(params : ResponseSuccess) : Object {
        if (APP_ENV === 'development') {
            return {
                status: true,
                code: params.code || 200,
                message: params.message || 'successfully',
                data: params.data || {},
            };
        }

        return {
            status: true,
            code: params.code || 200,
            message: params.message || 'successfully',
            data: params.data || {},
        };
    }
}

export { ResponseHelper };