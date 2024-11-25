import { renderPictures } from './miniatureDrawing.js';
import { showBigPicture } from './bigPicture.js';

const container = document.querySelector('.pictures');

const renderGallery = (pictures) => {
  container.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-picture-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const pic = pictures.find(
      (item) => item.id === +thumbnail.dataset.pictureId
    );
    showBigPicture(pic);
  });

  renderPictures(pictures, container);
};

export {renderGallery};
