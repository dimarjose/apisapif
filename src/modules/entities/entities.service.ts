import {Injectable} from '@nestjs/common';
import {BaseFirestoreRepository, getRepository} from 'fireorm';
import {EntitiesEntity} from './entities.entity';
import {CreateEntitiesDto} from './dtos/create.entities.dto';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {plainToClass, instanceToPlain} from 'class-transformer';
import {LogFire} from '../../utils/logs/log.fire';
import {MessageStatus} from 'src/shared/enums/message.status.enum';
import {Status} from 'src/shared/enums/status.enum';
import {UpdateEntitiesDto} from './dtos/update.entities.dto';
import {DeleteEntitiesDto} from './dtos/delete.entities.dto';

@Injectable()
export class EntitiesService {
	_entitiesRepository: BaseFirestoreRepository<EntitiesEntity> =
		getRepository(EntitiesEntity);

	constructor() { }

	async createEntities(entitiesDto: CreateEntitiesDto): Promise<APIResponseDto> {
		const entitiesEntity: EntitiesEntity = plainToClass(
			EntitiesEntity,
			instanceToPlain(entitiesDto),
		);
		const resFire = await this._entitiesRepository.create(entitiesEntity);
		if (!resFire)
			LogFire(MessageStatus.EXITOCREATEENTITIES);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOCREATEENTITIES;
		response.statusCode = Status.CREATE;
		response.status = true;
		return response;
	}

	async updateEntities(entitiesDto: UpdateEntitiesDto): Promise<APIResponseDto> {
		const entitiesEntity: EntitiesEntity = plainToClass(
			EntitiesEntity,
			instanceToPlain(entitiesDto),
		);
		const resFire: EntitiesEntity = await this._entitiesRepository.update(
			entitiesEntity,
		);
		if (!resFire)
			LogFire(MessageStatus.EXITOUPDATEENTITIES);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOUPDATEENTITIES;
		response.statusCode = Status.OK;
		response.status = true;
		return response;
	}

	async showEntities(id: string): Promise<APIResponseDto> {
		let resFire: EntitiesEntity | EntitiesEntity[];

		id
			? (resFire = await this._entitiesRepository.findById(id))
			: (resFire = await this._entitiesRepository.find());
		if (!resFire)
			LogFire(MessageStatus.EXITOSHOWENTITIES);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOSHOWENTITIES;
		response.statusCode = Status.OK;
		response.status = true;
		return response;
	}

	async deleteEntities(deleteEntititesDto: DeleteEntitiesDto): Promise<APIResponseDto> {
		try {
			await this._entitiesRepository.delete(deleteEntititesDto.id);
			LogFire(MessageStatus.EXITOCREATEENTITIES);

			const response: APIResponseDto = new APIResponseDto();

			response.data = deleteEntititesDto.id;
			response.message = MessageStatus.EXITODELETEENTITIES;
			response.statusCode = Status.OK;
			response.status = true;

			return response;
		} catch (error) {
			LogFire(`${MessageStatus.ERRORDELETEENTITIES} ->${error}`);

		}
	}
}
