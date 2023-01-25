import {Body, Controller, Delete, Get, Post, Put, Query} from "@nestjs/common";
import {APIResponseDto} from "src/shared/dto/api.response.dto";
import {CreateEntitiesDto} from "./dtos/create.entities.dto";
import {EntitiesService} from './entities.service';
import {LogFire} from '../../utils/logs/log.fire';
import {UpdateEntitiesDto} from './dtos/update.entities.dto';
import {DeleteEntitiesDto} from './dtos/delete.entities.dto';

@Controller('entities')
export class EntitiesController {
	constructor(private readonly _entitiesService: EntitiesService) { }

	@Post()
	createEntities(@Body() entitiesDto: CreateEntitiesDto): Promise<APIResponseDto> {
		LogFire('Peticion POST: Inicia la creacion de una entidad');
		return this._entitiesService.createEntities(entitiesDto);
	}

	@Put()
	updateEntities(@Body() entitiesDto: UpdateEntitiesDto): Promise<APIResponseDto> {
		LogFire('Peticion PUT: Inicia la actualizacion de una entidad');
		return this._entitiesService.updateEntities(entitiesDto);
	}

	@Get()
	showEntities(@Query('id') id: string): Promise<APIResponseDto> {
		LogFire('Peticion GET: Incia la consulta de una entidad');
		return this._entitiesService.showEntities(id);
	}

	@Delete()
	deleteeEntities(@Body() entitiesDto: DeleteEntitiesDto) {
		LogFire('Peticion DELETE: incia la eliminacion de una entidad');
		return this._entitiesService.deleteEntities(entitiesDto);
	}
}
