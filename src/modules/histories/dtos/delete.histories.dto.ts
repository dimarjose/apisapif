import {IsNotEmpty, IsString} from "class-validator";

export class DeleteHistoriesDto {
	@IsNotEmpty()
	@IsString()
	id: string;
}
