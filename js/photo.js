import { getRandomNumber, getRandomSentence } from './utils.js';
import { generateComments } from './comment.js';

export function generatePhotos() {
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
