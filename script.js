const body = document.querySelector("body");
const openPopupBtns = document.querySelectorAll(".open-popup");
const closePopupBtns = document.querySelectorAll(".close-popup");
const sendFormBtn = document.querySelector(".form-button");
const popups = document.querySelectorAll(".popup-descripion");
const maps = document.querySelector(".map");
const nav = document.querySelector(".navigation");
const contactBox = document.querySelector(".header-contact-box");
const closeMenuBtn = document.querySelectorAll(".navigation-list-item");
const navLink = document.querySelector(".nav-link");
const pricingLink = document.querySelectorAll(".pricingLink");
const pricingBox = document.querySelector(".pricing-box");
const pricingCloseBtn = document.querySelector(".pricingCloseBtn");
const overflowH = document.querySelector(".overflow-hidden");
const docsLink = document.querySelectorAll(".docLink");
const docsPopup = document.querySelector(".docsPopup");
const docsCloseButton = document.querySelector(".docsCloseButton");
const scheduleLink = document.querySelectorAll(".scheduleLink");
const schedulePopup = document.querySelector(".schedulePopup");
const scheduleCloseLink = document.querySelector(".scheduleCloseLink");
const galleryImg = document.querySelectorAll(".gallery-img-box");
const bigGallery = document.querySelector(".big-gallery");
const closeGallery = document.querySelector(".closeGallery");
const bigGalleryImg = document.querySelector(".big-gallery-img");

const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");

const togglePopup = (button) => {
  popups.forEach((popup) => {
    if (popup.getAttribute("data-popup") === button.getAttribute("data-btn")) {
      popup.classList.toggle("hidden");
    }
  });
};

openPopupBtns.forEach((button) => {
  button.addEventListener("click", function () {
    togglePopup(button);

    document.body.style.overflow = "hidden";
  });
});

closePopupBtns.forEach((button) => {
  button.addEventListener("click", function () {
    togglePopup(button);

    document.body.classList.remove(".overflowH");
    document.body.style.overflow = "";
  });
});

closeMenuBtn.forEach((button) => {
  button.addEventListener("click", function () {
    nav.classList.toggle("hiddenn");
    contactBox.classList.toggle("hiddenn");
    hamburgerButton.style.position = "static";
    hamburgerButton.classList.remove("active");
    document.body.style.overflow = "";

    console.log(button.classList.contains("pricingLink"));

    if (button.classList.contains("pricingLink")) {
      document.body.style.overflow = "hidden";
    }

    document.body.classList.remove(".overflowH");
  });
});

pricingLink.forEach((button) => {
  button.addEventListener("click", function () {
    pricingBox.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  });
});

docsLink.forEach((button) => {
  button.addEventListener("click", () => {
    docsPopup.classList.remove("hidden");

    document.body.style.overflow = "hidden";
  });
});

scheduleLink.forEach((button) => {
  button.addEventListener("click", () => {
    schedulePopup.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
});

pricingCloseBtn.addEventListener("click", () => {
  pricingBox.classList.toggle("hidden");
  document.body.style.overflow = "";
});

docsCloseButton.addEventListener("click", () => {
  docsPopup.classList.toggle("hidden");
  document.body.style.overflow = "";
});

scheduleCloseLink.addEventListener("click", () => {
  schedulePopup.classList.toggle("hidden");
  document.body.style.overflow = "";
});

galleryImg.forEach((button) => {
  button.addEventListener("click", () => {
    if (window.innerWidth > 550) {
      console.log("Funkcja działa na ekranach szerszych niż 550px");
      bigGallery.classList.toggle("hidden");
      bigGallery.style.display = "flex";
      document.body.style.overflow = "hidden";
      console.log("test");
    } else {
      return;
    }
  });
});

closeGallery.addEventListener("click", () => {
  bigGallery.classList.toggle("hidden");
  document.body.style.overflow = "";
  bigGallery.style.display = "";
});

let index = 1;

const showSlide = (index) => {
  bigGalleryImg.src = `/img/galleryCarousel${index}.webp`;
};

const prevSlide = (params) => {};

leftArrow.addEventListener("click", () => {
  if (index === 0 || index === 1) {
    index = 6;
  } else {
    index--;
  }
  showSlide(index);
});

rightArrow.addEventListener("click", () => {
  if (index === 6) {
    index = 1;
  } else {
    index++;
  }
  showSlide(index);
});
showSlide(index);

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const sendMail = () => {
  const params = {
    from_name: document.querySelector("#name").value,
    email_id: document.querySelector("#email").value,
    message: document.querySelector("#textcontent").value,
  };
  emailjs
    .send("service_ob35zpq", "template_u1i3y2k", params)
    .then(function (res) {
      alert("Dziekujemy ze przeslanie wiadomosci!" + res.status);
    });
};

sendFormBtn.addEventListener("click", sendMail);

const hamburgerButton = document.getElementById("hamburger-button");

hamburgerButton.addEventListener("click", () => {
  hamburgerButton.classList.toggle("active");

  nav.classList.toggle("hiddenn");
  contactBox.classList.toggle("hiddenn");
  hamburgerButton.style.position = "fixed";
  document.body.style.overflow = "hidden";

  if (!hamburgerButton.classList.contains("active")) {
    hamburgerButton.style.position = "static";

    document.body.style.overflowY = "scroll";
  }
});

let map;

async function initMap() {
  const position = { lat: 52.39880766106131, lng: 20.931744687666964 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();
