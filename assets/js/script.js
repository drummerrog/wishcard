// Табы в галерее
const jsTriggers = document.querySelectorAll(".js-tab-trigger");

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    const id = this.getAttribute("data-tab"),
      content = document.querySelector(
        '.js-tab-content[data-tab="' + id + '"]'
      ),
      activeTrigger = document.querySelector(".js-tab-trigger.active"),
      activeContent = document.querySelector(".js-tab-content.active");

    activeTrigger.classList.remove("active");
    trigger.classList.add("active");

    activeContent.classList.remove("active");
    content.classList.add("active");
  });
});

// Табы в сайдбаре
$(document).ready(function () {
  $(".sidebar-tab__item").click(function () {
    var tab_id = $(this).attr("data-tab");
    var parent = $(this).closest(".sidebar-tabs");

    parent.find(".sidebar-tab__item").removeClass("active");
    parent.find(".sidebar-tabs__content").removeClass("active");

    $(this).addClass("active");
    parent.find("[data-tab=" + tab_id + "]").addClass("active");
  });
});

// Слайдер в галерее, где нет изображений
const swiper1 = new Swiper(".Swiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  slidesPerGroup: 1,
  initialSlide: 0,
  allowTouchMove: false,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// Загрузка изображений на страницу сайта
function readURL(input) {
  if (input.files && input.files[0]) {
    var i;
    for (let i = 0; i < input.files.length; ++i) {
      var reader = new FileReader();
      reader.onload = function (e) {
        let now = Date.now();
        swiper1.appendSlide(`<img class="swiper-slide" src="${e.target.result}" alt="слайд" id="swiperSlide-${now}" draggable="true" data-type="proto">`);
      }
      reader.readAsDataURL(input.files[i]);
    }
  }
}

document.getElementById("imgInp").addEventListener('change', function () {
  readURL(this);
});

// Удаление слайда из слайдера
document.querySelector('.Swiper').addEventListener('click', (e) => {
  const target = e.target;
  if (target.classList.contains('swiper-slide')) {
    const children = target.parentNode.children;
    for (let i = 0; i < children.length; i++) {
      if (target === children[i]) swiper1.removeSlide(i);
    }
  }
});

// Слайдер в галерее, где есть изображения
const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  slidesPerGroup: 1,
  initialSlide: null,
  loop: true,
  loopedSlides: 0,
  allowTouchMove: false,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// Drag and drop
window.addEventListener('load', () => {
  let count = posX = posY = blockPosX = blockPosY = 0;
  let swiperWrapper = document.querySelectorAll('.swiper-wrapper');
  let cardWrapperOval = document.querySelectorAll('.card-wrapper__oval');
  let cardWrapperQuadrate = document.querySelectorAll('.card-wrapper__quadrate');

  swiperWrapper.forEach(item => {
    item.addEventListener('mousedown', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grabbing";
        blockPosX = e.offsetX;
        blockPosY = e.offsetY;
      }
    });

    item.addEventListener('mouseup', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grab";
      }
    });

    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id);
    });

    item.addEventListener('dragend', e => {
      e.target.style.cursor = "grab";
    });
  });

  cardWrapperOval.forEach(item => {
    item.addEventListener('mousedown', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grabbing";
      }
    });

    item.addEventListener('mouseup', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grab";
      }
    });

    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id);
    });

    item.addEventListener('dragend', e => {
      e.target.style.cursor = "grab";
    });

    item.addEventListener('dragenter', e => {
      e.preventDefault();
    });

    item.addEventListener('dragover', e => {
      e.preventDefault();
      posX = e.offsetX - blockPosX;
      posY = e.offsetY - blockPosY;
    });

    item.addEventListener('drop', e => {
      e.preventDefault();
      let id = e.dataTransfer.getData('text');
      let el = document.getElementById(id);
      if (el.getAttribute('data-type') == 'proto') {
        count++;
        let cpElem = el.cloneNode(true);
        cpElem.setAttribute('id', id + "_" + count);
        cpElem.setAttribute('data-type', 'elem');
        cpElem.classList.add('pos1');
        cpElem.style.cursor = "grab";
        e.target.appendChild(cpElem);
      } else if (el.getAttribute('data-type') == 'elem') {
        el.style.position = "absolute";
        if (posX < 0) {
          posX = 0;
        }
        if (posY < 0) {
          posY = 0;
        }
        el.style.top = posY + "px";
        el.style.left = posX + "px";
      }
    });
  });

  cardWrapperQuadrate.forEach(item => {
    item.addEventListener('mousedown', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grabbing";
      }
    });

    item.addEventListener('mouseup', e => {
      if (e.target.classList.contains('swiper-slide')) {
        e.target.style.cursor = "grab";
      }
    });

    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text', e.target.id);
    });

    item.addEventListener('dragend', e => {
      e.target.style.cursor = "grab";
    });

    item.addEventListener('dragenter', e => {
      e.preventDefault();
    });

    item.addEventListener('dragover', e => {
      e.preventDefault();
      posX = e.offsetX - blockPosX;
      posY = e.offsetY - blockPosY;
    });

    item.addEventListener('drop', e => {
      e.preventDefault();
      let id = e.dataTransfer.getData('text');
      let el = document.getElementById(id);
      if (el.getAttribute('data-type') == 'proto') {
        count++;
        let cpElem = el.cloneNode(true);
        cpElem.setAttribute('id', id + "_" + count);
        cpElem.setAttribute('data-type', 'elem');
        cpElem.classList.add('pos2');
        cpElem.style.cursor = "grab";
        e.target.appendChild(cpElem);
      } else if (el.getAttribute('data-type') == 'elem') {
        el.style.position = "absolute";
        if (posX < 0) {
          posX = 0;
        }
        if (posY < 0) {
          posY = 0;
        }
        el.style.top = posY + "px";
        el.style.left = posX + "px";
      }
    });
  });
});

