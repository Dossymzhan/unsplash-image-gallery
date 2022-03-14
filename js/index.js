"use strict";

const accessKey = "m94e_SKFZ0ug15ekNNXXznLH3IDU9QvV4KaSMAMVSxM";

const randomPhotoUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

const gallery = document.querySelector(".gallery");

let allImages;
let currentImg = 0;

// fetch images
const getImages = async function () {
  const res = await fetch(randomPhotoUrl);
  const data = await res.json();
  allImages = data;
  makeImages(allImages);
};

// add images on UI
const makeImages = (data) => {
  data.forEach((item, index) => {
    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = "gallery-img";

    gallery.appendChild(img);

    // popup image
    img.addEventListener("click", () => {
      currentImg = index;
      showPopup(item);
    });
  });
};

// add popup
const showPopup = (item) => {
  let popup = document.querySelector(".popup");
  const downloadBtn = document.querySelector(".download-btn");
  const closeBtn = document.querySelector(".close-btn");
  const image = document.querySelector(".large-img");

  popup.classList.remove("hide");
  downloadBtn.href = item.links.html;
  image.src = item.urls.regular;

  // close btn
  closeBtn.addEventListener("click", () => {
    popup.classList.add("hide");
  });
};

getImages();

// controls

const preBtn = document.querySelector(".pre-btn");
const nxtbtn = document.querySelector(".nxt-btn");

preBtn.addEventListener("click", () => {
  if (currentImg > 0) {
    currentImg--;
    showPopup(allImages[currentImg]);
  }
});

nxtbtn.addEventListener("click", () => {
  if (currentImg < allImages.length - 1) {
    currentImg++;
    showPopup(allImages[currentImg]);
  }
});
