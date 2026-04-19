const filterKnop = document.getElementById("filterKnop");
const filterMenu = document.getElementById("filterMenu");

filterKnop.addEventListener("click", function () {
    filterMenu.classList.toggle("open");
});