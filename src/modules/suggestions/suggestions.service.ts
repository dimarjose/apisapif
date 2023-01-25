import {Injectable} from '@nestjs/common';
import {BaseFirestoreRepository, getRepository} from 'fireorm';
import {APIResponseDto} from 'src/shared/dto/api.response.dto';
import {SuggestionsEntity} from './suggestions.entity';
import {plainToClass, instanceToPlain} from 'class-transformer';
import {LogFire} from '../../utils/logs/log.fire';
import {MessageStatus} from '../../shared/enums/message.status.enum';
import {Status} from 'src/shared/enums/status.enum';
import {DeleteSuggestionsDto} from './dtos/delete.suggestions.dto';
import {UpdateSuggestionsDto} from './dtos/update.suggestions.dto';
import {CreateSuggestionsDto} from './dtos/create.suggestions.dto';

@Injectable()
export class SuggestionsService {
	_suggestionsRepository: BaseFirestoreRepository<SuggestionsEntity> = getRepository(SuggestionsEntity);

	constructor() { }

	async createSuggestions(suggestionsDto: CreateSuggestionsDto): Promise<APIResponseDto> {
		const suggestionsEntity: SuggestionsEntity = plainToClass(
			SuggestionsEntity,
			instanceToPlain(suggestionsDto)
		);
		const resFire = await this._suggestionsRepository.create(suggestionsEntity);
		if (!resFire)
			LogFire(MessageStatus.EXITOCREATESUGGESTIONS);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOCREATESUGGESTIONS;
		response.statusCode = Status.CREATE;
		response.status = true;
		return response;
	}

	async updateSuggestions(suggestionsDto: UpdateSuggestionsDto): Promise<APIResponseDto> {
		const suggestionsEntity: SuggestionsEntity = plainToClass(
			SuggestionsEntity,
			instanceToPlain(suggestionsDto)
		);
		const resFire: SuggestionsEntity = await this._suggestionsRepository.update(
			suggestionsEntity,
		);
		if (!resFire)
			LogFire(MessageStatus.EXITOUPDATESUGGESTIONS);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOUPDATESUGGESTIONS;
		response.statusCode = Status.OK;
		response.status = true;
		return response;
	}

	async showSuggestions(id: string): Promise<APIResponseDto> {
		let resFire: SuggestionsEntity | SuggestionsEntity[];

		id
			? (resFire = await this._suggestionsRepository.findById(id))
			: (resFire = await this._suggestionsRepository.find());
		if (!resFire)
			LogFire(MessageStatus.EXITOSHOWSUGGESTIONS);
		const response: APIResponseDto = new APIResponseDto();
		response.data = resFire;
		response.message = MessageStatus.EXITOSHOWSUGGESTIONS;
		response.statusCode = Status.OK;
		response.status = true;
		return response;
	}

	async deleteSuggestions(deleteSuggestionsDto: DeleteSuggestionsDto): Promise<APIResponseDto> {
		try {
			await this._suggestionsRepository.delete(deleteSuggestionsDto.id);
			LogFire(MessageStatus.EXITODELETESUGGESTIONS);

			const response: APIResponseDto = new APIResponseDto();

			response.data = deleteSuggestionsDto.id;
			response.message = MessageStatus.EXITODELETESUGGESTIONS;
			response.statusCode = Status.OK;
			response.status = true;

			return response;
		} catch (error) {
			LogFire(`${MessageStatus.EXITODELETESUGGESTIONS} ->${error}`);
		}
	}
}
