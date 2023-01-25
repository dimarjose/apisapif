import {Body, Controller, Delete, Get, Post, Put, Query} from '@nestjs/common';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {CreateSuggestionsDto} from './dtos/create.suggestions.dto';
import {LogFire} from '../../utils/logs/log.fire';
import {UpdateSuggestionsDto} from './dtos/update.suggestions.dto';
import {DeleteSuggestionsDto} from './dtos/delete.suggestions.dto';
import {SuggestionsService} from './suggestions.service';

@Controller('suggestions')
export class SuggestionsController {
	constructor(private readonly _suggestionsService: SuggestionsService) { }

	@Post()
	createSuggestions(@Body() suggestionsDto: CreateSuggestionsDto): Promise<APIResponseDto> {
		LogFire('Peticion POST: inicia la creacion de una sugerencia');
		return this._suggestionsService.createSuggestions(suggestionsDto);
	}

	@Put()
	upSuggestions(@Body() suggestionsDto: UpdateSuggestionsDto): Promise<APIResponseDto> {
		LogFire('Peticion PUT: Inicia la actualizacion de una sugerencia');
		return this._suggestionsService.updateSuggestions(suggestionsDto);
	}

	@Get()
	showSuggestions(@Query('id') id: string): Promise<APIResponseDto> {
		LogFire('Peticion GET: inicia la consulta de una sugerencia');
		return this._suggestionsService.showSuggestions(id);
	}

	@Delete()
	deleteSuggestions(@Body() suggestionsDto: DeleteSuggestionsDto) {
		LogFire('Peticion DELETE: Inicia la eliminacion de una sugerencia');
		return this._suggestionsService.deleteSuggestions(suggestionsDto);
	}
}
