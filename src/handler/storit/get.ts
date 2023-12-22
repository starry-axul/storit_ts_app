import { StoritService } from '../../domain/service/storit';
import { StoritRepository } from '../../domain/repository/storit'
import { StoritController } from '../../domain/controller/storit';
import { SlsErrorHandler, CommonHeader } from '../../common/response/response';
import { APIGatewayProxyHandler } from 'aws-lambda';
import {SlsResponse } from '../../common/sls/responser'

require('dotenv').config();

const repo = new StoritRepository(null);

export const handler: APIGatewayProxyHandler = async (event, _context) => {

    const service = new StoritService(repo);
    const controller = new StoritController(service);

    try {
        const {
            pathParameters: { id }
        } = event;

        const res = await controller.get({ id });
        return await SlsResponse(res)
    } catch (e) {
        console.error(`[ERROR] failed. ${e}`);
        const err = await SlsErrorHandler(e, CommonHeader);
        return err;
    }

  }
