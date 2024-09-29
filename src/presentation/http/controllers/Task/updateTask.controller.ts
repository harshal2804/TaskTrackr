import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IController } from "../controller";
import { IhttpError } from "../../helpers/IhttpError";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IUpdateTaskUseCase } from "../../../../application/usecases/task/UpdateTask";
import { IResponseDTO } from "../../../../core/dtos/response.dto";

export class updateTaskController implements IController {
    constructor(
        private updateTaskUseCase: IUpdateTaskUseCase,
        private httpSucccess: IhttpSuccess = new HttpSuccess(),
        private httpError: IhttpError = new HttpError()
    ) {}

    async handle(request: IHttpRequest): Promise<IhttpResponse> {
        let error;
        let response: IResponseDTO;

        if (request.params && request.body && Object.keys(request.body).length > 0) {
            const bodyParams = Object.keys(request.body);
            const pathStringParams = Object.keys(request.params);
            if (
                pathStringParams.includes('id') &&
                (bodyParams.includes('title') ||
                    bodyParams.includes('description') ||
                    bodyParams.includes('dueDate') ||
                    bodyParams.includes('status') ||
                    bodyParams.includes('assignedTo') ||
                    bodyParams.includes('assignedBy')
                )
            ) {
                const id = (request.params as { id: string }).id;
                const data = request.body as {
                    title: string,
                    description: string,
                    dueDate: Date,
                    status: string,
                    assignedTo: string,
                    assignedBy: string
                }

                response = await this.updateTaskUseCase.execute(id, data);
            } else {
                error = this.httpError.error422();
                return new HttpResponse(error.statusCode, error.body);
            }

            if (!response.success) {
                error = this.httpError.error400();
                return new HttpResponse(error.statusCode, response.data);
            }

            const success = this.httpSucccess.success201(response.data);
            return new HttpResponse(success.statusCode, success.body);
        }

        error = this.httpError.error500();
        return new HttpResponse(error.statusCode, error.body);
    }
}