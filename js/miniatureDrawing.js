const pictureTemplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const picturesBox = document.querySelector('.pictures');
const createPictureElement = ({ comments, description, likes, url }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').alt = description;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const pictureItem = createPictureElement(picture);
    fragment.append(pictureItem);
  });

  picturesBox.append(fragment);
};

export { renderPictures };
