import { Injectable } from "@nestjs/common";
import { APIResponseDto } from "../dto/api.response.dto";
import { Status } from "../enums/status.enum";

@Injectable()
export class ErrorService {

    createError(message: string): APIResponseDto {
        const resp: APIResponseDto = new APIResponseDto();
        resp.message = message;
        resp.data = null;
        resp.statusCode = Status.BAD;
        resp.status = false;
        return resp;
    }
}