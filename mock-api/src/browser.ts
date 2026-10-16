// mock-api/src/browser.ts
console.log('🚨 MY BROWSER.TS IS LOADED');
import { setupWorker } from 'msw/browser';
import { productHandlers } from './handlers/product.handlers';
console.log('PRODUCT HANDLERS:', productHandlers);

export const worker = setupWorker(...productHandlers);