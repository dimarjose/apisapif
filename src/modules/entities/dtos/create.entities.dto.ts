import {IsEmail, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateEntitiesDto {
	@IsString()
	@IsNotEmpty()
	nombre: string;

	@IsString()
	@IsNotEmpty()
	direccion: string;

	@IsNumber()
	@IsNotEmpty()
	telefono: number;

	@IsEmail()
	@IsNotEmpty()
	email: string;

}
