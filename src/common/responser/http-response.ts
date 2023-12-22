import { codes, status } from './constants';
import { MetaTypes } from './interfaces';

/**
 * Contrato al que se adhiere cualquier response http de Playground
 */
export interface BaseResponseI<T> {
    code: number;
    status: string;
    message?: string;
    data?: T;
    meta?: MetaTypes;
}

/**
 * Clase base para formar response http de Playground
 */
export class BaseResponse<T> implements BaseResponseI<T> {
    code: number;
    status: string;
    message?: string;
    data?: T;
    meta?: MetaTypes;

    constructor(code: number, data: T, message?: string, meta?: MetaTypes) {
        this.code = code;
        this.status =
            code < codes.BAD_REQUEST
                ? status.SUCCESS
                : code >= codes.INTERNAL_SERVER_ERROR
                ? status.FAIL
                : status.ERROR;
        this.message = message;
        this.data = data;
        this.meta = meta;
    }
}

/**
 * Clase que forma una response http (200) de type BaseResponseI
 */
export class SuccessResponse<T>
    extends BaseResponse<T>
    implements BaseResponseI<T>
{
    constructor(data: T, message?: string, meta?: MetaTypes) {
        super(codes.OK, data, undefined, meta);
    }
}

/**
 * Clase que forma una response http a partir de cualquier código de error de type BaseResposeI
 */
export class ErrorResponse<T = any>
    extends BaseResponse<T>
    implements BaseResponseI<T>
{
    constructor(code: number, message: string, data?: any) {
        super(code, data, message);
    }
}
