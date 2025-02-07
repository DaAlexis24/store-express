import express from 'express';
import createDebug from 'debug';

export const app = express();
const debug = createDebug('demo:app');

debug('Iniciando App...');
app.disable('x-powered-by');

import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import { debugLogger } from './middleware/debug-logger.js';
import {
    notFoundController,
    notMethodController,
} from './controllers/base-controller.js';
import { errorManager } from './errors/error-manager.js';

const __dirname = resolve();
const publicPath = resolve(__dirname, 'public');

// Middlewares
app.use(cors());
app.use(morgan('common'));
app.use(express.json());
app.use(debugLogger('debug-logger'));
app.use(express.static(publicPath));

app.get('*', notFoundController);
app.use('*', notMethodController);

app.use(errorManager);
