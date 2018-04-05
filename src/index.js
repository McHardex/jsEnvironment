import './index.css';

let input = document.getElementById('enterText');
let submitInput = document.getElementById('submitInput');
let result = document.getElementById('result');
let displayLastFiveIniputs = document.getElementById('displayLastFiveIniputs');
let lastfive = document.getElementById('lastfive');
let inputsArray = [];

function submitForm() {
    inputsArray.push(input.value);
}

/* eslint-disable no-useless-escape */

function reverseString(str) {
    // reversing the string and removing white spaces
    let reverse = str.split('').reverse().join('').replace(/\s/g, '');
    // disregarding punctuations from the output of the string
    let removePunctuations = reverse.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    // converting the string output to lowercase
    return removePunctuations.toLowerCase();
}

function displayInput() {
    // removing white space from the value of input
    let text = input.value.replace(/\s/g, '');
    // disregarding punctuations
    let mytext = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    // setting conditions for palindrome true or false
    if (mytext.toLowerCase() === reverseString(input.value)) {

        result.textContent = 'The text you entered is a Palindrome!';
    } else {
        result.textContent = 'The text you entered is not a Palindrome, try another text!!!';

    }

}

//on click of submit button, display result
// submitInput.addEventListener('click', displayInput, false);
submitInput.addEventListener('click', function(event) {
    event.preventDefault();
    submitForm();
    displayInput();
});


function showme() {
    lastfive.textContent = inputsArray.slice(-5).join(', ');
}

displayLastFiveIniputs.addEventListener('click', function(event) {
    event.preventDefault();
    showme();
});