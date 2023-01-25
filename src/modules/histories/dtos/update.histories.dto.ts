import {IsNotEmpty, IsString, IsNumber} from "class-validator";

export class UpdateHistoriesDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsNumber()
	@IsNotEmpty()
	serial: number;

	@IsString()
	@IsNotEmpty()
	area: string;

	@IsString()
	@IsNotEmpty()
	coordenadas_latitud: string;

	@IsString()
	@IsNotEmpty()
	coordenadas_longitud: string;

	@IsNumber()
	@IsNotEmpty()
	temperatura: number;

	@IsString()
	@IsNotEmpty()
	comentario: string;
}
