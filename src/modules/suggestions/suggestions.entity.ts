import {Collection} from "fireorm";
import {CollectionFire} from '../../shared/enums/collections.firebase.enum';

@Collection(CollectionFire.SUGGESTIONS)
export class SuggestionsEntity {
	id: string;
	area: string;
	coordenadas_latitud: string;
	coordenadas_longitud: string;
	comentario: string;
}
