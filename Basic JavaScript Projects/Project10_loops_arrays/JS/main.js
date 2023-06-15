//Call_Loop outputs 10 loops of text to the "Loop" element  
function Call_Loop() { 
    let i = 0;
    let text = "";
    while (i < 10) {
        i++;
        text += "Loop " + i + "<br>";
    }
    document.getElementById("Loop").innerHTML = text;

}

//for_Loop outputs each item in i to the "List of Instruments" element
function for_Loop() {
    let i = ["peach","teach","speech","Cheech"];
    let text = "";
    for (x = 0; x < i.length; x++) {
        text += i[x] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = text;
}

//array_Function sets up a block-scope array and outputs
//a random item from that array to the "Array" element
function array_Function() {
    let i = [];
    i[0] = "eat";
    i[1] = "sleep";
    i[2] = "chew bubble gum";
    i[3] = "run out of bubble gum";
    i[4] = "do something unsavory";
    let text = i[Math.floor(Math.random() * 5)];
    document.getElementById("Array").innerHTML = text;
}

//declare constant my_car object
const my_car = {
    make:"Honda",
    model:"CR-V",
    year:"2014",
    nickname:"Tammy"
}

//constant_function displays the nickname of my_car to the "Constant" element
function constant_function() {
    text = my_car.nickname;
    document.getElementById("Constant").innerHTML = text;
    //throw a constant error to demonstrate properties of constants
    console.log("generating constant error...");
    my_car = "uh oh";

}

//sometimes_y modifies the nickname property of my_car
function sometimes_y() {
    my_car.nickname += return_function();
}

//this function demonstrates the return keyword
function return_function() {
    return "y";
}

//my_alien is an object including a method 
let my_alien = {
    nickname : "Jerrence",
    color : "blue",
    mouths : 6,
    diet : "nitrogen gel",
    //the feed method outputs a feeding message to the "Alien" element
    feed : function() {
        let text = "";
        text += "You feed ";
        text += this.nickname + " ";
        text += this.mouths + " lumps of " + this.diet;
        document.getElementById("Alien").innerHTML = text;
    }
}

//loopy demonstrates the continue and break keywords using a while loop
function loopy() {
    let text = "";
    let i = 0;
    while (true) {
        if (i < 10) {
            i ++;
            text += i;
            continue;
        }
        break;
    }
    document.getElementById("Continue-Break").innerHTML = text;
}