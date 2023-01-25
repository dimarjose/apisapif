import {getRepository} from 'fireorm';
import {HistoriesEntity} from './histories.entity';
export const HistoriesRepository = getRepository(HistoriesEntity);
