const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const pwdFirst = document.getElementById("pwd-first")
const pwdSecond = document.getElementById("pwd-second")

//
// Generate passwords
//
document.getElementById("generate").addEventListener('click', function() {

    let option_1 = ""
    let option_2 = ""
    let pwd_length = document.getElementById('input-pwd-length').value
    let use_num = document.getElementById('include-num').checked
    let use_symbol = document.getElementById('include-symbol').checked
    let characters = [...alpha]
    
    if (use_num) {
        characters.push.apply(characters, nums);
    }

    if (use_symbol) {
        characters.push.apply(characters, symbols);
    }

    for (i = 0; i< pwd_length; i++) {
        option_1 += characters[Math.floor(Math.random()*characters.length)]
        option_2 += characters[Math.floor(Math.random()*characters.length)]
    }

    pwdFirst.textContent = option_1
    pwdFirst.style.opacity = "100%"
    pwdSecond.textContent = option_2
    pwdSecond.style.opacity = "100%"

});


//
// Password length slider
//
var slider = document.getElementById("input-pwd-length");
var output = document.getElementById("pwd-length");
output.innerHTML = slider.value; // Display the default slider value
slider.oninput = function() {
  output.innerHTML = this.value;
}

//
// Click for copy to clipboard hint
//
var pwdElements = document.getElementsByClassName("pwd-container");
var hintElement = document.getElementById("click-hint");
for (var i = 0; i < pwdElements.length; i++) {
  pwdElements[i].addEventListener("mouseover", function () {
    hintElement.style.opacity = "100%"
  });
  pwdElements[i].addEventListener("mouseout", function () {
    hintElement.style.opacity = "0%"
    hintElement.textContent = "click to copy to clipboard"
  });
}

//
// Copy password to clipboard
//
pwdFirst.addEventListener('click', function() {
    navigator.clipboard.writeText(this.textContent)
    hintElement.textContent = "password copied to clipboard!"
})
pwdSecond.addEventListener('click', function() {
    navigator.clipboard.writeText(this.textContent)
    hintElement.textContent = "password copied to clipboard!"
})