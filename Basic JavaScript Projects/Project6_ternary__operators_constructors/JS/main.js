// checks the value in the "Height" element against 52.
// puts the result in "Ride" element.
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// checks the value in the "Age" element against 18.
// puts the result in "Vote" element.
function canVote() {
    var age, voter;
    age = document.getElementById("Age").value;
    voter = (age < 18) ? "You are too young" : "You have the privelege";
    document.getElementById("Vote").innerHTML = voter + " to participate in democracy.";
}

//constructor for Vehicle objects
function Vehicle(mk, mdl, yr, clr) {
    this.make = mk;
    this.model = mdl;
    this.year = yr;
    this.color = clr;
}

//assigns new vehicles to Jack, Emily, and Erik
var Jack = new Vehicle("Dodge", "Viper", "2020", "Red");
var Emily = new Vehicle("Dodge", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", "1971", "Mustard");

//displays Erik's ride in the "Keywords_and_Constructors" element
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.color + "-colored " + Erik.make + " " + Erik.model
    + " manufactured in " + Erik.year + "."
}

//displays Emily's ride in the "New_and_This" element
function myFunction2() {
    document.getElementById("New_and_This").innerHTML =
        "Emily drives a " + Emily.color + "-colored " + Emily.make + " " + Emily.model
    + " manufactured in " + Emily.year + "."
}

//performs both myFunction and myFunction2 at once
function both() {
    myFunction();
    myFunction2();
}