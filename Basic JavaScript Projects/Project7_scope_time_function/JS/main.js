//global variable is set to show variable scope.
var x = 10;

//this function sets and displays a local x variable
function zap() {
    var x = 5;
    console.log("x = " + x);
}

//this function exists to throw an error in the console log
function broken() {
    console.log("y= " + y);
}

//targets the "results" element and outputs Date().getHours()
function dispHours() {
    var target = document.getElementById("results");
    var day = new Date();
    val = day.getHours();
    if (true) {
        target.innerHTML = val;
    }
}

//either uses the broken() function to throw an error
//or not based on selection in radio set "yesError"
function throwFit(a) {
    var error = document.getElementById("yesError");
    var target = document.getElementById("results2");
    if (error.checked) {
        var val = "Uh oh...";
        target.innerHTML = val;
        broken();
    } else {
        var val = "Phew!";
        target.innerHTML = val;
    }
}

// this function reads Date().getHours() and determines
//if it is morning, afternoon, or evening. then it outputs the 
//result to the "Time_of_day" element.
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

//call the local variable function and then display the set global variable
zap();
console.log("x = " + x);