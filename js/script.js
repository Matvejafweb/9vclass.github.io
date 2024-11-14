document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("photo-modal");
    const expandedPhoto = document.getElementById("expanded-photo");
    const classPhoto = document.getElementById("class-photo");
    const closeModalButton = document.getElementById("close-modal");

    // Проверяем, что все элементы существуют перед добавлением событий
    if (modal && expandedPhoto && classPhoto && closeModalButton) {
        // Открываем модальное окно по нажатию на изображение
        classPhoto.addEventListener("click", function() {
            expandedPhoto.src = classPhoto.src;
            modal.style.display = "flex";
        });

        // Закрываем модальное окно по нажатию на кнопку закрытия
        closeModalButton.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // Закрываем модальное окно по клику вне изображения
        modal.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    } else {
        console.error("Некоторые элементы модального окна не найдены.");
    }

    const burgerMenu = document.getElementById('burger-menu');
    const navList = document.getElementById('nav-list');

    // При клике на бургер-меню показываем или скрываем список
    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    // Закрыть меню, если кликнуть вне его
    window.addEventListener('click', function(event) {
        if (!navList.contains(event.target) && !burgerMenu.contains(event.target)) {
            navList.classList.remove('active');
        }
    });
});

document.addEventListener('touchmove', function(event) {
    event = event.originalEvent || event;

    if(event.scale > 1) {
        event.preventDefault();
    }
}, false);
