# gallery-swiper
## Слайдер-галлерея для простых проектов. Включает в себя: 
>1. Адаптивная ширина экрана(пересчёт ширины экрана);
>2. Листается мышкой и на тачскринах
>3. Изменение показа числа слайдов в окне;
>4. Отступ между слайдами с медиа запросами в px;
>5. Плавность сдвига слайда в секундах;
>6. Минимальный сдвиг по экрану px;
>7. Бесконечный слайдер(true или false)(опция);
>8. Автоперелистывание вправо или влево(опция);
>9. Кнопки перемещение вправо влево(опция);
>10. Буллеты(с управлением) плюс нумерация(опция)
>11. Нумерация слайдов(опция);
>12. Прогресс Бар(опция);
## Установка
    npm i gallery-swiper
## Использование
>js
```js
"use strict";
import Gallery from "gallery-swiper";

const options = {
    // Обязательные параметры
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
    // Не обязательные параметры
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
```
>css
```css
.slider-container {
    max-width: 50%;
    margin: 20px auto;
    /* Чтобы во время перетаскивания слайда ничего не выделить внутри него */
    user-select: none;
    /* Чтобы слайды не сжимались */
    flex-shrink: 0;
    position: relative;
}

#gallery {
    width: 100%;
    overflow: hidden;
    cursor: grab;
}

.gallery-line {
    overflow: hidden;
    transition: all 0.3s ease 0s;
}

.gallery-unit {
    float: left;
    min-height: 1px;
}

.controls {
  margin: 0px auto;
}

#btnPrev {
  position: absolute;
  top: 50%;
  left: -32px;
  border-radius: 50%;
  box-shadow: -1px 1px 5px 3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}

#btnNext {
  position: absolute;
  top: 50%;
  right: -58px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px 3px rgba(0, 0, 0, 0.5);
  background-color: #fff;
}

.bullets {
  position: absolute;
  bottom: 10px;
  left: 25%;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
}

.bullet {
  height: 8px;
  width: 25px;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: inset 1px 1px 2px 2px rgba(0, 0, 0, 0.5);
}

.bullets li[data-active=active] {
  box-shadow: 1px 1px 3px 3px rgba(255, 255, 255, 0.7);
  background-color: #fff;
}

.numberSlide {
  position: absolute;
  top: 10px;
  z-index: 10;
  left: 45%;
}

.one-text, .separator {
  font-style: italic;
}

.currentSlide, .length-slide {
  font-size: small;
}

.progressBar .progressBarChild {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  border: 0.7px solid #0857ea;
}
```
>html
```html
    <!-- Ширина окна слайдера -->
    <div class="slider-container">
        <!-- Присваевается id -->
        <div id="gallery">
            <!-- Элементы слайдера -->
            <div class="item"></div>
            <div class="item"></div>
            <div class="item"></div>
        </div>
        <!-- Если нужны буллеты -->
        <ul class="bullets" id="bullets"></ul>
        <!-- Если нужны кнопки управления -->
        <div class="control">
            <button id="btnPrev">Назад</button>
            <button id="btnNext">Вперёд</button>
        </div>
    </div>
```
