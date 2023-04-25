const textInput = document.querySelector('#text-input');
const result = document.querySelector('#result');
const encrypt = document.querySelector('#encrypt');
const decrypt = document.querySelector('#decrypt');
const submitButton = document.querySelector('#submit');
const copyButton = document.querySelector('#copy');

submitButton.addEventListener('click', () => {
  const text = textInput.value.trim().toLowerCase();
  let output = '';
  if (encrypt.checked) {
    output = encryptText(text);
  } else {
    output = decryptText(text);
  }
  result.value = output;
});

copyButton.addEventListener('click', () => {
  result.select();
  document.execCommand('copy');
});

function encryptText(text) {
  let output = '';
  for (let i = 0; i <
