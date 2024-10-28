import { generatePhotos } from './photo.js';
import { renderPhotos } from './thumbnail.js';

const photos = generatePhotos();
renderPhotos(photos);
