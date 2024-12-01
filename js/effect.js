const effectToFilter = {
  chrome: {
    style: 'grayscale',
    unit: ''
  },
  sepia: {
    style: 'sepia',
    unit: ''
  },
  marvin: {
    style: 'invert',
    unit: '%'
  },
  phobos: {
    style: 'blur',
    unit: 'px'
  },
  heat: {
    style: 'brightness',
    unit: ''
  }
};

const effectToSliderOptions = {
  none: {
    min: 0,
    max: 100,
    step: 1
  },
  chrome: {
    min: 0,
    max: 1,
    step: 0.1
  },
  sepia: {
    min: 0,
    max: 1,
    step: 0.1
  },
  marvin: {
    min: 0,
    max: 100,
    step: 1
  },
  phobos: {
    min: 0,
    max: 3,
    step: 0.1
  },
  heat: {
    min: 1,
    max: 3,
    step: 0.1
  }
};

const modalElement = document.querySelector('.img-upload');
const imageElement = modalElement.querySelector('.img-upload__preview img');
const sliderElement = modalElement.querySelector('.effect-level__slider');
const sliderContainerElement = modalElement.querySelector('.img-upload__effect-level');
const effectLevelElement = modalElement.querySelector('.effect-level__value');
let chosenEffect = 'none';

const setImageStyle = () => {
  if (chosenEffect === 'none') {
    imageElement.style.filter = null;
    return;
  }
  const { value } = effectLevelElement;
  const { style, unit } = effectToFilter[chosenEffect];
  imageElement.style.filter = `${style}(${value}${unit})`;
};

const onSliderUpdate = () => {
  effectLevelElement.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const createSlider = ({ min, max, step }) => {
  noUiSlider.create(sliderElement, {
    range: { min, max },
    step,
    start: max,
    connect: 'lower'
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

const setSlider = () => {
  if (sliderElement.noUiSlider) {
    sliderElement.noUiSlider.destroy();
  }
  setImageStyle();
  sliderContainerElement.classList.add('hidden');
  if (chosenEffect !== 'none') {
    createSlider(effectToSliderOptions[chosenEffect]);
    sliderContainerElement.classList.remove('hidden');
  }
};

const setEffect = (effect) => {
  chosenEffect = effect;
  setSlider();
};

const reset = () => {
  chosenEffect = 'none';
  setSlider();
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const init = () => {
  setSlider();
  modalElement.querySelector('.effects').addEventListener('change', onEffectsChange);
};

export { init, reset };
