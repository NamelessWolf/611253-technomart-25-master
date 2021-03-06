var link = document.querySelector(".button-form");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector(".form-name");
var form = popup.querySelector(".feedback-form");
var mail = popup.querySelector(".form-email");
var text = popup.querySelector(".form-text");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("mail");
} catch (err) {
  isStorageSupport = false;
}

if ((link) !== null) {
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  name.focus();
}); 
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!name.value || !mail.value || !text.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля!");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("mail", mail.value);
    }
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
}

var sliderDrill = document.querySelector(".slider-drill");
var sliderPerforator = document.querySelector(".slider-perforator");
var sliderRadio1 = document.querySelector(".slider-radio-1");
var sliderRadio2 = document.querySelector(".slider-radio-2");

if ((sliderDrill) !== null) {

sliderRadio1.addEventListener("click", function (evt) {
  sliderPerforator.classList.remove("slider-item");
  if (!sliderDrill.classList.contains("slider-item")) {
    sliderDrill.classList.add("slider-item");
  }
});

sliderRadio2.addEventListener("click", function (evt) {
  sliderDrill.classList.remove("slider-item");
  if (!sliderPerforator.classList.contains("slider-item")) {
    sliderPerforator.classList.add("slider-item");
  }
});

var sliderDelivery_radio = document.querySelector(".slider_delivery");
var sliderGuarantee_radio = document.querySelector(".slider_guarantee");
var sliderCredit_radio = document.querySelector(".slider_credit");
var sliderDelivery = document.querySelector(".service-slider-delivery");
var sliderGuarantee = document.querySelector(".service-slider-guarantee");
var sliderCredit = document.querySelector(".service-slider-credit");

sliderDelivery_radio.addEventListener("click", function (evt) {
  sliderDelivery.classList.remove("slider-item");
  sliderGuarantee.classList.add("slider-item");
  sliderCredit.classList.add("slider-item");
});

sliderGuarantee_radio.addEventListener("click", function (evt) {
  sliderGuarantee.classList.remove("slider-item");
  sliderDelivery.classList.add("slider-item");
  sliderCredit.classList.add("slider-item");
});

sliderCredit_radio.addEventListener("click", function (evt) {
  sliderCredit.classList.remove("slider-item");
  sliderGuarantee.classList.add("slider-item");
  sliderDelivery.classList.add("slider-item");
});

}


var linkBuy_main = document.querySelectorAll(".item-buy");
var linkBookmark_main = document.querySelectorAll(".item-mark");
var modalPurchase_main = document.querySelector(".modal-purchase");
var modalClose_main = modalPurchase_main.querySelector(".modal-close");
var cart_main = document.querySelector(".header-cart");
var bookmark_main = document.querySelector(".header-bookmark");


for (var i = 0; i < linkBuy_main.length; i++) {
  linkBuy_main[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    modalPurchase_main.classList.add("modal-show");
    cart_main.classList.add("header-cart-full");
  });
}

for (var i = 0; i < linkBookmark_main.length; i++) {
  linkBookmark_main[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    bookmark_main.classList.add("header-cart-full");
  });
}

modalClose_main.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalPurchase_main.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalPurchase_main.classList.contains("modal-show")) {
      modalPurchase_main.classList.remove("modal-show");
    }
  }
});

var sliderPrevious = document.querySelector(".slider-button-previous");
var sliderNext = document.querySelector(".slider-button-next");

if ((sliderPrevious) !== null) {

sliderPrevious.addEventListener("click", function (evt) {
  sliderPerforator.classList.remove("slider-item");
  if (!sliderDrill.classList.contains("slider-item")) {
    sliderDrill.classList.add("slider-item");
  }
});

sliderNext.addEventListener("click", function (evt) {
  sliderDrill.classList.remove("slider-item");
  if (!sliderPerforator.classList.contains("slider-item")) {
    sliderPerforator.classList.add("slider-item");
  }
});
}