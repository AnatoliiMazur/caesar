import {caesar} from './caesar'

let input  = document.querySelector('.clear-input');
let output = document.querySelector('.encoded-output');
let select = document.getElementById('shift');

input.addEventListener('input', onInput);

function onInput(event) {
	output.value = caesar(event.target.value, +select.value);
}