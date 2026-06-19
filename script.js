const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
    // Переключение меню по клику
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Закрытие меню при клике на ссылку
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('show');
        });
    });

    // Закрытие меню при клике вне его области (важно для телефонов)
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('show');
        }
    }, { passive: true }); // passive: true убирает предупреждение и лаги scroll на iOS
}

// Кнопки услуг — скролл к форме
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

// Отправка форм
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
