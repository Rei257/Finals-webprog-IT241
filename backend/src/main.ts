/**
 * main.ts — NestJS Application Entry Point
 *
 * Configures CORS and starts the HTTP server.
 * On Vercel, the exported `app` is used by the serverless handler.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS so the Vue frontend can call the API
  app.enableCors({
    origin: true, // Allow all origins in dev; restrict in production
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
  });

  // Global validation pipe — auto-validates DTOs decorated with class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // Strip unknown properties
      forbidNonWhitelisted: true,
      transform: true,           // Auto-transform payloads to DTO instances
    }),
  );

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);
}

bootstrap();
