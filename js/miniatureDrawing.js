const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const createPictureElement = ({ comments, description, likes, url, id }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.dataset.pictureId = id;

  return pictureElement;
};

const renderPictures = (pictures, picturesBox) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureElement = createPictureElement(picture);
    fragment.append(pictureElement);
  });

  picturesBox.append(fragment);
};

export { renderPictures };
