// # Selecting DOM Elements
const container = document.querySelector("#container");
const jumboImg = document.querySelector("#jumboImg");
const previewImgContainer = document.querySelector("#previewImgContainer");
const prevImg = document.querySelector("#prevImg");
const nextImg = document.querySelector("#nextImg");

// # Variable Init
const imgs = [
  {
    alt: "img-01",
    path: "./img/img-01.jpg",
  },
  {
    alt: "img-02",
    path: "./img/img-02.jpg",
  },
  {
    alt: "img-03",
    path: "./img/img-03.jpg",
  },
];

let currentImgIndex = 0;

// # Img Generation
jumboImg.innerHTML = `<img src="./img/img-01.jpg" alt="img-01" />`;
let previewImgHtml = `
    <div class="preview-img active" id="previewImg">
      <img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].path} />
    </div>
  `;

for (let i = 1; i < imgs.length; i++) {
  const img = imgs[i];
  previewImgHtml += `
      <div class="preview-img" id="previewImg">
        <img src=${img.path} alt=${img.alt} />
      </div>
    `;
}

previewImgContainer.innerHTML = previewImgHtml;

// # Event Listener
const previewImgs = document.querySelectorAll("#previewImg");

// * Go Previous Image Via Arrow
prevImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");

  !currentImgIndex
    ? (currentImgIndex = previewImgs.length - 1)
    : currentImgIndex--;

  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.innerHTML = `<img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].alt} />`;
});

// * Go Next Image Via Arrow
nextImg.addEventListener("click", () => {
  previewImgs[currentImgIndex].classList.remove("active");

  currentImgIndex >= previewImgs.length - 1
    ? (currentImgIndex = 0)
    : currentImgIndex++;

  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.innerHTML = `<img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].alt} />`;
});

// * Change Image by Clicking the Preview
previewImgs.forEach((previewImg, indexImg) => {
  previewImg.addEventListener("click", () => {
    previewImgs[currentImgIndex].classList.remove("active");
    currentImgIndex = indexImg;
    previewImgs[currentImgIndex].classList.add("active");
    jumboImg.innerHTML = `<img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].alt} />`;
  });
});

// # Autoplay
let autoPlay;
autoPlay = setInterval(() => {
  previewImgs[currentImgIndex].classList.remove("active");
  currentImgIndex >= previewImgs.length - 1
    ? (currentImgIndex = 0)
    : currentImgIndex++;
  previewImgs[currentImgIndex].classList.add("active");
  jumboImg.innerHTML = `<img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].alt} />`;
}, 1500);

container.addEventListener("mouseover", () => {
  clearInterval(autoPlay);
});

container.addEventListener("mouseleave", () => {
  autoPlay = setInterval(() => {
    previewImgs[currentImgIndex].classList.remove("active");
    currentImgIndex >= previewImgs.length - 1
      ? (currentImgIndex = 0)
      : currentImgIndex++;
    previewImgs[currentImgIndex].classList.add("active");
    jumboImg.innerHTML = `<img src=${imgs[currentImgIndex].path} alt=${imgs[currentImgIndex].alt} />`;
  }, 1500);
});
