// const { DEFAULT_EXTENSIONS } = require("@babel/core");

// console.log(mail)
const mail = document.getElementById('email');
const subscribeBtn = document.getElementById('btn-subscribe');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');
const box = document.getElementById('box');
const box2 = document.getElementById('box2');
const desc = document.querySelector('#desc strong');
const btnDismiss = document.getElementById('btn-dismiss');
// console.log(desc);
// const errorMessage = document.getElementById('error-message');

// subscribeBtn.addEventListener(
//   'click', () => {
//     const submitEmail = mail.value;


//   }
// )

mail.addEventListener('input', () => {
  if (!mail.validity.valid) {
    errorMessage.style.display = 'inline-block';
    // mail.style.borderColor = 'var(--Tomato)';
    mail.classList.add('invalid');

  } else {
    errorMessage.style.display = 'none';
    mail.classList.remove('invalid');
  }
}

)

mail.addEventListener('change', () => {
  if (!mail.validity.valid) {
    errorMessage.style.display = 'inline-block';
    // mail.style.borderColor = 'var(--Tomato)';
    mail.classList.add('invalid');

  } else {
    errorMessage.style.display = 'none';
    mail.classList.remove('invalid');
  }
}

)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const submitEmail = mail.value;
  console.log(submitEmail);
  if (!mail.validity.valid) {
    console.log('Please enter a valid email address.');
    errorMessage.textContent = 'Please enter a valid email address.';
  }
  else {
    toggleShow(box2);
    toggleShow(box);
    desc.textContent = mail.value;
  }

})

function toggleShow(togglebox) {

  if (togglebox.classList.contains('hide')) {
    togglebox.classList.remove('hide')
  } else {
    togglebox.classList.add('hide');
  }

}

btnDismiss.addEventListener('click', () => {
  toggleShow(box2);
  toggleShow(box);
})