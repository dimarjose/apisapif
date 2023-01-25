import {Collection} from "fireorm";
import {CollectionFire} from "src/shared/enums/collections.firebase.enum";

@Collection(CollectionFire.HISTORIES)
export class HistoriesEntity {
	id: string;
	serial: number;
	area: string;
	coordenadas_latitud: string;
	coordenadas_longitud: string;
	temperatura: number;
	comentario: string;
}
