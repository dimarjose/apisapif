import {getRepository} from "fireorm";
import { SensorsEntity } from './sensors.entity';

export const SensorsRepository = getRepository(SensorsEntity);
