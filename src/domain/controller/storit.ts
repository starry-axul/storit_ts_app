import { IStoritService } from '../service/storit';
import { BaseError, BadRequestError } from '../../common/errors';
import {SuccessResponse} from '../../common/responser'

export interface GetReq {
    id?: string
}

export interface StoreReq {
    pub?: boolean
    data?: object
}

export interface IStoritController {
    get(req: GetReq): Promise<any>;
    store(req: StoreReq): Promise<any>;
}

export class StoritController implements IStoritController {
    private service: IStoritService;

    constructor(service: IStoritService) {
        this.service = service;
    }

    public store = async (req: StoreReq): Promise<any> => {

        if (!req.data) throw new BadRequestError('Data is required');

        const storit = await this.service.store(req.data, req.pub);

        if (storit instanceof BaseError) {
            throw storit;
        }

        return new SuccessResponse(storit);
    };

    public get = async (req: GetReq): Promise<any> => {
        if (!req.id) throw new BadRequestError('Invalid page id.');
        const storit = await this.service.get(req.id ?? '');

        if (storit instanceof BaseError) {
            throw storit;
        }

        return new SuccessResponse(storit);
    };

}
