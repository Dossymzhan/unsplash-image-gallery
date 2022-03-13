"use strict";

const accessKey = "m94e_SKFZ0ug15ekNNXXznLH3IDU9QvV4KaSMAMVSxM";

const randomPhotoUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&count=30`;

const gallery = document.querySelector(".gallery");

let allImages;

const getImages = async function () {
  const res = await fetch(randomPhotoUrl);
  const data = await res.json();
  allImages = data;
  makeImages(allImages);
};
getImages();

const makeImages = (data) => {
  data.forEach((item, index) => {

    let img = document.createElement("img");
    img.src = item.urls.regular;
    img.className = 'gallery-img';

    gallery.appendChild(img);
  });
};




