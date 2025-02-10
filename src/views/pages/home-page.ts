import { BasePage } from './base-page.js';
import createDebug from 'debug';

const debug = createDebug('demo:views:home-page');
debug('Loaded module');

export class HomePage extends BasePage {
    constructor(protected title = 'Inicio | Demo Products') {
        super(title);
    }

    override render() {
        debug('Iniciando render');
        const info = {
            mainTitle: 'Página de inicio',
            mainContent: 'Bienvenido a la página de inicio',
        };

        return super.render(info);
    }
}
