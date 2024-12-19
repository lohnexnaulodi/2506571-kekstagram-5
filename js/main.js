import { renderGallery } from './fullPhoto.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { hideModal, setOnFormSubmit } from './form.js';
import { getData, sendData } from './fetch.js';
import { showAlert, debounce } from './util.js';
import { init, getFilterPictures } from './filter.js';

try {
  init(await getData(), debounce(renderGallery));
  renderGallery(getFilterPictures());
} catch (err) {
  showAlert(err.message);
}

setOnFormSubmit(async (data) => {
  try {
    await sendData(data);
    hideModal();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  }
});
