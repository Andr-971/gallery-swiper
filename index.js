"use strict";
// const { Gallery } = require("./gallery-swiper.min.js");
import Gallery from "./gallery-swiper.min.js";

// Первый экземпляр слайдера
const options = {
    class: {
        galleryClassName: "gallery", // Класс на обёртке галереи
        galleryLineClassName: "gallery-line", // Класс на обёртке слайдов
        gallerySlideClassName: "gallery-unit", // Класс обёртка на слайде
    },
    widthWindowsSlider: 1, // Колличество слайдов в окне
    indent: {
        // Отступ между слайдами в медиазапросах в px
        1400: 1,
        960: 1,
        780: 1,
        560: 1,
    },
    secondDelay: "0.4s", // Плавность сдвига
    percentShift: 10, // Минимальный сдвиг по экрану px
    infiniteSlide: true, // Бесконечный слайдер

    autoscrolling: {
        // left: true,
        // right: true,
        delay: "2", // Задержка при автолистании в секундах
    },
    controls: {
        prevId: "btnPrev",
        nextId: "btnNext",
    },
    bullets: {
        bulletsId: "bullets",
        // namberBullet: true,
    },
    numberSlide: {
        // numberSlideShow: false, // Скрыть нумерацию слайдов
        numberSlideShow: true, // Показать нумерацию слайдов
        numberSlideClass: "numberSlide",
        numberSlideCuurent: "currentSlide",
    },
    progressBar: {
        // progressBarShow: false, // Скрыть прогрес Бар
        progressBarShow: true, // Показать прогрес Бар
        progressBarClass: "progressBar",
        progressBarChildClass: "progressBarChild",
        progressColor: "#0857ea",
        trackColor: "#fff",
    },
};
new Gallery(document.getElementById("gallery"), options);
// Если нужна левая кнопка при старте
document.getElementById("btnPrev").removeAttribute("hidden");

