import { Injectable } from '@nestjs/common';
import { BaseFirestoreRepository, getRepository } from 'fireorm';
import { SensorsEntity } from './sensors.entity';
import { CreateSensorsDto } from './dtos/create.sensors.dto';
import { ErrorService } from 'src/shared/functions/create.error.response';
import { APIResponseDto } from 'src/shared/dto/api.response.dto';
import { UpdateSensorsDto } from './dtos/update.sensors.dto';
import { MessageStatus } from '../../shared/enums/message.status.enum';
import { ListSensorsDto } from './dtos/list.sensors.dto';
import { LogFire } from '../../utils/logs/log.fire';
import { Status } from '../../shared/enums/status.enum';
import { DeleteSensorsDto } from './dtos/delete.sensors.dto';
import { instanceToPlain, plainToClass } from 'class-transformer';

@Injectable()
export class SensorsService {
  _sensorsRepository: BaseFirestoreRepository<SensorsEntity> =
    getRepository(SensorsEntity);

  //   constructor(private readonly _errorService: ErrorService) {}
  constructor() {}

  async createSensors(sensorsDto: CreateSensorsDto): Promise<APIResponseDto> {
    const sensorsEntity: SensorsEntity = plainToClass(
      SensorsEntity,
      instanceToPlain(sensorsDto),
    );
    const resFire = await this._sensorsRepository.create(sensorsEntity);
    if (!resFire)
      //   throw this._errorService.createError(MessageStatus.ERRORCREATESENSORS);
      LogFire(MessageStatus.EXITOCREATESENSORS);
    const response: APIResponseDto = new APIResponseDto();
    response.data = resFire;
    response.message = MessageStatus.EXITOCREATESENSORS;
    response.statusCode = Status.CREATE;
    response.status = true;
    return response;
  }

  async updateSensors(sensorsDto: UpdateSensorsDto): Promise<APIResponseDto> {
    const sensorsEntity: SensorsEntity = plainToClass(
      SensorsEntity,
      instanceToPlain(sensorsDto),
    );
    const resFire: SensorsEntity = await this._sensorsRepository.update(
      sensorsEntity,
    );
    if (!resFire)
      // throw this._errorService.createError(MessageStatus.ERRORUPDATESENSORS);
      LogFire(MessageStatus.EXITOUPDATESENSORS);
    const response: APIResponseDto = new APIResponseDto();
    response.data = resFire;
    response.message = MessageStatus.EXITOUPDATESENSORS;
    response.statusCode = Status.OK;
    response.status = true;
    return response;
  }

  async showSensors(id: string): Promise<APIResponseDto> {
    let resFire: SensorsEntity | SensorsEntity[];

    id
      ? (resFire = await this._sensorsRepository.findById(id))
      : (resFire = await this._sensorsRepository.find());
    if (!resFire)
      // throw this._errorService.createError(MessageStatus.ERRORSHOWSENSORS);
      //   const newsDto = plainToClass(ListSensorsDto, resFire);
      LogFire(MessageStatus.EXITOSHOWSENSORS);
    const response: APIResponseDto = new APIResponseDto();
    response.data = resFire;
    response.message = MessageStatus.EXITOSHOWSENSORS;
    response.statusCode = Status.OK;
    response.status = true;
    return response;
  }

  async deleteSensors(
    deleteSensorsDto: DeleteSensorsDto,
  ): Promise<APIResponseDto> {
    try {
      await this._sensorsRepository.delete(deleteSensorsDto.id);
      LogFire(MessageStatus.EXITODELETESENSORS);

      const response: APIResponseDto = new APIResponseDto();

      response.data = deleteSensorsDto.id;
      response.message = MessageStatus.EXITODELETESENSORS;
      response.statusCode = Status.OK;
      response.status = true;

      return response;
    } catch (error) {
      LogFire(`${MessageStatus.ERRORDELETESENSORS} ->${error}`);
      // throw this._errorService.createError(MessageStatus.ERRORDELETESENSORS);
    }
  }
}
