import {Injectable} from '@nestjs/common';
import {BaseFirestoreRepository, getRepository} from 'fireorm';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {CreateHistoriesDto} from './dtos/create.histories.dto';
import {HistoriesEntity} from './histories.entity';
import {plainToClass, instanceToPlain} from 'class-transformer';
import {LogFire} from '../../utils/logs/log.fire';
import {MessageStatus} from '../../shared/enums/message.status.enum';
import {Status} from 'src/shared/enums/status.enum';

@Injectable()
export class HistoriesService {
	_historiesRepository: BaseFirestoreRepository<HistoriesEntity> = getRepository(HistoriesEntity);

	constructor() { }

	async createHistories(historiesDto: CreateHistoriesDto): Promise<APIResponseDto> {
		const historiesEntity: HistoriesEntity = plainToClass(
			HistoriesEntity, instanceToPlain(historiesDto)
		);
		const resFire = await this._historiesRepository.create(historiesEntity);
		if (!resFire)
			LogFire(MessageStatus.EXITOCREATEHISTORIES);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOCREATESENSORS;
		response.statusCode = Status.CREATE;
		response.status = true;
		return response;
	}

	async showHistories(id: string): Promise<APIResponseDto> {
		let resFire: HistoriesEntity | HistoriesEntity[];

		id
			? (resFire = await this._historiesRepository.findById(id))
			: (resFire = await this._historiesRepository.find());
		if (!resFire)
			LogFire(MessageStatus.EXITOSHOWHISTORIES);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOSHOWSENSORS;
		response.statusCode = Status.OK;
		response.status = true;
		return response;
	}
}
