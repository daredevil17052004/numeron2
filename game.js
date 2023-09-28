// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

let x = Math.round(Math.random()*100);
let y = Math.round(Math.random()*100);
var number1box = document.getElementById("number1");
var number2box = document.getElementById("number2");

number1box.innerHTML = x;
number2box.innerHTML = y;


// Iteration 3: Creating variables required to make the game functional

let operator;
var score = 0;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multi = document.getElementById("mul");
const divi = document.getElementById("divide");
const mod = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var number3box = document.getElementById("number3");
var number3;

// Iteration 5: Creating a randomise function to make the game functional

function randomise(){
    number1 = Math.round(Math.random()*100);
    number2 = Math.round(Math.random()*100)

    if(number1 < number2){
        var ext = number1;
        number1 = number2;
        number2 = ext;
    }

    operator = Math.round(Math.random()*5);
    switch(operator){
        case 1:
            number3 = number1 + number2;
            break;
        
        case 2:
            number3 = number1 - number2;
            break;
        
        case 3:
            number3 = number1 * number2;
            break;

        case 4:
            number3 = Math.floor(number1/number2);
            break;
        
        case 5:
            number3 = number1 % number2;
            break;

        case 0:
            randomise(); //recursion
    }


    number1box.innerHTML = number1;
    number2box.innerHTML = number2;
    number3box.innerHTML = number3;

    console.log(number1 + " " + number2 + " " + number3 + " " + operator);
}
randomise();

// Iteration 6: Making the Operators (button) functional
plus.onclick =() =>{
    if (number1 + number2 === number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href = "./gameover.html?score="+score;
    }
    
};

minus.onclick =() =>{
    if (number1 - number2 === number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href = "./gameover.html?score="+score;
    }    
};

multi.onclick =() =>{
    if (number1 * number2 === number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href = "./gameover.html?score="+score;
    }    
};

divi.onclick =() =>{
    if (Math.floor(number1/number2 )=== number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href = "./gameover.html?score="+score;
    }
};

mod.onclick =() =>{
    if (number1 % number2 === number3){
        score++;
        randomise();
        resetTime(timerId);
    }
    else{
        location.href = "./gameover.html?score="+score;
    }
};


// Iteration 7: Making Timer functional
var time = 20;
var timerId;
var timer = document.getElementById("timer");

function startTimer(){
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval(() =>{
        time--;
        if(time == 0) {
            location.href = "./gameover.html?score"+score;
        }
        timer.innerHTML = time;
    },1000);
}

function resetTime(IntervalId){
    clearInterval(IntervalId);
    startTimer();
}
startTimer();