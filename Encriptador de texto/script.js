function convertText() {
    var inputText = document.getElementById("input-text").value;
    var outputText = "";
    var mode = document.querySelector('input[name="mode"]:checked').value;
  
    if (mode === "encrypt") {
      outputText = encryptText(inputText);
    } else if (mode === "decrypt") {
      outputText = decryptText(inputText);
    }
  
    document.getElementById("output-text").value = outputText;
  }
  
  function encryptText(text) {
    var encryptedText = "";
    var valueToLetter = {
      "e": "enter",
      "i": "imes",
      "a": "ai",
      "o": "ober",
      "u": "ufat"
    };
    for (var i = 0; i < text.length; i++) {
      var letter = text.charAt(i);
      if (letter.toLowerCase() !== letter) {
        alert("Solo se permiten letras minúsculas.");
        return "";
      }
      if (/^[a-zA-Z ]*$/.test(letter) === false) {
        alert("No se permiten caracteres especiales.");
        return "";
      }
      if (letter in valueToLetter) {
        encryptedText += valueToLetter[letter];
      } else {
        encryptedText += letter;
      }
    }
    return encryptedText;
  }
  
  function decryptText(text) {
    var decryptedText = "";
    var letterToValue = {
      "enter": "e",
      "imes": "i",
      "ai": "a",
      "ober": "o",
      "ufat": "u"
    };
    var i = 0;
    while (i < text.length) {
      var found = false;
      for (var len = 5; len >= 1; len--) {
        var substr = text.substr(i, len).toLowerCase();
        if (substr in letterToValue) {
          decryptedText += letterToValue[substr];
          i += len;
          found = true;
          break;
        }
      }
      if (!found) {
        var letter = text.charAt(i);
        if (letter.toLowerCase() !== letter) {
          alert("Solo se permiten letras minúsculas.");
          return "";
        }
        if (/^[a-zA-Z ]*$/.test(letter) === false) {
          alert("No se permiten caracteres especiales.");
          return "";
        }
        decryptedText += letter;
        i++;
      }
    }
    return decryptedText;
  }
  
  
  
  
  
  function copyText() {
    var outputText = document.getElementById("output-text");
    outputText.select();
    document.execCommand("copy");
  }
  