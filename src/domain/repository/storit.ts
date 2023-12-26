import { PrismaClient } from '@prisma/client'
import {v4 as uuidv4} from 'uuid';
import {Storit} from '../entity'

export interface IStoritRepository {
    store(pub: boolean, userID: string, data: string): Promise<Storit | null>;
    find(id: string): Promise<Storit | null>;
}

export class StoritRepository implements IStoritRepository {

    private database: PrismaClient;

    public constructor(database: PrismaClient) {
        this.database = database;
    }

    public store = async (pub: boolean, userID: string, data: string): Promise<Storit | null> => {
        try {
            const storit: Storit = {
                id: uuidv4(),
                userID,
                pub,
                data,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            await this.database.storit.create({data: storit})
            return storit;
        } catch (e) {
            console.error({ e });
            throw e;
        }
    };
    
    public find = async (id: string): Promise<Storit | null> => {
        try {
            // By ID
            const storit = await this.database.storit.findUnique({
                where: {
                    id,
                },
            })

            //storit.data = storit?.data as Prisma.JsonObject

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
