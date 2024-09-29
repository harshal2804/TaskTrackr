import { ICreateTaskUseCase } from "../../../../application/usecases/task/CreateTask";
import { IhttpError } from "../../helpers/IhttpError";
import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IController } from "../controller";

export class CreateTaskController implements IController {
    constructor(
        private crateTaskUseCase: ICreateTaskUseCase,
        private httpSucccess: IhttpSuccess = new HttpSuccess(),
        private httpError: IhttpError = new HttpError()
    ) {}

    async handle(request: IHttpRequest): Promise<IhttpResponse> {
        let error;
        let response;

        if (request.body && Object.keys(request.body).length > 0) {
            const bodyParams = Object.keys(request.body);

            if (
                bodyParams.includes('title') &&
                bodyParams.includes('description') &&
                bodyParams.includes('dueDate') &&
                bodyParams.includes('status') &&
                bodyParams.includes('assignedTo') &&
                bodyParams.includes('assignedBy')
            ) {
                const createTaskRequestDTO = request.body as {
                    title: string,
                    description: string,
                    dueDate: Date,
                    status: string,
                    assignedTo: string,
                    assignedBy: string
                }

                response = await this.crateTaskUseCase.execute(createTaskRequestDTO);
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