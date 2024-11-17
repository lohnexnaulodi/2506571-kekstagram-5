/* import { renderPictures } from './miniatureDrawing.js';
import { showBigPicture } from './bigPicture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  renderPictures(pictures, container);
};

export {renderGallery}; */
import {createPhotoDescriptions} from './data.js';
import { openBigPicture } from './bigPicture.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPictures = createPhotoDescriptions();

const similarListFragment = document.createDocumentFragment();

createPictures.forEach((photo) => {
  const { url, description, likes, comments } = photo;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  similarListFragment.appendChild(picture);

  picture.addEventListener('click', () => {
    openBigPicture(photo);

  });
});

picturesList.appendChild(similarListFragment);


