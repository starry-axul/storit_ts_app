import { StoritService } from '../../domain/service/storit';
import { StoritRepository } from '../../domain/repository/storit'
import { StoritController, StoreReq } from '../../domain/controller/storit';
import { SlsErrorHandler, CommonHeader } from '../../common/response/response';
import { APIGatewayProxyHandler } from 'aws-lambda';
import {SlsResponse } from '../../common/sls/responser'
import {BadRequestError } from '../../common/errors';

require('dotenv').config();

const repo = new StoritRepository(null);

export const handler: APIGatewayProxyHandler = async (event, _context) => {

    const service = new StoritService(repo);
    const controller = new StoritController(service);

    try {
        let body:StoreReq;

        try {
            body = JSON.parse(event.body);
        } catch (e) {
            throw new BadRequestError("Invalid body");
        }
        
        if (!body) throw new BadRequestError("Invalid body 2");

        const res = await controller.store(body);

        return await SlsResponse(res)
    } catch (e) {
        console.error(`[ERROR] failed. ${e}`);
        const err = await SlsErrorHandler(e, CommonHeader);
        return err;
    }

  }