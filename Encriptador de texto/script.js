// Obtener elementos del DOM
const input = document.getElementById("input");
const output = document.getElementById("output");
const btnEncrypt = document.getElementById("btn-encrypt");
const btnDecrypt = document.getElementById("btn-decrypt");
const btnCopy = document.getElementById("btn-copy");

// Mapa de encriptación
const encryptionMap = {
  e: "enter",
  i: "imes",
  a: "ai",
  o: "ober",
  u: "ufat",
};

// Función para encriptar texto
function encryptText(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);
    encryptedText += encryptionMap[char] || char;
  }
  return encryptedText;
}

// Función para desencriptar texto
function decryptText(text) {
  let decryptedText = "";
  let i = 0;
  while (i < text.length) {
    const char = text.charAt(i);
    if (char in encryptionMap) {
      const possibleDecryptedChar = text.substr(i, encryptionMap[char].length);
      if (encryptionMap[char] === possibleDecryptedChar) {
        decryptedText += char;
        i += encryptionMap[char].length;
        continue;
      }
    }
    decryptedText += char;
    i++;
  }
  return decryptedText;
}

// Función para copiar el texto al portapapeles
function copyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

// Evento de click en botón "Encriptar"
btnEncrypt.addEventListener("click", () => {
  output.value = encryptText(input.value);
});

// Evento de click en botón "Desencriptar"
btnDecrypt.addEventListener("click", () => {
  output.value = decryptText(input.value);
});

// Evento de click en botón "Copiar"
btnCopy.addEventListener("click", () => {
  copyText(output.value);
});
