import "../../node_modules/focus-visible/dist/focus-visible";
import "../scss/main.scss";
import "../index.html";

import Swiper, { Pagination } from "swiper";

Swiper.use([Pagination]);

let swiperConts = document.querySelectorAll(".swiper");
let swiperWrappers = document.querySelectorAll(".swiper-wrapper");
let sideMenu = document.querySelector(".aside");
let swiperPags = document.querySelectorAll(".swiper-pagination");
let readNext = document.getElementById("readNext");
let showHide = document.getElementById("showHide");
let showHideDev = document.getElementById("showHide-devices");
let burger = document.querySelector(".header").querySelector(".burger__btn");
let burgerClose = document
  .querySelector(".aside")
  .querySelector(".burger__btn-close");
const btns = document.querySelectorAll(".btn-pop");
const btnModal = document.querySelectorAll(".btn-modal");
const modalOverlay = document.querySelector(".modal-overlay ");
const modals = document.querySelectorAll(".modal");

const swiper = new Swiper(".swiper", {
  // slidesPerView: 1,
  // spaceBetween: 20,
  loop: false,
  // slideClass: 'brend__item',
  enabled: false,
  width: 240,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is <= 320px

    // when window width is <= 640px
    320: {
      enabled: true,
      slidesPerView: 1,
    },
  },
});

console.log("first swapps", swiper);

if (window.innerWidth >= 768) {
  swiper[0].destroy();
  swiper[1].destroy();
  swiper[2].destroy();
  swiper.enabled = "false";

  let elements = document.querySelectorAll(".swiper-slide");
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];
    element.classList.remove("swiper-slide");
  }
  for (let j = 0; j < swiperConts.length; j++) {
    let swiperCont = swiperConts[j];
    swiperCont.classList.remove("swiper");
  }
  for (let w = 0; w < swiperWrappers.length; w++) {
    let swiperWrapper = swiperWrappers[w];
    swiperWrapper.classList.remove("swiper-wrapper");
  }
  for (let p = 0; p < swiperPags.length; p++) {
    let swiperPag = swiperPags[p];
    swiperPag.classList.add("hidden");
  }
  // window.location.reload();
}
console.log("another swapps", swiper);
let showMe = function (wrap, cont, btn) {
  let wrapper = document.querySelector(wrap);
  let box = document.querySelector(cont);

  if (btn.classList.contains("show")) {
    if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
      box.classList.add("section--mid");
      wrapper.classList.add("wrapper--mid");
      btn.classList.remove("show");
      btn.classList.add("hide");
    } else {
      box.classList.add("section--desc");
      wrapper.classList.add("wrapper--desc");
      btn.classList.remove("show");
      btn.classList.add("hide");
    }
    // alert('show');
  } else {
    if (window.innerWidth >= 768 && 1015 >= window.innerWidth) {
      box.classList.remove("section--mid");
      wrapper.classList.remove("wrapper--mid");
      btn.classList.remove("hide");
      btn.classList.add("show");
    } else {
      box.classList.remove("section--desc");
      wrapper.classList.remove("wrapper--desc");
      btn.classList.remove("hide");
      btn.classList.add("show");
    }
    // alert('hide');
  }
};
const div = document.querySelector(".aside__wrapper");

sideMenu.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(div);

  if (!withinBoundaries) {
    sideMenu.classList.remove("show__aside"); // скрываем элемент т к клик был за его пределами
  }
});
burger.onclick = function () {
  sideMenu.classList.add("show__aside");
};
burgerClose.onclick = function () {
  sideMenu.classList.remove("show__aside");
};
// sideMenu.onclick = function () {
//   sideMenu.classList.remove("show__aside");
// };

readNext.onclick = function () {
  let wrapp = document.querySelector(".services");
  if (readNext.classList.contains("show")) {
    wrapp.classList.add("service-show");
    readNext.classList.remove("show");
    readNext.classList.add("hide");
  } else {
    wrapp.classList.remove("service-show");
    readNext.classList.remove("hide");
    readNext.classList.add("show");
  }
};

showHideDev.onclick = function () {
  return showMe(".devices__wrapper", ".devices__box", showHideDev);
};
showHide.onclick = function () {
  return showMe(".brends__wrapper", ".brends__box", showHide);
};

window.addEventListener("resize", function () {
  window.location.reload();
});

btns.forEach((el) => {
  el.addEventListener("click", (e) => {
    let path = e.currentTarget.getAttribute("data-path");

    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });

    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("modal--visible");
    modalOverlay.classList.add("modal-overlay--visible");
  });
});

btnModal.forEach((el) => {
  el.onclick = function () {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  };
});
// btnModal.onclick = function () {
//   modalOverlay.classList.remove("modal-overlay--visible");
//   modals.forEach((el) => {
//     el.classList.remove("modal--visible");
//   });
// };

modalOverlay.addEventListener("click", (e) => {
  if (e.target == modalOverlay) {
    modalOverlay.classList.remove("modal-overlay--visible");
    modals.forEach((el) => {
      el.classList.remove("modal--visible");
    });
  }
});
