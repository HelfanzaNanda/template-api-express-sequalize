import { BaseError } from './BaseError';

export interface ValidationInterface {
    [key: string]: string[];
}

export interface ValidationErrorInterface {
    validation? : ValidationInterface;
    stackTrace? : any;
    error? : Error;
}

class ValidationError extends BaseError {
    constructor( public params? : ValidationErrorInterface ) {
        let stackTrace = params?.stackTrace;
        let statusCode = 422;
        let message = "Unprocessable Entity";
        
        if (params?.error && params.error instanceof Error) {
            stackTrace = params.error.stack;
            message = params.error.message;
            statusCode = 500;
        }

        super( statusCode, message, stackTrace, );
    }

    
    public override toPlainObject(): object {
    
        let errors = this.params?.validation?.errors;

        const result : {[key : string] : any} = {
            ...super.toPlainObject(),
        }
        if (errors) {
            result['validation'] = errors   
        }

        return result;
    }
}

export { ValidationError };