//create a dictionary of colors
var Colors = {
    One: "red",
    Two: "blue",
    Three: "yellow",
}

//show the first color in the element "Dictionary"
function showColors() {
    var target = document.getElementById("Dictionary");
    target.textContent = Colors.One;
}

//show the second color in the element "Dictionary"
function showColors2() {
    var target = document.getElementById("Dictionary");
    target.textContent = Colors.Two;
}

//delete the Two element from Colors dictionary
function removeTwo() {
    delete Colors.Two
    var target = document.getElementById("Dictionary");
    target.textContent = Colors.Two;
}