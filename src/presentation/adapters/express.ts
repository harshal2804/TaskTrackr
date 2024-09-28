import { IController } from "../http/controllers/controller";
import { IHttpRequest } from "../http/helpers/IhttpRequest";
import { IhttpResponse } from "../http/helpers/IhttpResponse";
import { HttpRequest } from "../http/helpers/impls/HttpRequest";
import { Request } from 'express';

export async function expressAdapter(
    request: Request,
    controller: IController
): Promise<IhttpResponse>
{
    const httpRequest: IHttpRequest = new HttpRequest({
        body: request.body,
        header: request.header,
        query: request.query,
        params: request.params,
        path: request.path
      })
      const response: IhttpResponse = await controller.handle(httpRequest)
      return response
}