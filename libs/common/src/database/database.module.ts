import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule, type ModelDefinition } from '@nestjs/mongoose';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports : [MongooseModule.forRootAsync({
    imports : [AppConfigModule],
    useFactory : (configService : ConfigService) => ({
      uri : configService.get('MONGODB_URI')
    }),
    inject : [ConfigService]
  })]
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
