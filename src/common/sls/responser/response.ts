import { BaseResponseI } from '../../responser';

export interface SlsResponseI {
    statusCode: number;
    body: string;
    headers?: { [key: string]: any };
}

export const SlsResponse = <T>(
    response: BaseResponseI<T>,
    headers?: { [key: string]: any },
): SlsResponseI => ({
    statusCode: response.code,
    body: JSON.stringify(response),
    headers,
});
