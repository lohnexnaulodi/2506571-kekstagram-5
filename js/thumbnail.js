
import './1123.js';


import { generatePhotos } from './photo.js';

const picturesBox = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');
const generatedPhotos = generatePhotos();
const fragment = document.createDocumentFragment();

generatedPhotos.forEach((photo) => {
  const { url, description, likes, comments } = photo;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  fragment.appendChild(pictureElement);
});
picturesBox.appendChild(fragment);
