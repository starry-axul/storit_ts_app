import { BaseError } from './base-error';
import * as constants from '../responser/constants';

export { BaseError };

export class InternalServerError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.INTERNAL_SERVER_ERROR);
    }
}

export class BadGatewayError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.BAD_GATEWAY);
    }
}

export class TimeoutError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.REQUEST_TIME_OUT);
    }
}

export class UnauthorizedError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.UNAUTHORIZED);
    }
}

export class UnprocessableEntityError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.UNPROCESSABLE_ENTITY);
    }
}

export class BadRequestError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.BAD_REQUEST);
    }
}

export class NotFoundError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.NOT_FOUND);
    }
}

export class ConflictError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.CONFLICT);
    }
}

export class NotImplementedError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.NOT_IMPLEMENTED);
    }
}

export class ForbiddenError<T = any> extends BaseError<T> {
    constructor(message: string) {
        super(message, constants.codes.FORBIDDEN);
    }
}

/**
 * Utilizado para poder instanciar errores conociendo sólo el código http
 */
export const classifiedErrors = {
    [constants.codes.INTERNAL_SERVER_ERROR]: InternalServerError,
    [constants.codes.BAD_GATEWAY]: BadGatewayError,
    [constants.codes.REQUEST_TIME_OUT]: TimeoutError,
    [constants.codes.UNAUTHORIZED]: UnauthorizedError,
    [constants.codes.UNPROCESSABLE_ENTITY]: UnprocessableEntityError,
    [constants.codes.BAD_REQUEST]: BadRequestError,
    [constants.codes.NOT_FOUND]: NotFoundError,
    [constants.codes.CONFLICT]: ConflictError,
    [constants.codes.NOT_IMPLEMENTED]: NotImplementedError,
    [constants.codes.FORBIDDEN]: ForbiddenError,
};
