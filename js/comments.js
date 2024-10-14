import { getRandomNumber } from './utils.js';
import { generateComment } from './comment.js';

export function generateComments() {
  const commentsCount = getRandomNumber(0, 30);
  const comments = [];
  for (let i = 0; i < commentsCount; i++) {
    comments.push(generateComment());
  }
  return comments;
}
