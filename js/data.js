import { getRandomInt, getRandomArrayElement, createIdGenerator } from './util.js';

const PIC_COUNT = 25;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMM_COUNT = 30;
const COMM_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Мне очень понравилось это изображение! Вы отлично запечатлели момент!',
  'Прекрасная работа! Цвета просто восхитительные.',
  'Этот пост действительно вдохновляет! Спасибо за то, что делитесь.',
  'Какой замечательный пейзаж! Это место выглядит волшебно.',
  'Вы всегда делаете такие удивительные фотографии. Продолжайте в том же духе!',
  'Люблю вашу работу! Каждая фотография рассказывает свою историю.',
  'Ваш стиль уникален и свеж. Спасибо за вдохновение!',
  'Эта фотография просто невероятна! Я в восторге.',
  'Вы так талантливы! С нетерпением жду новых постов.'
];

const DESCRIP = [
  'Летний чил на югаx. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Затусили друзьями на море #laptevsea #north #northeastpassage',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Искусство позволяет нам открывать двери в мир фантазий #Искусство #Креатив #Художники #Краски',
  'Ничто не наполняет энергией так, как занятия спортом на свежем воздухе! #Спорт #АктивныйОтдых #Здоровье',
  'Удивительный закат, который оставляет след в душе. #Природа #Закат #Пейзаж'
];

const NAMES = ['Артём', 'Мария', 'Александр', 'Екатерина', 'Сергей', 'Ольга'];

const generateCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInt(1, 2) },
  () => getRandomArrayElement(COMM_MESSAGES),
). join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIP),
  likes: getRandomInt(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array. from(
    { length: getRandomInt(0, COMM_COUNT) },
    createComment,
  )
});

const generatePhotos = () => Array.from(
  { length: PIC_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1),
);

export {generatePhotos};
