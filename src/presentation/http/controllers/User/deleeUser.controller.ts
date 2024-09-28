import { IDeleteUserUseCase } from "../../../../application/usecases/user/DeleteUser";
import { IResponseDTO } from "../../../../core/dtos/response.dto";
import { IhttpError } from "../../helpers/IhttpError";
import { IHttpRequest } from "../../helpers/IhttpRequest";
import { IhttpResponse } from "../../helpers/IhttpResponse";
import { IhttpSuccess } from "../../helpers/IhttpSuccess";
import { HttpError } from "../../helpers/impls/HttpError";
import { HttpResponse } from "../../helpers/impls/HttpResponse";
import { HttpSuccess } from "../../helpers/impls/HttpSuccess";
import { IController } from "../controller";

export class deleteUserController implements IController {
    constructor(
        private deleteUserUseCase: IDeleteUserUseCase,
        private httpErrors: IhttpError = new HttpError(),
        private httpSuccess: IhttpSuccess = new HttpSuccess(),
    ) {}

    async handle(httpRequest: IHttpRequest): Promise<IhttpResponse> {
        let error
        let response: IResponseDTO

        if (httpRequest.params && Object.keys(httpRequest.params).length > 0) {
            const pathStringParams = Object.keys(httpRequest.params)

            if (pathStringParams.includes('id')) {
                const id = (httpRequest.params as { id: string }).id

                response = await this.deleteUserUseCase.execute(id)
            } else {
                error = this.httpErrors.error422()
                return new HttpResponse(error.statusCode, error.body)
            }

            if (!response.success) {
                error = this.httpErrors.error400()
                return new HttpResponse(error.statusCode, response.data)
            }

            const success = this.httpSuccess.success200(response.data)
            return new HttpResponse(success.statusCode, success.body)
        }

        error = this.httpErrors.error500()
        return new HttpResponse(error.statusCode, error.body)
    }
}