const confirmDialog = () => {
    const section = document.querySelector('.products');
    const buttons = section.querySelectorAll('button[data-name]');
    const elementDialog = section.querySelector('dialog');
    const elementsClose = section.querySelectorAll('.close');

    function handlerClick(event) {
        const { target } = event;
        const name = target.getAttribute('data-name');
        elementDialog.showModal();
        elementDialog.querySelector('form').action = `/products/delete/${name}`;
    }

    function handleClose() {
        elementDialog.close();
    }

    buttons.forEach((button) => {
        button.addEventListener('click', handlerClick);
    });

    elementsClose.forEach((element) => {
        element.addEventListener('click', handleClose);
    });
};

confirmDialog();
