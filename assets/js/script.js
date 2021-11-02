// Табы в галерее
var jsTriggers = document.querySelectorAll(".js-tab-trigger");

jsTriggers.forEach(function (trigger) {
  trigger.addEventListener("click", function () {
    var id = this.getAttribute("data-tab"),
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

// Слайдер в галерее, где есть изображения
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 2,
  slidesPerGroup: 1,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiperOptionsActive() {
//   this.showSlider = false;
//   this.$nextTick(() => {
//     this.showSlider = true
//   });
// },

// Загрузка изобраэений на страницу сайта
function readURL(input) {
  if (input.files && input.files[0]) {
    var i;
    for (i = 0; i < input.files.length; ++i) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.swiper-wrapper').prepend('<img class="swiper-slide" src="'+e.target.result+'">');
      }
      reader.readAsDataURL(input.files[i]);
    }
  }
}

$("#imgInp").change(function(){
  readURL(this);
});

// Слайдер в галерее, где нет изображений
var swiper = new Swiper(".Swiper", {
  slidesPerView: 9,
  spaceBetween: 2,
  slidesPerGroup: 1,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Добавление слайдов в начало
var prependNumber = 1;
document
  .querySelector(".prepend-slide")
  .addEventListener("click", function (e) {
    e.preventDefault();
    swiper.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
    );
  });

  // loop: true,
  // loopFillGroupWithBlank: true,
  // watchOverflow: true,