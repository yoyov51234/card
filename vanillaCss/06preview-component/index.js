

const shareButton = document.getElementById('shareBtn');
const banner = document.querySelector('.banner');
const footerShare = document.querySelector('.js-footer__share');
// const shareBtn
const footerShareIcon = document.querySelector('.footer__share-icon--position');
// console.log(shareButton);
shareButton.addEventListener('click', (event) => {


  // banner.style.display = 'flex';
  // event.stopPropagation();

  // banner.classList.add('banner--desktop');
  // footerShare.classList.add('footer__share--desktop');


  if (window.innerWidth < 700) {
    banner.style.display = 'flex';
    event.stopPropagation();
  } else if (window.innerWidth > 700) {
    banner.style.display = 'flex';
    banner.classList.add('banner--desktop');
    footerShare.classList.add('footer__share--desktop');
    shareBtn.classList.add('footer__share--active');
    footerShareIcon.classList.add('active');

    event.stopPropagation();
  }

})

document.addEventListener('click', (event) => {
  if (banner.style.display === 'flex') {
    if (banner && !banner.contains(event.target)) {
      banner.style.display = 'none';
      banner.classList.remove('banner--desktop');
      footerShare.classList.remove('footer__share--desktop');
      shareBtn.classList.remove('footer__share--active');
      footerShareIcon.classList.remove('active');

    }
  }


})













/*
// Then, set up a click event listener on the document
document.addEventListener('click', function (event) {
  // Check if the click happened outside of myDiv
  if (!banner.contains(event.target)) {

    if (banner.style.display === 'flex') {
      banner.style.display = 'none';
      console.log("outside the banner")
    }
    // The click was outside myDiv, do something

  }
});
*/



