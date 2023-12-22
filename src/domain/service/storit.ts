import { Storit } from '../entity';
import { IStoritRepository } from '../repository/storit';

import {
    BaseError,
    NotFoundError
} from '../../common/errors';

export interface IStoritService {
    get(id: string): Promise<Storit | BaseError>;
    store(data: object, pub?: boolean): Promise<Storit | BaseError>;
}

export class StoritService implements IStoritService {
    private repository: IStoritRepository;
    
    constructor(
        repository: IStoritRepository,
    ) {
        this.repository = repository;
    }

    public store = async (data: object, pub?: boolean): Promise<Storit | BaseError> => {
        console.log('[Storit Get Service] Fetching data.');

        let storit = await this.repository.store(!!pub, JSON.stringify(data));
        

        if (!storit) {
            return new NotFoundError(
                `error`
            );
        }
        return storit;
    };

    public get = async (id: string): Promise<Storit | BaseError> => {
        console.log('[Storit Get Service] Fetching data.');
        let storit = await this.repository.find(id);
        

        if (!storit) {
            return new NotFoundError(
                `date not found with ${id} id`
            );
        }
        return storit;
    };

}
