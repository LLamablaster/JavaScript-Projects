//slices the sentence and spits the result out into the "slice" element
function mySlice() {
    var sentence = "All work and no play makes Johnny a dull boy."
    var section = sentence.slice(27,33);
    var target = document.getElementById("slice");
    target.innerHTML = section;
}

//resets the content of the "text" element to the base sentence
function resetText() {
    var sentence = "The quick brown fox was a cliche.";
    var target = document.getElementById("text");
    target.innerHTML = sentence;
}

//makes the contents of the "text" element uppercase
function myUpperCase() {
    var target = document.getElementById("text");
    var text = target.innerHTML;
    target.innerHTML = text.toUpperCase();
}

//searches for the string 'was' in the "text" element and spits the
//index of the string into that element
function mySearch() {
    var target = document.getElementById("text");
    var text = target.innerHTML;
    target.innerHTML = text.search("was");
}

//resets the content of the "number" element to the base value
function resetNum() {
    var value = 12938.30216516;
    var target = document.getElementById("number");
    target.innerHTML = value;
}

//changes the contents of the "number" element to a string
//and concatenates a message to it
function myToString() {
    var target = document.getElementById("number");
    var x = target.innerHTML.toString().concat(" is now a string");
    target.innerHTML = x;
}

//sets the precision of the "number" element to 5 places
function myPrecision() {
    var target = document.getElementById("number");
    var x = Number(target.innerHTML).toPrecision(5);
    target.innerHTML = x;
}

//fixes the value of the "number" element to 3 decimal places
function myFixed() {
    var target = document.getElementById("number");
    var x = Number(target.innerHTML).toFixed(3);
    target.innerHTML = x;
}

//sets the contents of the "number" element to their string value
function myValue() {
    var target = document.getElementById("number");
    var x = target.innerHTML.valueOf();
    target.innerHTML = x;
}