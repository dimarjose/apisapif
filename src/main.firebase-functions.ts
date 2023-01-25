import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { ValidationPipe } from '@nestjs/common';

const server = express();

const functionsUsers = async (expressInstance): Promise<void> => {
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressInstance),
    );
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());
    app.setGlobalPrefix('api');
    await app.init();
  };

export const apiAdmin = 
  functions.https.onRequest(async (request, response) => {
    await functionsUsers(server);
    server(request, response);
  });
