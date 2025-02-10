import express from 'express';
import createDebug from 'debug';
import { resolve } from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import { debugLogger } from './middleware/debug-logger.js';
import {
    notFoundController,
    notMethodController,
} from './controllers/base-controller.js';
import { errorManager } from './controllers/errors.controller.js';
import { HomeController } from './controllers/home.controller.js';
import { createProductsRouter } from './routers/products.router.js';
const debug = createDebug('demo:app');
debug('Loaded module');

export const createApp = () => {
    debug('Iniciando App...');

    const app = express();
    const __dirname = resolve();
    const publicPath = resolve(__dirname, 'public');

    app.disable('x-powered-by');

    // Middlewares
    app.use(cors());
    if (!process.env.DEBUG) {
        app.use(morgan('dev'));
    }
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(debugLogger('debug-logger'));
    app.use(express.static(publicPath));

    // Routes

    const homeController = new HomeController();
    app.get('/', homeController.getPage);

    app.use('/products', createProductsRouter());

    app.get('*', notFoundController);
    app.use('*', notMethodController);

    app.use(errorManager);

    return app;
};
