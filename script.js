const body = document.querySelector("body");
const openPopupBtns = document.querySelectorAll(".open-popup");
const closePopupBtns = document.querySelectorAll(".close-popup");
const sendFormBtn = document.querySelector(".form-button");
const popups = document.querySelectorAll(".popup-descripion");
const maps = document.querySelector(".map");
const nav = document.querySelector(".navigation");

console.log(nav);

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
    body.classList.add("overflow-h");
  });
});

closePopupBtns.forEach((button) => {
  button.addEventListener("click", function () {
    togglePopup(button);
    body.classList.remove("overflow-h");
  });
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
});
