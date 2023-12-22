import { codes, status } from '../responser/constants';
import { BaseResponseI } from '../responser';

/**
 * Clase base para formar errores de Playground extendidos de clase Error
 */
export class BaseError<T = any> extends Error implements BaseResponseI<T> {
    name: string;
    code: number;
    status: string;

    constructor(
        message: string,
        code: number,
    ) {
        super(message);
        Object.setPrototypeOf(this, BaseError.prototype); // ??
        Error.captureStackTrace(this, BaseError); // remove this line in the error stack, you can add a console.log to test it
        this.name = 'BaseError';
        this.message = message;
        this.status =
            code >= codes.INTERNAL_SERVER_ERROR ? status.FAIL : status.ERROR;
        this.code = code;
    }

    toJSON() {
        return {
            message: this.message,
            status: this.status,
            code: this.code,
        };
    }
}
