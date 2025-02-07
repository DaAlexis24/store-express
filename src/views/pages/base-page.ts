import { renderHeader } from '../partials/header.js';
import { renderHead } from '../partials/head.js';
import { renderFooter } from '../partials/footer.js';
import { renderDialogNav } from '../partials/dialog-nav.js';

const html = String.raw;

export class BasePage {
    protected static renderMain = (title: string, message: string) => {
        return html`
            <main>
                <section>
                    <h2 class="h3">${title}</h2>
                    <p>${message}</p>
                </section>
            </main>
        `;
    };

    static render = () => {
        const title = 'Inicio | Demo Products';
        const pageTitle = 'Products';

        return html`
            <!DOCTYPE html>
            <html lang="en">
                ${renderHead(title)}
                <body>
                    ${renderHeader(pageTitle)} ${renderDialogNav()}
                    <main>
                        ${this.renderMain('Section title', 'section info')}
                    </main>
                    ${renderFooter()}
                </body>
            </html>
        `;
    };
}
