const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });
}

const serviceButtons = document.querySelectorAll('[data-service]');

serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selected = button.getAttribute('data-service');
        const serviceSelect = document.querySelector('#service');

        if (serviceSelect) {
            serviceSelect.value = selected;
        }

        const requestBlock = document.querySelector('#request');

        if (requestBlock) {
            requestBlock.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.location.href = 'index.html#request';
        }
    });
});

const forms = document.querySelectorAll('.form');

forms.forEach(form => {
    const message = form.parentElement.querySelector('.form-message');

    form.addEventListener('submit', event => {
        event.preventDefault();

        if (message) {
            message.style.display = 'block';
        }

        form.reset();

        setTimeout(() => {
            if (message) {
                message.style.display = 'none';
            }
        }, 5000);
    });
});
