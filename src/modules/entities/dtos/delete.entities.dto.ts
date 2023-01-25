import {IsNotEmpty, IsString} from "class-validator";

export class DeleteEntitiesDto {
	@IsNotEmpty()
	@IsString()
	id: string;
}
