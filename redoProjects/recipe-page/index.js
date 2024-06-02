

function updateMargin() {
  const wrapper = document.querySelector('.wrapper');
  const wrapperHeight = wrapper.offsetHeight;
  const marginValue = wrapperHeight * 0.072;
  if (getViewPort() > 584) {
    wrapper.style.setProperty('--dynamic-margin', `${marginValue}px`);
  } else {
    wrapper.style.setProperty('--dynamic-margin', `0px`);
  }


}

function getViewPort() {
  const viewportWidth = window.innerWidth;
  // console.log(viewportWidth)

  return viewportWidth;
}

// updateMargin();


window.addEventListener('resize', updateMargin);

