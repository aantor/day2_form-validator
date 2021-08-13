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
<<<<<<< HEAD
  formCtrl.classList.remove('error');
  formCtrl.classList.add('success');
}

function isValidEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

=======
  formCtrl.classList.add('success');
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
>>>>>>> b86d11baff40e9eefbc2e9c3e8fe20a0936fc15d
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
  }
<<<<<<< HEAD

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'Email is not valid');
  } else {
    showSuccess(email);
  }

=======
  if (email.value === '') {
    showError(email, 'Email is required');
  } else {
    showSuccess(email);
  }
>>>>>>> b86d11baff40e9eefbc2e9c3e8fe20a0936fc15d
  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password);
  }
<<<<<<< HEAD

=======
>>>>>>> b86d11baff40e9eefbc2e9c3e8fe20a0936fc15d
  if (password2.value === '') {
    showError(password2, 'Password2 is required');
  } else {
    showSuccess(password2);
  }
});
