import {
	Body,
	Controller,
	Delete,
	Get,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import {SensorsService} from './sensors.service';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {LogFire} from 'src/utils/logs/log.fire';
import {UpdateSensorsDto} from './dtos/update.sensors.dto';
import {DeleteSensorsDto} from './dtos/delete.sensors.dto';
import {CreateSensorsDto} from './dtos/create.sensors.dto';

@Controller('sensors')
export class SensorsController {
	constructor(private readonly _sensorsService: SensorsService) { }

	@Post()
	createSensors(@Body() sensorsDto: CreateSensorsDto): Promise<APIResponseDto> {
		LogFire('Peticion POST: Inicia la creacion de un sensor');
		return this._sensorsService.createSensors(sensorsDto);
	}

	@Put()
	updateSensors(@Body() sensorsDto: UpdateSensorsDto): Promise<APIResponseDto> {
		LogFire('Peticion PUT: Inicia la actualizacion de un sensor');
		return this._sensorsService.updateSensors(sensorsDto);
	}

	@Get()
	showSensors(@Query('id') id: string): Promise<APIResponseDto> {
		LogFire('Peticion GET: Incia la consulta de un sensor');
		return this._sensorsService.showSensors(id);
	}

	@Delete()
	deleteSensors(@Body() sensorsDto: DeleteSensorsDto) {
		LogFire('Peticion DELETE: Inicia la eliminacion de un sensor');
		return this._sensorsService.deleteSensors(sensorsDto);
	}
}
