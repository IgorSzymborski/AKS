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
const pricingLink = document.querySelector(".pricingLink");
const pricingBox = document.querySelector(".pricing-box");
const pricingCloseBtn = document.querySelector(".pricingCloseBtn");
const overflowH = document.querySelector(".overflow-hidden");

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

    // document.body.classList.remove(".overflowH");
  });
});

pricingLink.addEventListener("click", function () {
  pricingBox.classList.remove("hidden");

  document.body.style.overflow = "hidden";

  console.log(document.body.style.overflow);
});

pricingCloseBtn.addEventListener("click", () => {
  pricingBox.classList.toggle("hidden");
  document.body.style.overflow = "";
});

const map = L.map("map").setView([52.39880766106131, 20.931744687666964], 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
}).addTo(map);

L.marker([52.39880766106131, 20.931744687666964])
  .addTo(map)
  .bindPopup("Akademia Kształcenia Sportowego")
  .openPopup();

///

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
});

if (!hamburgerButton.classList.contains("active")) {
  hamburgerButton.style.position = "static";
  document.body.style.overflow = "";
} else {
}
