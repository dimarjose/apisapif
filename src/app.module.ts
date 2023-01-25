import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import { DatabaseFirebase } from './database/database.firebase';
import { SensorsModule } from './modules/sensors/sensors.module';
import { EntitiesModule } from './modules/entities/entities.module';
import { HistoriesService } from './modules/histories/histories.service';
import { HistoriesModule } from './modules/histories/histories.module';
import { SuggestionsService } from './modules/suggestions/suggestions.service';
import { SuggestionsModule } from './modules/suggestions/suggestions.module';

@Module({
	imports: [SensorsModule, EntitiesModule, HistoriesModule, SuggestionsModule],
	controllers: [AppController],
	providers: [AppService, DatabaseFirebase, HistoriesService, SuggestionsService],
})
export class AppModule { }
