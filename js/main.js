const lgTxt = document.querySelector(".lgTxt");
const stringArr = ["I LOVE NEWYORK!", "I LOVE PARIS", "I LOVE AMSTERDAM", "I LOVE MILANO"];
const stringIndex = stringArr[Math.floor(Math.random() * stringArr.length)];
const stringSplit = stringIndex.split("");


function blinkTxt(arr){
    if(arr.length>0){
        lgTxt.textContent += arr.shift();
        setTimeout(function(){
            blinkTxt(stringSplit);
        },80);
    }
}

blinkTxt(stringSplit);

function blink(){
    lgTxt.classList.toggle("active");
}
setInterval(blink, 500);
