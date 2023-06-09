//displays the type of a value in "result"
function displayType(a) {
    var target = document.getElementById("result");
    var result = typeof a;
    target.textContent = result;
}

//checks type of integer
function typeString() {
    displayType(9);
}

//checks type of string plus integer
function typeStringInt() {
    displayType("3" + 9);
}

//checks type of integer plus string
function typeIntString() {
    displayType(9 + "3");
}

//checks if a value is NaN and display in "result2"
function myNan(a) {
    var target = document.getElementById("result2");
    var result = isNaN(a);
    target.innerHTML = result;
}

//checks if a string is NaN
function strNan() {
    myNan("string");
}

//checks if an int is NaN
function intNan() {
    myNan(50);
}

//displays NaN in "result2"
function nan() {
    var target = document.getElementById("result2");
    var result = 0/0;
    target.innerHTML = result;
}

//displays Infinity in "result2"
function inf() {
    var target = document.getElementById("result2");
    var result = 2E333;
    target.innerHTML = result;
}

//displays -Infinity in "result2"
function negInf() {
    var target = document.getElementById("result2");
    var result = -2E333;
    target.innerHTML = result;
}

//displays true in "result 3"
function trueComp() {
    var target = document.getElementById("result3");
    var result = 10 > 5;
    target.innerHTML = result;
}

//displays false in "result 3"
function falseComp() {
    var target = document.getElementById("result3");
    var result = 5 > 10;
    target.innerHTML = result;
}

//displays true in "result 3" using ==
function trueComp2() {
    var target = document.getElementById("result3");
    var result = 10 == 10;
    target.innerHTML = result;
}

//displays false in "result 3" using ==
function falseComp2() {
    var target = document.getElementById("result3");
    var result = 5 == 10;
    target.innerHTML = result;
}

//displays true using ===
function tripleTrue() {
    var target = document.getElementById("result3");
    var result = "5" === "5";
    target.innerHTML = result;
}

//displays false using ===
function tripleFalse() {
    var target = document.getElementById("result3");
    var result = 5 === "10";
    target.innerHTML = result;
}

//displays false using === a different way
function tripleFalser() {
    var target = document.getElementById("result3");
    var result = "10" === 10;
    target.innerHTML = result;
}

//displays false using === another way
function tripleFalsest() {
    var target = document.getElementById("result3");
    var result = "5" === "10";
    target.innerHTML = result;
}

//displays true using &&
function ampersandTrue() {
    var target = document.getElementById("result3");
    var result = true && 1==1;
    target.innerHTML = result;
}

//displays false using &&
function ampersandFalse() {
    var target = document.getElementById("result3");
    var result = true && "10" === 10;
    target.innerHTML = result;
}

//displays true using ||
function pipeTrue() {
    var target = document.getElementById("result3");
    var result = true || "10" === 10;
    target.innerHTML = result;
}

//displays false using ||
function pipeFalse() {
    var target = document.getElementById("result3");
    var result = false || "10" === 10;
    target.innerHTML = result;
}

//inverts boolean value of "result3"
function not() {
    var target = document.getElementById("result3");
    var val = target.innerHTML;
    var isTrue = (val === 'true');
    target.innerHTML = !isTrue;
}

//writes 'hi' to log
function clog() {
    console.log("hi");
}

//writes 'false' to log
function cfalse() {
    console.log(5>10);
}