// # Selecting DOM Elements
const jumboImg = document.querySelector("#jumboImg");
const previewImgs = document.querySelectorAll("#previewImg");
const prevImg = document.querySelector("#prevImg");
const nextImg = document.querySelector("#nextImg");

// # Variable Init
let currentImgIndex = 0;

// # Event Listener

// * Go Previous Image Via Arrow
prevImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");
  !currentImgIndex
    ? (currentImgIndex = previewImgs.length - 1)
    : currentImgIndex--;
  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
});

// * Go Next Image Via Arrow
nextImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");

  currentImgIndex >= previewImgs.length - 1
    ? (currentImgIndex = 0)
    : currentImgIndex++;

  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
});

// * Change Image by Clicking the Preview
previewImgs.forEach((previewImg, indexImg) => {
  previewImg.addEventListener("click", () => {
    previewImgs[currentImgIndex].classList.remove("active");
    currentImgIndex = indexImg;
    previewImgs[currentImgIndex].classList.add("active");
    jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
  });
});

// # Autoplay
setInterval(() => {
  previewImgs[currentImgIndex].classList.remove("active");
  currentImgIndex >= previewImgs.length - 1
    ? (currentImgIndex = 0)
    : currentImgIndex++;
  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.src = `./img/img-0${currentImgIndex + 1}.jpg`;
}, 2000);
