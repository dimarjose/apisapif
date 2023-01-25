import { IsNotEmpty, IsString } from "class-validator";

export class DeleteSensorsDto {
	@IsNotEmpty()
    @IsString()
    id: string;
}
