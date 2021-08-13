const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const form = $('#form');
const username = $('#username');
const email = $('#email');
const password = $('#password');
const password2 = $('#password2');

function showError(input, errMsg) {
  const formCtrl = input.parentElement;
  formCtrl.classList.add('error');
  const small = formCtrl.querySelector('small');
  small.innerText = errMsg;
}

function showSuccess(input) {
  const formCtrl = input.parentElement;
  formCtrl.classList.add('success');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
  if (password2.value === '') {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});
