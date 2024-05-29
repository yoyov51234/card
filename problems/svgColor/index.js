const btn = document.querySelector('.btn');
const btn_img = document.querySelector('.share');
console.log(btn);
console.log(btn_img);

btn.addEventListener('click', () => {
  btn.classList.add('share-button--active');
  btn_img.classList.add('active');
  // btn_img.setAttribute('fill', 'FFF');
})