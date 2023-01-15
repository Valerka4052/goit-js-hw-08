import throttle from 'lodash.throttle';

const button = document.querySelector('button')
const form = document.querySelector('.feedback-form')
const inputEmail = document.querySelector('input[name=email]')
const inputMessage = document.querySelector('textarea[name=message]')


form.addEventListener('input', throttle(getValuesToLocalStorage, 500));
autocomplete();
button.addEventListener('click', submitForm);


function getValuesToLocalStorage () {
  localStorage.setItem("feedback-form-state", JSON.stringify({ "email": inputEmail.value, message: inputMessage.value }));
};
function submitForm (event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
    localStorage.removeItem("feedback-form-state")
    form.reset()
};
function autocomplete () {
    if (localStorage.getItem("feedback-form-state")) {
    const message = JSON.parse(localStorage.getItem("feedback-form-state")).message;
    const email = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    inputMessage.value = message;
    inputEmail.value = email;
  };
};
