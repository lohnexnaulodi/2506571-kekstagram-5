/* eslint-disable no-console */
/* eslint-disable no-shadow */

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSentence() {
  const sentences = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return sentences[getRandomNumber(0, sentences.length - 1)];
}

function getRandomAvatar() {
  return `img/avatar-${getRandomNumber(1, 6)}.svg`;
}

function generateComment() {
  return {
    id: getRandomNumber(1, 1000),
    avatar: getRandomAvatar(),
    message: getRandomSentence(),
    name: getRandomNumber()
  };
}

function generateComments() {
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(generateComment());
  }
  return comments;
}


function generatePhotos() {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    photos.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: getRandomSentence(),
      likes: getRandomNumber(15, 200),
      comments: generateComments()
    });
  }
  return photos;
}

const photos = generatePhotos();
console.log(photos);
