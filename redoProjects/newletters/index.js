const submitBtn = document.getElementById('btn-subscirbe');
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const dismissBtn = document.getElementById('dismiss-btn');
const btn = document.querySelectorAll('btn');
const email = document.getElementById('input-email');
const labelInvalid = document.getElementById('label-error-message');
// const emailPlacement = document.getElementById('subscirbe__desc');
const emailPlacement = document.querySelector('.subscirbe__desc strong');
const form = document.getElementById('form');

// validate the email input
email.addEventListener('input', (e) => {
  if (!email.validity.valid) {
    console.log('not good');
    labelInvalid.classList.remove('hide');
    labelInvalid.classList.add('label__invalid');
    labelInvalid.classList.add('label__emails');
    email.classList.add('invalid');

  } else {
    labelInvalid.classList.remove('label__invalid');
    labelInvalid.classList.remove('label__emails');
    labelInvalid.classList.add('hide');
    email.classList.remove('invalid');
  }

})

form.addEventListener('submit', (e) => {

  e.preventDefault();
  const formDate = new FormData(form);
  console.log(typeof (formDate));
  console.log(formDate);
  // formDate.get('email')
  const data = Object.fromEntries(formDate);
  console.log(typeof (data))

  console.log(data);

})



// submitBtn.addEventListener('click', (e) => {
//   if (!email.validity.valid) {
//     console.log('not good');
//     labelInvalid.classList.remove('hide');
//     labelInvalid.classList.add('label__invalid');
//     labelInvalid.classList.add('label__emails');
//     email.classList.add('invalid');
//     e.preventDefault();

//   } else {
//     labelInvalid.classList.remove('label__invalid');
//     labelInvalid.classList.remove('label__emails');
//     labelInvalid.classList.add('hide');
//     email.classList.add('remove');
//     toggleOnOff(box);
//     toggleOnOff(box2);
//     emailPlacement.textContent = email.value;
//     email.value = '';
//     e.preventDefault();
//   }




// })

dismissBtn.addEventListener('click', (e) => {
  toggleOnOff(box);
  toggleOnOff(box2);
  e.preventDefault();


})


function toggleOnOff(eventTarget) {
  if (eventTarget.classList.contains('hide')) {
    eventTarget.classList.remove('hide');
  } else {
    eventTarget.classList.add('hide');
  }
}