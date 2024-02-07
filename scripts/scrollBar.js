let exPosition = 0;
let scrollArea = document.getElementById("scrollBody");
let back = document.querySelector("#scrollBack");
let allCard = document.querySelectorAll(".item");
let body = document.querySelector("body");

back.addEventListener("wheel", (elementy) => {
  body.style.overflowY = "hidden";

  if (elementy.deltaY > 0) {
    if (exPosition <= -220) {
      scrollArea.style.transform =
        "translate3d(" + (exPosition += 220) + "px" + ", 0, 0)";
    }
  } else {
    if (exPosition >= -2800) {
      scrollArea.style.transform =
        "translate3d(" + (exPosition += -220) + "px" + ", 0, 0)";
      e.preventDefault();
    }
  }
});
back.addEventListener("mouseover", () => {
  body.style.overflowY = "hidden";
});
back.addEventListener("mouseout", () => {
  body.style.overflowY = "scroll";
});
