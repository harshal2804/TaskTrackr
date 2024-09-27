import { IhttpError } from "../IhttpError";
import { IhttpResponse } from "../IhttpResponse";

export class HttpError implements IhttpError {
    error404(): IhttpResponse {
        return {
            statusCode: 404,
            body: { error: 'Not found' }
        }
    }

    error500(): IhttpResponse {
        return {
            statusCode: 500,
            body: { error: 'Internal Server Error' }
        }
    }

    error401(): IhttpResponse {
        return {
            statusCode: 401,
            body: { error: 'Unauthorized' }
        }
    }

    error403(): IhttpResponse {
        return {
            statusCode: 403,
            body: { error: 'Forbidden' }
        }
    }

    error400(): IhttpResponse {
        return {
            statusCode: 400,
            body: { error: 'Bad Request' }
        }
    }
}