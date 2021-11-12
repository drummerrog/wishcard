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
  watchOverflow: true,
  // freeScroll: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    375: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3
    }
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

// Слайдер в галерее, где есть изображения
var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  loop: true,
  // loopFillGroupWithBlank: true,
  // loopedSlides: 15,
  // freeScroll: true,
  mousewheel: {
    invert: true,
  },
  // breakpoints: {
  //   320: {
  //     slidesPerView: 1
  //   },
  //   375: {
  //     slidesPerView: 2
  //   },
  //   425: {
  //     slidesPerView: 2
  //   },
  //   768: {
  //     slidesPerView: 3
  //   }
  // },
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

// Сохранение изображения в компьютер
$('.download').on('click', function(){
	var link = document.createElement('a');
	link.setAttribute('href', '/download.jpeg');
	link.setAttribute('download', 'download.jpeg');
	link.click();
	return false;
});

// var x=new XMLHttpRequest();
// 	x.open("GET", "http://danml.com/wave2.jpeg", true);
// 	x.responseType = 'blob';
// 	x.onload=function(e){download(x.response, "dlBinAjax.jpeg", "image/jpeg" ); }
// 	x.send();


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