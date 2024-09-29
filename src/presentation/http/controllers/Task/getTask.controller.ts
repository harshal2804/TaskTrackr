import { IGetTaskUseCase } from "../../../../application/usecases/task/GetTask";
import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IhttpError } from "../../helpers/IhttpError";
import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IController } from "../controller";

export class getTaskController implements IController {
    constructor(
        private getTaskUseCase: IGetTaskUseCase,
        private httpSucccess: IhttpSuccess = new HttpSuccess(),
        private htppError: IhttpError = new HttpError()
    ) {}

    async handle(request: IHttpRequest): Promise<IhttpResponse> {
        let error
        let response: IResponseDTO
        
        if(request.params && Object.keys(request.params).length > 0) {
            const pathStringParams = Object.keys(request.params);

            if (pathStringParams.includes('id')) {
                const id = (request.params as { id: string }).id
                
                response = await this.getTaskUseCase.execute(id);
            } else {
                error = this.htppError.error422()
                return new HttpResponse(error.statusCode, error.body);
            }

            if (!response.success) {
                error = this.htppError.error400();
                return new HttpResponse(error.statusCode, response.data);
            }

            const success = this.httpSucccess.success200(response.data); 
            return new HttpResponse(success.statusCode, success.body);
        }

        error = this.htppError.error500();
        return new HttpResponse(error.statusCode, error.body);
    }
}