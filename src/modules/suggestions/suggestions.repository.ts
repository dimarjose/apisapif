import {getRepository} from "fireorm";
import {SuggestionsEntity} from "./suggestions.entity";

export const SuggestionsRepository = getRepository(SuggestionsEntity);
