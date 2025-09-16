const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']; //масив із іменами файлів зображень 

/* альтернативний текстом для зображень */
const altTexts = {
  'pic1.jpg': 'beautiful photo of the eye',
  'pic2.jpg': 'photo rock',
  'pic3.jpg': 'purple and white flowers',
  'pic4.jpg': 'a picture of the Egyptian gods',
  'pic5.jpg': 'butterfly on a leaf'
};

/* додавання мініатюр в thumb-bar */
imageFiles.forEach((fileName) => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${fileName}`);
  newImage.setAttribute('alt', altTexts[fileName]);

  /* додавання події на клік для кожної мініатюри */
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${fileName}`);
    displayedImage.setAttribute('alt', altTexts[fileName]);
  });

  thumbBar.appendChild(newImage);
});

/* додавання події на кнопку для затемнення */
btn.addEventListener('click', () => {
  if (btn.textContent === 'Darken') {
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    btn.textContent = 'Lighten';
  } else {
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    btn.textContent = 'Darken';
  }
});
