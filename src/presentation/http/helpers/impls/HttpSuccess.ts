import { IhttpResponse } from "../IhttpResponse";
import { IhttpSuccess } from "../IhttpSuccess";

export class HttpSuccess implements IhttpSuccess {
    success200(body: any): IhttpResponse {
        return {
            statusCode: 200,
            body: body
        }
    }

    success201(body: any): IhttpResponse {
        return {
            statusCode: 201,
            body: body
        }
    }

    success204(): IhttpResponse {
        return {
            statusCode: 204,
            body: null
        }
    }
}