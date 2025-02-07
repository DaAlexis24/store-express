export const demoButton = () => {
    document.querySelector('button').addEventListener('click', () => {
        const server = 'http://localhost:8080';
        fetch(`${server}/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Pedro',
                age: 25,
            }),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    });
};

export function startHeader() {
    const elementBurger = document.querySelector('.fa-bars');
    const elementDialog = document.querySelector('dialog');
    const elementClose = document.querySelector('.close');

    function handlerClick() {
        elementDialog.showModal();
    }

    function handleClose() {
        elementDialog.close();
    }

    elementBurger.addEventListener('click', handlerClick);
    elementClose.addEventListener('click', handleClose);
}

startHeader();
