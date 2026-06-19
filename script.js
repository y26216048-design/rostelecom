// ========== МОБИЛЬНОЕ МЕНЮ ==========
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

function closeMenu() {
    if (nav) nav.classList.remove('show');
}

function openMenu() {
    if (nav) nav.classList.add('show');
}

if (menuBtn && nav) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // не даём клику "провалиться" в document
        nav.classList.toggle('show');
    });

    // Закрываем меню при клике на ссылку
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Закрываем при клике вне меню
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    }, { passive: true });
}

// Фикс iOS bfcache: когда возвращаешься назад — меню уже закрыто
window.addEventListener('pageshow', () => {
    closeMenu();
});

// Фикс: при скролле закрываем меню (удобно на телефоне)
window.addEventListener('scroll', () => {
    closeMenu();
}, { passive: true });


// ========== КНОПКИ УСЛУГ ==========
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


// ========== ФОРМЫ ==========
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
