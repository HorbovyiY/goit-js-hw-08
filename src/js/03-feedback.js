const form = document.querySelector(".feedback-form");
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');
var throttle = require('lodash.throttle');


if (localStorage.getItem("feedback-form-state")){ 
    input.value = JSON.parse(localStorage.getItem("feedback-form-state")).email;
    textarea.value = JSON.parse(localStorage.getItem("feedback-form-state")).message;
}

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener("submit", onSubmit);

function onInput() {
    const dataInput = {
        email: input.value,
        message: textarea.value,
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(dataInput));
}

function onSubmit (e){
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    localStorage.clear();
    input.value = '';
    textarea.value = '';
}
