'use strict'

//Basic Variable Declaration
let dice = document.getElementById("dice"); //targeting the dice div
let diceNumber; //Declaring variable for dice
let hold = document.getElementById('hold'); //targeting the hold button
let n1 = document.getElementById('n1'); //targeting the dot 1 of dice 
let n2 = document.getElementById('n2'); //targeting the dot 1 of dice 
let n3 = document.getElementById('n3'); //targeting the dot 1 of dice 
let n4 = document.getElementById('n4'); //targeting the dot 1 of dice 
let n5 = document.getElementById('n5'); //targeting the dot 1 of dice 
let n6 = document.getElementById('n6'); //targeting the dot 1 of dice 
let n7 = document.getElementById('n7'); //targeting the dot 1 of dice 
let n8 = document.getElementById('n8'); //targeting the dot 1 of dice 
let n9 = document.getElementById('n9'); //targeting the dot 1 of dice 
let newgame; //declaring the variable for new game

//Variable Declaration for player 1
let p1Total = 0 //declaring and initializing total score at 0
let div1h2 = document.getElementById('div1h2') //targeting the heading 2 of div 1
let p1Score = 0; //declaring and initializing current score of at 0
let innerdiv1h2 = document.getElementById('innerdiv1h2') //targeting the heading 2 of inner div 1

//Variable Declaration for player 2
let p2Total = 0 //declaring and initializing total score at 0
let div2h2 = document.getElementById('div2h2');  //targeting the heading 2 of div 2
let p2Score = 0; //declaring and initializing current score of at 0
let innerdiv2h2 = document.getElementById('innerdiv2h2') //targeting the heading 2 of inner div 2

//Extra Variable Declaration
let chance = 1 //declaring and initializing the chance variable to 1 to switch between the players
let overall = 80; //Total score to achive in order to win game
// let p1 = prompt("Enter your name player 1"); //Asking the name of player 1
// let p2 = prompt("Enter your name player 2"); //Asking the name of player 2
let div1h1 = document.getElementById('div1h1').innerHTML = `Player 1 <br> ${p1}` //Display the name of player 1 on screen
let div2h1 = document.getElementById('div2h1').innerHTML = `Player 2 <br> ${p2}` //Display the name of player 2 on screen

//Function for new game
function f3() {
    p1Total = 0; //set the total score 0 of player1
    p2Total = 0; //set the total score 0 of player2
    p1Score = 0; //set the current score 0 of player1
    p2Score = 0; //set the current score 0 of player1
    innerdiv1h2.innerHTML = "0"; //Putting the initial value i.e, 0 in div
    innerdiv2h2.innerHTML = "0"; //Putting the initial value i.e, 0 in div
    div2h2.innerHTML = "0"; //Putting back the value to initial value i.e, 0 in div
    div1h2.innerHTML = "0"; //Putting back the value to initial value i.e, 0 in div
    chance = 1;
    let div2 = document.getElementById('div2').style.backgroundColor = "rgb(251, 118, 140)" //Putting back the value to initial value i.e, 0 in div
    let div1 = document.getElementById('div1').style.backgroundColor = "rgb(255, 157, 173)" //Putting back the value to initial value i.e, 0 in div
    n1.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n2.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n3.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n4.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n5.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n6.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n7.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n8.style.visibility = "hidden"; //Hidding the dot 1 of dice
    n9.style.visibility = "hidden"; //Hidding the dot 1 of dice
}

function f2() {

    if (chance % 2 != 0) {
        p1Total = p1Score + p1Total;
        div1h2.innerHTML = p1Total;
        p1Score = 0;
        innerdiv1h2.innerHTML = p1Score
        chance = chance + 1
        let div1 = document.getElementById('div1').style.backgroundColor = "rgb(251, 118, 140)"
        let div2 = document.getElementById('div2').style.backgroundColor = "rgb(255, 157, 173)"
    }
    else if (chance === chance % 2 == 0) {
        p2Total = p2Score + p2Total;
        div2h2.innerHTML = p2Total;
        p2Score = 0;
        innerdiv2h2.innerHTML = p2Score
        chance = chance + 1
        let div2 = document.getElementById('div2').style.backgroundColor = "rgb(251, 118, 140)"
        let div1 = document.getElementById('div1').style.backgroundColor = "rgb(255, 157, 173)"
    }
    if (p1Total >= overall) {
        let win = document.getElementById('win');
        win.innerHTML = `Player ${p1} Wins🎉`;
        win.style.visibility = "visible";
    }
    else if (p2Total >= overall) {
        let win = document.getElementById('win');
        win.innerHTML = `Player ${p2} Wins🎉`;
        win.style.visibility = "visible";
    }
}

