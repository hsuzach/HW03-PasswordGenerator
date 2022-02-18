document.getElementById('generate').addEventListener('click', () => {

})

//create character set for password

var charsetl = "abcdefghijklmnopqrstuvwxyz";
var charsetu = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var passEl = document.querySelector('#password');

//display password function
function dispPass() { passEl.textContent = 'Testing';

}

//adding button event listener

document.getElementById('generate').addEventListener('click', 
   function() { dispPass();
  }
);