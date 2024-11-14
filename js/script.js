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
});