function f1() {
    if (chance % 2 != 0 && p1Total <= overall) {
        diceNumber = Math.trunc(Math.random() * 6 + 1);
        n1.style.visibility = "hidden";
        n2.style.visibility = "hidden";
        n3.style.visibility = "hidden";
        n4.style.visibility = "hidden";
        n5.style.visibility = "hidden";
        n6.style.visibility = "hidden";
        n7.style.visibility = "hidden";
        n8.style.visibility = "hidden";
        n9.style.visibility = "hidden";
        let div2 = document.getElementById('div2').style.backgroundColor = "rgb(251, 118, 140)"
        let div1 = document.getElementById('div1').style.backgroundColor = "rgb(255, 157, 173)"
        if (diceNumber === 1) {
            n5.style.visibility = "visible";
            innerdiv1h2.innerHTML = 0;
            div1h2.innerHTML = 0;
            chance = chance + 1;
            let div1 = document.getElementById('div1').style.backgroundColor = "rgb(251, 118, 140)"
            let div2 = document.getElementById('div2').style.backgroundColor = "rgb(255, 157, 173)"
            p1Score = 0;
            p1Total = 0
        }
        else if (diceNumber === 2) {
            n3.style.visibility = "visible"
            n7.style.visibility = "visible"
            p1Score += 2;
            innerdiv1h2.innerHTML = p1Score
        }
        else if (diceNumber === 3) {
            n3.style.visibility = "visible"
            n5.style.visibility = "visible"
            n7.style.visibility = "visible"
            p1Score += 3;
            innerdiv1h2.innerHTML = p1Score
        }
        else if (diceNumber === 4) {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p1Score += 4;
            innerdiv1h2.innerHTML = p1Score
        }
        else if (diceNumber === 5) {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n5.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p1Score += 5;
            innerdiv1h2.innerHTML = p1Score
        }
        else {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n4.style.visibility = "visible"
            n6.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p1Score += 6;
            innerdiv1h2.innerHTML = p1Score
        }
    }
    else if (p1Total >= overall) {
        let win = document.getElementById('win');
        win.innerHTML = `Player ${p2} Wins🎉`;
        win.style.visibility = "visible";
    }
    else if (p2Total >= overall) {
        let win = document.getElementById('win');
        win.innerHTML = `Player ${p2} Wins🎉`;
        win.style.visibility = "visible";
    }
    else if (chance % 2 == 0 && p2Total <= overall) {
        console.log("Player2");
        diceNumber = Math.trunc(Math.random() * 6 + 1);
        n1.style.visibility = "hidden"
        n2.style.visibility = "hidden"
        n3.style.visibility = "hidden"
        n4.style.visibility = "hidden"
        n5.style.visibility = "hidden"
        n6.style.visibility = "hidden"
        n7.style.visibility = "hidden"
        n8.style.visibility = "hidden"
        n9.style.visibility = "hidden"
        let div1 = document.getElementById('div1').style.backgroundColor = "rgb(251, 118, 140)"
        let div2 = document.getElementById('div2').style.backgroundColor = "rgb(255, 157, 173)"

        if (diceNumber === 1) {
            n5.style.visibility = "visible";
            innerdiv2h2.innerHTML = 0;
            div2h2.innerHTML = 0;
            chance = chance + 1;
            let div2 = document.getElementById('div2').style.backgroundColor = "rgb(251, 118, 140)"
            let div1 = document.getElementById('div1').style.backgroundColor = "rgb(255, 157, 173)"
            p2Score = 0;
            p2Total = 0;
        }
        else if (diceNumber === 2) {
            n3.style.visibility = "visible"
            n7.style.visibility = "visible"
            p2Score += 2;
            innerdiv2h2.innerHTML = p2Score
        }
        else if (diceNumber === 3) {
            n3.style.visibility = "visible"
            n5.style.visibility = "visible"
            n7.style.visibility = "visible"
            p2Score += 3;
            innerdiv2h2.innerHTML = p2Score
        }
        else if (diceNumber === 4) {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p2Score += 4;
            innerdiv2h2.innerHTML = p2Score
        }
        else if (diceNumber === 5) {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n5.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p2Score += 5;
            innerdiv2h2.innerHTML = p2Score
        }
        else {
            n1.style.visibility = "visible"
            n3.style.visibility = "visible"
            n4.style.visibility = "visible"
            n6.style.visibility = "visible"
            n7.style.visibility = "visible"
            n9.style.visibility = "visible"
            p2Score += 6;
            innerdiv2h2.innerHTML = p2Score
        }
    }
}