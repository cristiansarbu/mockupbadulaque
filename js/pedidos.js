let botonDropdown = document.querySelector(".drop-btn");
let contenidoDropdown = document.querySelector(".dropdown-content");

function clickDropdown() {
  contenidoDropdown.classList.toggle("toggle");
}

botonDropdown.addEventListener("click", (event) => {
  clickDropdown();
});
