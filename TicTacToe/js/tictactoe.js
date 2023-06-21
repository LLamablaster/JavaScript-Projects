//the player whose turn it currently is. x is the user, o is the computer.
let activePlayer = "x";
//this array contains all of the squares that have been played this game
let selectedSquares = [];

//this function plays the selected square based on whose turn it is
function placeXOrO(squareID) {
    //if the played square has not yet been played, play that square
    if (!selectedSquares.some(element => element.includes(squareID))) {
        //set select to point to the selected square in the page
        let select = document.getElementById(squareID);
        //if it's the player's turn, play x. otherwise, play o.
        if (activePlayer === "x") {
            select.style.backgroundImage = "url('./images/x.png')"
        } else {
            select.style.backgroundImage = "url('./images/o.png')"
        }
        //push the play to the array of played squares
        selectedSquares.push(squareID + activePlayer);
        //then check if the game is over.
        checkWinConditions();
        //then switch the active player
        if (activePlayer === "x") {
            activePlayer = "o";
        } else {
            activePlayer = "x";
        }
        //play a click sound
        audio("./media/click.mp3");
        //if we switched to the computer's turn, lock out the user for 
        //one second while the computer plays
        if (activePlayer === "o") {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1500);
        }
        //return true only if the square has not been played
        return true;
    }
    //this function plays for the computer
    function computersTurn() {        
        let success = false;
        let pickASquare = 9;
        //randomly select a space to play until an empty one is selected
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            //this statement is only true if the space is empty
            if (placeXOrO(pickASquare)) {
                //then play the space and break the loop
                placeXOrO(pickASquare);
                success = true;
            }
        }

    }
}

//this function checks the array of played spaces for all the
//game-ending combinations of spaces. if one is found it draws
//a line through those spaces.
function checkWinConditions() {
    //horizontal x wins
    if (arrayIncludes("0x", "1x", "2x")) { drawWinLine(50,100,558,100)}
    else if (arrayIncludes("3x", "4x", "5x")) { drawWinLine(50, 304, 558, 304)}
    else if (arrayIncludes("6x", "7x", "8x")) { drawWinLine(50, 508, 558, 508) }
    //vertical x wins
    else if (arrayIncludes("0x", "3x", "6x")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1x", "4x", "7x")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2x", "5x", "8x")) { drawWinLine(508, 50, 508, 558) }
    //diagonal x wins
    else if (arrayIncludes("6x", "4x", "2x")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("8x", "4x", "0x")) { drawWinLine(100, 100, 520, 520) }
    
    //horizontal o wins
    else if (arrayIncludes("0o", "1o", "2o")) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes("3o", "4o", "5o")) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes("6o", "7o", "8o")) { drawWinLine(50, 508, 558, 508) }
    //vertical o wins
    else if (arrayIncludes("0o", "3o", "6o")) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes("1o", "4o", "7o")) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes("2o", "5o", "8o")) { drawWinLine(508, 50, 508, 558) }
    //diagonal o wins
    else if (arrayIncludes("6o", "4o", "2o")) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes("8o", "4o", "0o")) { drawWinLine(100, 100, 520, 520) }
    
    //if the array is full of plays but there is no win, initiate a game reset 
    else if (selectedSquares.length>= 9) {
        audio("./media/Weak_02.ogg");
        setTimeout(function () { resetGame(); }, 1500)
    }

    //this function checks if each of three arguments are included
    //in selectedSquares
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //return true only if all three are present
        if (a === true && b === true && c === true) {return true;}
        }
}

//this function locks out the user from interacting with the page for 1 second
function disableClick() {
    document.body.style.pointerEvents = "none";
    setTimeout(function () { document.body.style.pointerEvents = "auto"; }, 1500);
}

//this function is a sortcut to play an audio clip
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//this function draws a green line from (x1,y1) to (x2,y2)
function drawWinLine(x1,y1,x2,y2) {
    //if it's the player's turn, play computer loss audio
    //otherwise play computer victory audio
    if (activePlayer === "x") {
        audio("./media/Improbable_01.ogg");
    } else {
        audio("./media/HowPathethic_03.ogg");
    }
    //set c to be the 2d context of the "win-lines" canvas element
    const canvas = document.getElementById("win-lines");
    const c = canvas.getContext("2d");
    //set the beginning of the line to x1 and y1
    var x = x1;
    var y = y1;

    //disable user input, animate the line, clear the line, then reset the game
    disableClick();
    animateLineDrawing();
    setTimeout(function () { clear(); }, 1500);
    setTimeout(function () { resetGame(); }, 1500);

    //this function animates the line being drawn
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //first clear the canvas
        c.clearRect(0, 0, 608, 608);
        //draw a green line from (x1,y1) to the current (x,y)
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10
        c.strokeStyle = "rgba(70,255,33,.8)";
        c.stroke();
        //end check for all cases except 6-4-2 win
        if (x1 <= x2 && y1 <= y2) {
            //then if we haven't reached (x2,y2) increment (x,y) by 10 pixels
            if (x < x2) { x += 10 }
            if (y < y2) { y += 10 }
            //extra cancellation check for 6-4-2 condition
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop) }
        }
        //end check for 6-4-2 win which has negative y travel
        if (x1 <= x2 && y1 >= y2) {
            //then if we haven't reached (x2,y2) increment (x,y) by 10 pixels
            if (x < x2) { x += 10 }
            if (y > y2) { y -= 10 }
            //extra cancellation check for 6-4-2 condition
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) }
        }
    }

    //this function clears the line off the canvas
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
}

//this function clears the game board and begins a new game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }
    selectedSquares = [];
    audio("./media/Cleansing_03.ogg")
}