/*
============================================
; Title: Assignment 9.2 Final: Card Game
; File Name: kerrey-card-game.js
; Author: Professor Krasso
; Date: 19 December 2021
; Modified By: Seth Kerrey
; Description:
;   Script for the kerrey-card-game.html file.
; Resources:
;   JavaScript code was taken from "WEB 231 Assign_8.docx"
;   	Class names, ids, & variable names provided by Prof Krasso.
;   JS code provided by Prof Krasso:
;       this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
;       Math.floor(Math.random() * this.CARD_COUNT);
;   W3Schools JavaScript Function
;       https://www.w3schools.com/js/js_functions.asp
;   W3Schools JS Function Call
;       https://www.w3schools.com/js/js_function_call.asp
;   W3Schools Template literal
;       https://www.w3schools.com/js/js_string_templates.asp
;   Inline styles
;       https://www.codecademy.com/article/html-inline-styles
;   Material Design Icons
;       https://www.codecademy.com/article/html-inline-styles
;       https://materialdesignicons.com/
;   W3Schools Grid
;       https://www.w3schools.com/cssref/pr_grid-gap.asp
;       https://www.w3schools.com/css/css_grid.asp
;   W3Schools Math.floor()
;       https://www.w3schools.com/jsref/jsref_floor.asp
===========================================
*/

// Card class
class Card {
    constructor(face, suit) {
      (this.face = face);
      this.suit = suit;
    } 
}

// Dealer class
class Dealer {
    constructor() {
        getDeckOfCards();
    }
}

// Assign variables & arrays
var CARD_COUNT = 52;
var cards = [];
var faces = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

// Function getDeckOfCards
function getDeckOfCards() {
    for (let count = 0; count < this.CARD_COUNT; count++) {
        this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]); // Code provided by Prof Krasso
    }
}

// Function shuffle that iterates 52 times using a random card generator for the card variable
function shuffle() {
    for (let firstCard = 0; firstCard < this.CARD_COUNT; firstCard++) {
        let tempCard = this.cards[firstCard];
        let secondCard = Math.floor(Math.random() * this.CARD_COUNT); // Code provided by Prof Krasso
        this.cards[firstCard] = this.cards[secondCard];
        this.cards[secondCard] = tempCard;
    }
}

// Function that creates the template literal for each card using parameters: card, suitIcon, faceColor, and suitColor
function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    return `
    <div class="card player-card">
        <div class="card-title" style="text-align:left;font-size:20px;padding-left:10px;color:${faceColor}">
        ${card.face}
            <div class="card-content" style="font-size:28px;padding-bottom:25px;">
                <span class="${suitIcon}" style="color:${suitColor}">
                </span>
            </div>
        </div>
    </div>`;
} 

// Register onclick event
document.getElementById("btnDealCards").onclick = function() {
    
    // Create new dealer object
    let dealer = new Dealer();

    // Shuffle function for dealer object
    shuffle(dealer);
    let cardOutputWithIcon = "";
    
    // For...of loop used with switch case to assign the icons to cards
    for(card of cards) {
        switch(card.suit) {
            case "Hearts":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-heart", "red", "red");
                break;
            case "Diamonds":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-diamond", "red", "red");
                break;
            case "Clubs":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-club", "black", "black");
                break;
            case "Spades":
                cardOutputWithIcon += buildPlayingCard(card, "mdi mdi-cards-spade", "black", "black");
                break;
            default:
                console.log("Default");
        }
    }

    // Bind cards to HTML
    document.getElementById("player-card-container").innerHTML = cardOutputWithIcon;

};
