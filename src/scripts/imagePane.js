// make array of all img tags
const imageSet = Array.from(document.getElementsByClassName('driftImg'));

const mobileImageSet = Array.from(document.getElementsByClassName('mobileImg'));
// chart selector for blur & size setting
const chart = document.querySelector('.chart');

export { imageSet, mobileImageSet, chart };