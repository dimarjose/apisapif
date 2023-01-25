import {Collection} from "fireorm";
import {CollectionFire} from "src/shared/enums/collections.firebase.enum";

@Collection(CollectionFire.ENTITIES)
export class EntitiesEntity {
	id: string;
	nombre: string;
	direccion: string;
	telefono: number;
	email: string;
}
