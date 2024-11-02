// # Selecting DOM Elements
const jumboImg = document.querySelector("#jumboImg");
const previewImgs = document.querySelectorAll("#previewImg");
const prevImg = document.querySelector("#prevImg");
const nextImg = document.querySelector("#nextImg");

// # Variable Init
let currentImgIndex = 0;

// # Event Listener
prevImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");
  !currentImgIndex
    ? (currentImgIndex = previewImgs.length - 1)
    : currentImgIndex--;
  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
});

nextImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");

  currentImgIndex >= previewImgs.length - 1
    ? (currentImgIndex = 0)
    : currentImgIndex++;

  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
});
