import {HistoriesService} from './histories.service';
import {
	Body,
	Controller,
	Get,
	Post,
	Query,
} from '@nestjs/common';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {CreateHistoriesDto} from './dtos/create.histories.dto';
import {LogFire} from 'src/utils/logs/log.fire';

@Controller('histories')
export class HistoriesController {
	constructor(private readonly _historiesService: HistoriesService) { }

	@Post()
	createHistories(@Body() historiesDto: CreateHistoriesDto): Promise<APIResponseDto> {
		LogFire('Peticion POST: Inicia la creacion de un sensor');
		return this._historiesService.createHistories(historiesDto);
	}


	@Get()
	showHistories(@Query('id') id: string): Promise<APIResponseDto> {
		LogFire('Peticion GET: Incia la consulta de un history');
		return this._historiesService.showHistories(id);
	}


}
