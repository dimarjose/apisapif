import {IsNotEmpty, IsString} from "class-validator";

export class DeleteSuggestionsDto {
	@IsString()
	@IsNotEmpty()
	id: string;
}
