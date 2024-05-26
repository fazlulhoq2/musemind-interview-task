var menuItem = document.getElementById("menu-item");
menuItem.style.maxHeight = "0px";
function menuToggle() {
  if (menuItem.style.maxHeight == "0px") {
    menuItem.style.maxHeight = "200px";
  } else {
    menuItem.style.maxHeight = "0px";
  }
}


const sliders = document.querySelectorAll(".slider-track");

sliders.forEach((slider) => {
  const clone = slider.cloneNode(true);
  slider.parentElement.appendChild(clone);
});



const items = document.querySelectorAll(".accordion button");

items.forEach((item) => item.addEventListener("click", toggleAccordion));

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (let item of items) {
    item.setAttribute("aria-expanded", false);
  }

  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", true);
  }
}