// Удаление слайда из ячеек карты
document.querySelectorAll('.card-wrapper__oval') // получаем все овалы на странице
  .forEach(oval => { // пробегаемся по ним в цикле
    oval.addEventListener('click', () => { // на каждый овал вешаем слушатель клика
      // удаляем весь HTML внутри овала, соответсвенно, все элементы внутри. Это можно сделать и по-другому, если этот способ не подойдет
      oval.innerHTML = '';
    })
  })

document.querySelectorAll('.card-wrapper__quadrate')
  .forEach(oval => {
    oval.addEventListener('click', () => {
      oval.innerHTML = '';
    })
  })

// Сохранение изображения в компьютер
// БЛОК №1 ВЫТАСКИВАЕМ  ЦВЕТ  ДЛЯ  ПЛАШКИ
let elToDownloadBgColor = 'rgb(255, 255, 255)';
let blockColors;
const colorTitle = Array.from(document.querySelectorAll('span')) // находим все элементы span
colorTitle.forEach((itm, indx) => {
  // находим элемент "Цвет" и запоминаем в blockColors соседний блок, содержащий экземпляры цветов
  itm.textContent === 'Цвет' ? blockColors = colorTitle[indx]['nextElementSibling'] : null;
})
blockColors.addEventListener('click', (e) => {// вешаем обработчик событий на blockColors
  const trgt = e.target;
  // вытаскиваем цвет для плашки
  elToDownloadBgColor = window.getComputedStyle(trgt)['backgroundColor']
  console.log(`Цвет плашки = ${elToDownloadBgColor}`)
})

// БЛОК №2  ВЫБОР  РАЗМЕРА  ИЗОБРАЖЕНИЯ
let canvasScale = 7;
const sizeBtns = document.querySelector('.sidebar-tabs_size');
sizeBtns.addEventListener('click', (e) => {
  e.preventDefault();
  const trgt = e.target;
  const sizes = Array.from(sizeBtns.querySelectorAll('.sidebar-tab__size'));
  if (trgt == sizes[0]) {
    sizes[0].style.backgroundColor = '#ffe1c0'
    sizes[1].style.backgroundColor = '#ffffff'
    canvasScale = 10;
  } // пользователь выбрал формат А1
  if (trgt == sizes[1]) {
    sizes[1].style.backgroundColor = '#ffe1c0'
    sizes[0].style.backgroundColor = '#ffffff'
    canvasScale = 7;
  } // пользователь выбрал формат А2
});

// БЛОК №3  СОХРАНЕНИЕ  ПЛАШКИ  НА  КОМП
let btnDownload = document.querySelector('.download');

$('button').on('click', () => {
  const ElToDownloadID = $('.sidebar-tabs__content.active')[1].id;
  const elToDownload = document.querySelector(`#${ElToDownloadID}`);
  html2canvas(elToDownload, {
    backgroundColor: `${elToDownloadBgColor}`,
    scale: canvasScale,
  }).then((canvas) => {
    const body = $('body');
    const link = $('<a></a>');
    link.attr({
      href: canvas.toDataURL('image/jpeg'),
      download: 'dreamboard.jpg',
    });
    body.append(link);
    link[0].click();
    link.remove();
  });
});