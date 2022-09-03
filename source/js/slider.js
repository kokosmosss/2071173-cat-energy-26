const slider = document.querySelector('.slider');
const before = document.querySelector('.slider__image-wrapper--before');
const beforeImage = before.querySelector('img');
const after = document.querySelector('.slider__image-wrapper--after');
const afterImage = after.querySelector('img');
const toggle = document.querySelector('.slider__bar');
const body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
  afterImage.style.width = `${width}px`;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  toggle.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDegault();
  return false;
}

body.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});
