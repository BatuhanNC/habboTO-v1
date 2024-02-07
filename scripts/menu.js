let menuIcon = document.querySelector(".mobileMenuIcon");
let menuContent = document.querySelector(".mobileMenu");
let menuStatus = 0;
menuIcon.addEventListener("click", () => {
  if (menuStatus == 0) {
    menuContent.style.display = "block";
    menuStatus = 1;
  } else {
    menuContent.style.display = "none";
    menuStatus = 0;
  }
});
// var urlParams = new URLSearchParams(window.location.search);
// // Belirli bir parametreyi almak
// var pageName = urlParams.get("page");
// let menuButton = document.querySelectorAll(".menuButton");

// let HabboTO = document.querySelectorAll(".HabboTO");
// menuButton.addEventListener("click", () => {
//   document.querySelector(".home").classList.remove("inactive-section");
// });
