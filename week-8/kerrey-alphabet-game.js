/*
============================================
; Title: Assignment 8.2 Alphabet Game
; File Name: kerrey-alphabet-game.js
; Author: Professor Krasso
; Date: 12 December 2021
; Modified By: Seth Kerrey
; Description:
;   Script for the kerrey-alphabet-game.html file.
; Resources:
;   JavaScript code was taken from "WEB 231 Assign_8.docx"
;   	Class names, ids, & variable names provided by Prof Krasso.
;   W3Schools Arrays
;		https://www.w3schools.com/js/js_arrays.asp
;	MDN Arrays
;		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
;   StackOverflow Character Arrays example by user insertusernamehere
;		https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string
;   W3Schools For in Loop
;		https://www.w3schools.com/js/js_loop_forin.asp
; 	MDN Typeof
;		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
;	MDN toUpperCase()
;		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
; 	MDN String - new line in console.log "\n"
;		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
;	MDN undefined
;		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
===========================================
*/

// Create character array of alphabet
let characterArray = "abcdefghijklmnopqrstuvwxyz";

// Create alphabet array and assign to characterArray
const alphabet = [...characterArray];

// Test array
console.log(alphabet);

// Create variable with empty string
let alphabetOutput = "";

// For/in loop to build alphabet string with comma
for (let x in alphabet) {
  	alphabetOutput += alphabet[x] + ", ";
}

// Test alphabetOutput array & typeof array
console.log("alphabetOutput array = " + alphabetOutput + "\n" + "Type of alphabetOutput array = " + typeof alphabetOutput);

// Bind to output div alphabet/alphabet-results with uppercase & remove trailing comma
document.getElementById("alphabet-results").innerHTML = alphabetOutput.toUpperCase().slice(0, -2);

// Register onclick event
document.getElementById("btnFindLetter").onclick = function() {

	// Declare pos variable and bind to input
	let pos = document.getElementById("txtPosition").value;

	// Equate array position to letter variable
	letter = alphabet[pos - 1]; //"pos - 1" makes "A = 1"

	// If else if loop testing if letter =/= numbers 1-26 & bind results
	if (letter === undefined) {

		document.getElementById("alphabet-letter").innerHTML = "There are not " + pos + " letters in the alphabet";

	// Testing if number = 1-26 & bind results
	} else {

		document.getElementById("alphabet-letter").innerHTML = letter.toUpperCase() + " is at position " + pos + " in the alphabet";

	}

	// Output test of pos and letter
	console.log("Entered number = " + pos + "\n" + "Letter = " + letter);
} 