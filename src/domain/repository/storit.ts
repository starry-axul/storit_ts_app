import { Storit } from '../entity';


export interface IStoritRepository {
    store(pub: boolean, data: string): Promise<Storit | null>;
    find(id: string): Promise<Storit | null>;
}

export class StoritRepository implements IStoritRepository {
    private database: any;

    constructor(database: any) {
        this.database = database;
    }

    public store = async (pub: boolean, data: string): Promise<Storit | null> => {
        try {
            const storit: Storit = {
                id: "123",
                public: pub,
                data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            return storit;
        } catch (e) {
            console.error({ e });
            throw e;
        }
    };
    
    public find = async (id: string): Promise<Storit | null> => {
        try {
            console.log(id)
            

            const storit: Storit = {
                id: id,
                public: true,
                data: "test{test{123}}",
                createdAt: new Date(),
                updatedAt: new Date(),
            };

            return storit;
        } catch (e) {
            console.error({ e });
            throw e;
        }
    };

    /*
    public update = async (
        id: string,
        block: NotionBlock
    ): Promise<NotionPage | null> => {
        try {
            const todoParams: UpdateItemInput = {
                Key: marshall({ id }),
                UpdateExpression: 'set #block = :block',
                ExpressionAttributeValues: marshall({
                    ':block': block
                }),
                ReturnValues: 'ALL_NEW',
                TableName: process.env.DYNAMODB_TABLE,
                ExpressionAttributeNames: {
                    '#block': 'block'
                }
            };
            const { Attributes } = await this.dynamoClient.updateItem(
                todoParams
            );
            const page = Attributes
                ? (unmarshall(Attributes) as NotionPage)
                : null;
            return page;
        } catch (e) {
            console.error({ e });
            throw e;
        }
    };*/
}
