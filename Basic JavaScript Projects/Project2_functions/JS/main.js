//this function replaces the text of an element with id 'para'
function replaceText() {
    //find element with id 'para'
    var target = document.getElementById("para");
    //change the text of that element
    target.textContent = "You\'ve been"
    target.textContent += " hacked!";
}