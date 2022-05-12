let offset = 0;
const sliderLine = document.getElementById('line');

const img = [
  'asset/spring.jpg',
  'asset/summer.jpg',
  'asset/fall.jpg',
  'asset/winter.jpg',
];

const imgLength = img.length;
const imgWidth = 500;
const imgHeight = 300;

img.forEach((elem) => {
  const image = new Image(imgWidth, imgHeight);
  image.src = elem;
  sliderLine.appendChild(image);
});

document.getElementById('right_butt').addEventListener('click', () => {
  offset += imgWidth;
  if (offset > imgWidth * (imgLength - 1)) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset}px`;
});

document.getElementById('left_butt').addEventListener('click', () => {
  offset -= 500;
  if (offset < 0) {
    offset = imgWidth * (imgLength - 1);
  }
  sliderLine.style.left = `${-offset}px`;
});
