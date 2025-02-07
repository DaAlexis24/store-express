import { renderHeader } from '../partials/header.js';
import { renderHead } from '../partials/head.js';
import { renderFooter } from '../partials/footer.js';
import { renderDialogNav } from '../partials/dialog-nav.js';
import { BasePage } from './base-page.js';

const html = String.raw;

export class ErrorPage extends BasePage {
    static override render = (errorMessage?: string) => {
        errorMessage = errorMessage || 'Error desconocido';

        const title = 'Inicio | Demo Products';
        const pageTitle = 'Products';

        return html`
            <!DOCTYPE html>
            <html lang="en">
                ${renderHead(title)}
                <body>
                    ${renderHeader(pageTitle)} ${renderDialogNav()}
                    <main>
                        ${this.renderMain('Página de error', errorMessage)}
                    </main>
                    ${renderFooter()}
                </body>
            </html>
        `;
    };
}
