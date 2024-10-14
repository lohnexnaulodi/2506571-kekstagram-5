import { getRandomNumber, getRandomSentence, getRandomAvatar } from './utils.js';

export function generateComment() {
  return {
    id: getRandomNumber(1, 1000),
    avatar: getRandomAvatar(),
    message: getRandomSentence(),
    name: getRandomNumber()
  };
}
