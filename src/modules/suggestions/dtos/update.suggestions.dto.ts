import {IsNotEmpty, IsString} from 'class-validator';

export class UpdateSuggestionsDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@IsNotEmpty()
	area: string;

	@IsString()
	@IsNotEmpty()
	coordenadas_latitud: string;

	@IsString()
	@IsNotEmpty()
	coordenadas_longitud: string;

	@IsString()
	@IsNotEmpty()
	comentario: string;
}
