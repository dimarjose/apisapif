import {getRepository} from 'fireorm';
import {EntitiesEntity} from './entities.entity';

export const EntitiesRepository = getRepository(EntitiesEntity);
