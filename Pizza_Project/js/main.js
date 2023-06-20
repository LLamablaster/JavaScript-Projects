//this function totals the cost of the selected size
//then it calls the next function to complete the receipt
function getReceipt() {
    //text1 contains the text of the order
    var text1 = "<h3>You ordered: </h3>";
    //runningTotal keeps track of the total cost of the pizza
    var runningTotal = 0;
    //sizeTotal is the cost in dollars of the selected size
    var sizeTotal = 0;

    //build an array of all the "size" class elements in the page
    var sizeArray = document.getElementsByClassName("size");
    //iterate through the array and get the value of the selected size 
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            //remember the selected size value
            var selectedSize = sizeArray[i].value;
            //add the size to the order text
            text1 = text1+selectedSize+"<br>"
        }
    }
    //find the cost of the selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if (selectedSize === "Family Size Pizza") {
        sizeTotal = 20;
    } 
    //update the running total
    runningTotal = sizeTotal;
    //log the current order state for debugging purposes
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //call the next function to tally up the toppings
    getTopping(runningTotal, text1);
}

//this functino tallies up the cost of the selected toppings
//and adds them to the order output
function getTopping(runningTotal,text1) {
    //toppingTotal is the cost of selected toppings
    var toppingTotal = 0;
    //this array contains all the different selected toppings
    var selectedTopping = [];
    
    //build an array of all the "toppings" class elements in the page
    var toppingArray = document.getElementsByClassName("toppings");
    //iterate through the array and add all selected toppings to selectedTopping
    for (var i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedTopping.push(toppingArray[i].value);
            //also add the topping to the receipt text
            text1 = text1 + toppingArray[i].value + "<br>"
        }
    }
    //toppingCount is the number of toppings that must be paid for
    //(1 topping is free) 
    var toppingCount = selectedTopping.length;
    //each topping costs 1 dollar, so this is also the total topping cost
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    //update the running total by adding the topping total
    runningTotal = (runningTotal + toppingTotal);
    //log the current order state for debugging purposes
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping= $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");
    //display the text of the order in the "showText" element
    document.getElementById("showText").innerHTML = text1;
    //display the total cost of the order in the "totalPrice" element
    document.getElementById("totalPrice").innerHTML = 
        "<h3>Total: <strong>$" + runningTotal + ".00 </strong></h3>"; 
}