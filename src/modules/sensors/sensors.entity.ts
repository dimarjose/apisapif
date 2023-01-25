import {Collection} from "fireorm";
import {CollectionFire} from '../../shared/enums/collections.firebase.enum';

@Collection(CollectionFire.SENSORS)
export class SensorsEntity {
	id: string;
	serial: number;
	area: string;
	coordenadas_latitud: string;
	coordenadas_longitud: string;
	temperatura: number;
}
