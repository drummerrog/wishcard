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
  freeMode: true,
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

// Загрузка изображений на страницу сайта
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
const swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 9,
  spaceBetween: 1,
  slidesPerGroup: 1,
  loop: true,
  loopedSlides: 0,
  // loopFillGroupWithBlank: true,
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

// Drag and drop 3
const zone1 = document.querySelector('.card-wrapper');
const zone2 = document.querySelector('.swiper-wrapper');
const slide = document.querySelector('#swiperSlide');

zone1.ondragover = allowDrop;
zone2.ondragover = allowDrop;

function allowDrop(event) {
  event.preventDefault();
}

slide.ondragstart = drag;

function drag(event) {
  event.dataTransfer.setData('id', event.target.id);
}

zone1.ondrop = drop;
zone2.ondrop = drop;

function drop(event) {
  let itemId = event.dataTransfer.getData('id');
  console.log(itemId);
  event.target.append(document.getElementById(itemId));
}

document.addEventListener("dragstart", function( event ) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function( event ) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);


// Drag and drop 1
// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }


// Drag and drop 2
// const tasksListElement = document.querySelector(`.swiper-wrapper`);
// const taskElements = tasksListElement.querySelectorAll(`.swiper-slide`);

// for (const task of taskElements) {
//   task.draggable = true;
// }

// tasksListElement.addEventListener(`dragstart`, (evt) => {
//   evt.target.classList.add(`selected`);
// });

// tasksListElement.addEventListener(`dragend`, (evt) => {
//   evt.target.classList.remove(`selected`);
// });

// tasksListElement.addEventListener(`dragover`, (evt) => {
//   evt.preventDefault();
  
//   const activeElement = tasksListElement.querySelector(`.selected`);
//   const currentElement = evt.target;
//   const isMoveable = activeElement !== currentElement &&
//     currentElement.classList.contains(`card-wrapper__oval`);
    
//   if (!isMoveable) {
//     return;
//   }
  
//   const nextElement = (currentElement === activeElement.nextElementSibling) ?
// 		currentElement.nextElementSibling :
// 		currentElement;
		
// 	tasksListElement.insertBefore(activeElement, nextElement);
// });


// var x=new XMLHttpRequest();
// 	x.open("GET", "http://danml.com/wave2.jpeg", true);
// 	x.responseType = 'blob';
// 	x.onload=function(e){download(x.response, "dlBinAjax.jpeg", "image/jpeg" ); }
// 	x.send();

  // loop: true,
  // loopFillGroupWithBlank: true,
  // slidesPerGroup: 1,
  // watchOverflow: true,