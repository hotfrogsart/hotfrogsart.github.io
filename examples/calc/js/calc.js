console.log("calc JS loaded >:3c");

const calcResult = document.getElementById("result");

function calcResultA() {
    calcResult.innerHTML = 11 / 11 ;
    }

function calcResultB() {
    calcResult.innerHTML = 839 - 419;
    }

function calcResultC(c , d) {
    var result = c * d;
    calcResult.innerHTML = result;
    }
