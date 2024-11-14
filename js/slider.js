let currentIndex = 0;
const cardsPerSlideDesktop = 4; // Количество карточек на десктопной версии
const cardsPerSlideMobile = 2; // Количество карточек на мобильной версии
const teacherCards = document.querySelectorAll('.teacher-card');
const totalCards = teacherCards.length;

// Функция для вычисления, сколько карточек будет на одном слайде
function getCardsPerSlide() {
    if (window.innerWidth <= 480) {
        return 1; // Для маленьких мобильных устройств показываем одну карточку
    } else if (window.innerWidth <= 768) {
        return 2; // Для средних мобильных устройств показываем две карточки
    } else {
        return cardsPerSlideDesktop; // Для десктопа 4 карточки
    }
}

// Функция для изменения позиции слайдера
function updateSliderPosition() {
    const cardsPerSlide = getCardsPerSlide();
    const offset = -currentIndex * (100 / cardsPerSlide);
    document.querySelector('.teacher-slider-container').style.transform = `translateX(${offset}%)`;
}

// Функция для перехода к следующему слайду
function nextSlide() {
    const cardsPerSlide = getCardsPerSlide();
    const totalSlides = Math.ceil(totalCards / cardsPerSlide); // Расчет общего числа слайдов
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Зацикливаем слайдер
    }
    updateSliderPosition();
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
    const cardsPerSlide = getCardsPerSlide();
    const totalSlides = Math.ceil(totalCards / cardsPerSlide); // Расчет общего числа слайдов
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // Зацикливаем слайдер
    }
    updateSliderPosition();
}

// Добавляем обработчики событий на кнопки
document.querySelector('.next-btn').addEventListener('click', nextSlide);
document.querySelector('.prev-btn').addEventListener('click', prevSlide);

// Инициализация слайдера
updateSliderPosition();
