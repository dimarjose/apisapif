import {IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateSensorsDto {
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
}
