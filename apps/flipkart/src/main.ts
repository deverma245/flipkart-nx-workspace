import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { isDevMode } from '@angular/core';

async function bootstrap() {
  if (isDevMode()) {
    const { worker } = await import('@flipkart/mock-api/browser');

    await worker.start();
    console.log('✅ MSW started');
  }

  await bootstrapApplication(App, appConfig).catch((err) => console.error(err));

}

bootstrap();
