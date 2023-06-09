//function adds two values and puts the result into element "Math"
function myAdd(a,b) {
    var result = a+b;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function subtracts two values and puts the result into element "Math"
function mySubtract(a,b) {
    var result = a-b;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function multiplies two values and puts the result into element "Math"
function myMultiply(a,b) {
    var result = a*b;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function divides two values and puts the result into element "Math"
function myDivide(a,b) {
    var result = a/b;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function applies the modulus operation to two values 
//and puts the result into element "Math"
function myModulus(a,b) {
    var result = a%b;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function negates a value and puts the result into element "Math"
function myNegation() {
    var target = document.getElementById("Math");
    var a = target.textContent;
    a = -a;
    var result = a;
    target.textContent = result;
}

//function decrements a value and puts the result into element "Math"
function myDecrement() {
    var target = document.getElementById("Math");
    var a = target.textContent;
    a--;
    var result = a;
    target.textContent = result;
}

//function increments a value and puts the result into element "Math"
function myIncrement() {
    var target = document.getElementById("Math");
    var a = target.textContent;
    a++;
    var result = a;
    target.textContent = result;
}

//function selects a random value between 0 and 10 
//and puts the result into element "Math"
function myRandom() {
    var result = Math.random()*10;
    var target = document.getElementById("Math");
    target.textContent = result;
}

//function adds two values and puts the result into element "Math"
function myRound() {
    var target = document.getElementById("Math");
    var val = target.textContent;
    var result = Math.round(val);
    target.textContent = result;
}