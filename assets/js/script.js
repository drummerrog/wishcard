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

// Слайдер в галерее, где есть изображения
const swiper1 = new Swiper(".Swiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  slidesPerGroup: 1,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Загрузка изобраэений на страницу сайта
function readURL(input) {
  if (input.files && input.files[0]) {
    var i;
    for (let i = 0; i < input.files.length; ++i) {
      var reader = new FileReader();
      reader.onload = function (e) {
        swiper1.appendSlide('<img class="swiper-slide" src="'+e.target.result+'">');
      }
      reader.readAsDataURL(input.files[i]);
    }
  }
}

document.getElementById("imgInp").addEventListener('change',function(){
  readURL(this);
});

// Слайдер в галерее, где нет изображений
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  freeScroll: true,
  mousewheel: {
    invert: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Удаление слайда
document.querySelector('.Swiper').addEventListener('click', (e)=>{
  const target = e.target;
  if(target.classList.contains('swiper-slide')) {
    const children = target.parentNode.children;
    for( let i=0; i< children.length; i++)  {
      if(target===children[i]) swiper1.removeSlide(i); 
    }
  }
});

// $(".swiper-slide").each(function () {
//   $(this).find(".slick").slick("removeSlide");
// });

// Добавление слайдов в начало
// var prependNumber = 1;
// document
//   .querySelector(".prepend-slide")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     swiper.prependSlide(
//       '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
//     );
//   });

  // loop: true,
  // loopFillGroupWithBlank: true,
  // slidesPerGroup: 1,
  // watchOverflow: true,