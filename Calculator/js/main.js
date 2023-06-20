//the Calculator constant represents the calculator object
const Calculator = {
    Display_Value: "0",
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

//this function handles digit inputs
function Input_Digit(digit) {
    //pull values from Calculator
    const {Display_Value, Wait_Second_Operand} = Calculator;
    //!!! i don't fully understand the purpose of wait_second operand.
    //!!! is it showing whether we're waiting for a second operand, or 
    //!!! if we HAVE a second operand? can't wrap my head around this part.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

//this function handles decimal points
function Input_Decimal(dot) {
    //if the decimal point is pressed at the wrong time, ignore it
    if (Calculator.Wait_Second_Operand === true) return;
    //if there isn't already a decimal point, add one to the display
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

//this function handles operators
function Handle_Operator(Next_Operator) {
    //pull values from Calculator
    const {First_Operand, Display_Value, operator} = Calculator;
    //when an operator is pressed, parse the display
    const Value_of_Input = parseFloat(Display_Value);
    //!!! wait second operand still confuses me so much
    if(operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    //if there is no first operand, store the parsed display as the first operand
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        //otherwise, evaluate the expression and set the display to the result
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    //then update wait second operand and the operator to match input
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

//performs the calculation denoted by the operator on the two operands
const Perform_Calculation = {
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
//resets the display and clears the values of the Calculator
function Calculator_Reset() {
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
//updates the calculator-screen element to reflect the current display value
function Update_Display() {
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display();

//tracks key clicks and activates the corresponding functions functions
const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const {target} = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
});