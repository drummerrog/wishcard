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
  // freeMode: true,
  allowTouchMove: false,
  mousewheel: {
    invert: true,
  },
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
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
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// swiper1.on('scrollbarDragStart', function () {
//   console.log('From slide Drag stared.');
// });

// Загрузка изображений на страницу сайта
function readURL(input) {
  if (input.files && input.files[0]) {
    var i;
    for (let i = 0; i < input.files.length; ++i) {
      var reader = new FileReader();
      reader.onload = function (e) {
        swiper1.appendSlide(`<img class="swiper-slide" src="${e.target.result}" alt="слайд" id="swiperSlide${i + 20}" draggable="true" data-type="proto">`);
      }
      reader.readAsDataURL(input.files[i]);
    }
  }
}

document.getElementById("imgInp").addEventListener('change', function () {
  readURL(this);
});

// Удаление слайда
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
  // keyboard: {
  //   enabled: true,
  //   onlyInViewport: true,
  // },
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
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
});

// Сохранение изображения в компьютер 1
// $('.download').on('click', function(){
// 	var link = document.createElement('a');
// 	link.setAttribute('href', '/image.jpeg');
// 	link.setAttribute('download', 'image.jpeg');
// 	link.click();
// 	return true;
// });

// var x=new XMLHttpRequest();
// 	x.open("GET", "http://danml.com/wave2.jpeg", true);
// 	x.responseType = 'blob';
// 	x.onload=function(e){download(x.response, "dlBinAjax.jpeg", "image/jpeg" ); }
// 	x.send();


// Сохранение изображения в компьютер 2
// let btnDownload = document.querySelector('.download');
// let img = document.querySelector('.card');

// btnDownload.addEventListener('click', () => {
//   let imagePath = img.getAttribute('src');
//   let fileName = getFileName(imagePath);
//   saveAs(imagePath, fileName);
// });

// function getFileName(str) {
//   return str.substring(str.lastIndexOf('/') + 1);
// };


// Сохранение изображения в компьютер 3
// var canvas = new fabric.Canvas('c');

// fabric.Image.fromURL('08.jpg', function(img) {
// 	img.setWidth(200);
// 	img.setHeight(200);
// 	canvas.add(img);
// });

// $("#b").click(function(){
// 	$("#c").get(0).toBlob(function(blob) {
// 		saveAs(blob, "myIMG.png");
// 	});
// });


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

// function dragStart(event) {
//   event.originalEvent.dataTransfer.effectAllowed = 'move';
//   event.originalEvent.dataTransfer.setData("text/plain", event.target);
//   console.log(event);
//   console.log('Dragging...');

//   var clone = event.target.cloneNode(true);
//   event.target.parentNode.appendChild(clone);
//   event.target.ghostDragger = clone;

//   $(clone).addClass('dragging');
//   return true;
// }

// function dragging(event){
//   var clone = event.target.ghostDragger;
// }

// function stopDrag(event){
//   var clone = event.target.ghostDragger;
//   clone.parentNode.removeChild(clone);
// }


window.addEventListener('load', () => {
  let count = posX = posY = blockPosX = blockPosY = 0;
  let swiperWrapper = document.querySelectorAll('.swiper-wrapper');
  let cardWrapperOval = document.querySelectorAll('.card-wrapper__oval');
  let cardWrapperQuadrate = document.querySelectorAll('.card-wrapper__quadrate');

  // ONE
  // function handleClick(e) {
  //   console.log('mousedown', e.target);
  // }
  // swiperWrapper.addEventListener('mousedown', handleClick);

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
        cpElem.classList.add('pos');
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
        cpElem.classList.add('pos');
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

// Изменение размера Карты перед скачиванием
let img = document.getElementById('card');
if (!img.naturalWidth) img.naturalWidth = img.width;
if (!img.naturalHeight) img.naturalHeight = img.height;

let buttons = document.getElementsByName('sizer');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let size = this.getAttribute('data-size');
    img.width = img.naturalWidth * size;
    img.height = img.naturalHeight * size;
  };
};

// Сохранение изображения в компьютер 4
let btnDownload = document.querySelector('.download');

btnDownload.addEventListener("click", () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    const link = document.createElement('a');
    link.download = 'wishcard.jpg';
    link.href = canvas.toDataURL("image/jpeg"); 
    link.click();
  });
});

  // TWO
  // swiperWrapper.addEventListener('mousedown', event => {
  //   if (event.target.classList.contains('delete')) {
  //     swiperWrapper.removeChild(event.target.perentElement)
  //   }
  // });

  // document.body.addEventListener('mousedown', function(event) {
  //   if (event.target.nodeName == 'swiper-slide')
  //   console.log('mousedown', event.target.textContent);
  // });


  // THREE
  // document.querySelectorAll('.swiper-slide').onclick = function() {
  //   let element = document.createElement('div');

  //   document.querySelector('.card-wrapper__oval').appendChild(element);
  // };

  // document.querySelector('.card-wrapper__oval').onclick = function(e) {
  //   if (e.target.matches('.card-wrapper__oval div')) {
  //     let nodes = [].slice.call(document.querySelector('.card-wrapper__oval div'))
  //     console.log('my index is', nodes.indexOf(e.target) );
  //   }
  // };


// Drag and drop - another one
// var itemsListCloned = document.querySelectorAll('.swiper-slide.clone-altered');

// if( itemsListCloned.length ){
// 	[].forEach.call(itemsListCloned, function(item) {
// 		var draggedEl = item.cloneNode();
// 		var currentClone = null;

// 		draggedEl.className += " dragged";

// 		item.addEventListener('dragstart', function(e){
// 			currentClone = this.parentElement.insertBefore(draggedEl, item);
// 			e.dataTransfer.setDragImage(currentClone, 0, 0);
// 		},false);

// 		item.addEventListener('dragend', function(e){
// 			currentClone.remove();
// 		},false);
// 	});
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


// Drag and drop 3 - вариант с мячом
// const zone1 = document.querySelector('.card-wrapper__oval');
// const slide = document.querySelector('#swiperSlide');

// zone1.ondragover = allowDrop;

// function allowDrop(event) {
//   event.preventDefault();
// }

// slide.ondragstart = drag;

// function drag(event) {
//   event.dataTransfer.setData('id', event.target.id);
// }

// zone1.ondrop = drop;

// function drop(event) {
//   let itemId = event.dataTransfer.getData('id');
//   console.log(itemId);
//   event.target.append(document.getElementById(itemId));
// }

// document.addEventListener("dragstart", function( event ) {

//   dragged = event.target;

//   event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function( event ) {

//   event.target.style.opacity = "";
// }, false);


// Drag and drop 4
// let currentDroppable = null;

// swiperSlide.onmousedown = function(event) {

//   let shiftX = event.clientX - swiperSlide.getBoundingClientRect().left;
//   let shiftY = event.clientY - swiperSlide.getBoundingClientRect().top;

//   swiperSlide.style.position = 'absolute';
//   swiperSlide.style.zIndex = 1000;
//   document.body.append(swiperSlide);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     swiperSlide.style.left = pageX - shiftX + 'px';
//     swiperSlide.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     swiperSlide.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     swiperSlide.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.closest('.card-wrapper__oval');
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) {
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) {
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   swiperSlide.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     swiperSlide.onmouseup = null;
//   };

// };

// function enterDroppable(elem) {
//   elem.style.background = 'pink';
// }

// function leaveDroppable(elem) {
//   elem.style.background = '';
// }

// swiperSlide.ondragstart = function() {
//   return false;
// };
