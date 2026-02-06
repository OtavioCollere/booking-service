import { LoggerModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, type ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import Joi from 'joi';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule, 
    LoggerModule, 
    ConfigModule.forRoot({
      isGlobal : true,
      validationSchema : Joi.object({
        MONGODB_URI : Joi.string().uri().required(),
        JWT_SECRET : Joi.string().required(),
        JWT_EXPIRATION : Joi.string().required(),
        PORT : Joi.number().default(3001),
      })
    }),
    JwtModule.registerAsync({
    useFactory : (configService : ConfigService) => ({
      secret : configService.get('JWT_SECRET'),
      signOptions : {
        expiresIn : `${configService.get('JWT_EXPIRATION')}s`
      }
    })
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
