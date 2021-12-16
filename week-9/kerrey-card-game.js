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
===========================================
*/

// Card class
class Card {
    constructor(face, suit) {
      this.face = face;
      this.suit = suit;
    } 
}

// Dealer class
class Dealer {
    constructor() {
        getDeckOfCards();
    } 
}

// Assign variables
let CARD_COUNT = 52;

// Assign array cards, faces, suits
const cards = [];
const faces = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

// Function getDeckOfCards, code provided by Prof Krasso
function getDeckOfCards() {
    for (let count=0; count<this.CARD_COUNT; count++) {
        this.cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)]);
    }
    return getDeckOfCards;
}

function shuffle() {
    for (let count=0; count<this.CARD_COUNT; count++) {
        let tempCard = this.cards[firstCard];
        let secondCard = Math.floor(Math.random() * this.CARD_COUNT);
        cards[firstCard] = cards[secondCard];
        cards[secondCard] = tempCard;
    }
    return shuffle;
}

function buildPlayingCard(card, suitIcon, faceColor, suitColor) {
    let string = `
    <div class="${card} player-card">
        <div class="card-title" style="text-align:left;font-size:20px;padding-left:10px;color:${faceColor}">
            <div class="card-content" style="font:28px;padding-bottom:25px;">
                <span class="${suitIcon}" style="color:${suitColor}">
                </span>
            </div>
        </div>
    </div>        
    `
    return string;
} 

// Register onclick event
document.getElementById("btnDealCards").onclick = function() {

    let dealer = {cards};
    shuffle();
    let cardOutputWithIcon = "";

    for(let x of dealer.cards) {
        switch(card.suit) {

            case "Hearts":
                cardOutputWithIcon += buildPlayingCard(cards, "mdi mdi-heart", "red", "red");
                console.log("hearts");
                break;
            case "Diamonds":
                cardOutputWithIcon += buildPlayingCard(cards, "mdi mdi-cards-diamonds", "red", "red");
                console.log("2");
                break;
            case "Clubs":
                cardOutputWithIcon += buildPlayingCard(cards, "mdi mdi-cards-club", "black", "black");
                console.log("3");
                break;
            case "Spades":
                cardOutputWithIcon += buildPlayingCard(cards, "mdi mdi-spade", "black", "black");
                console.log("4");
                break;
            default:
                console.log("Default");
        }
    }

    cardOutputWithIcon = document.getElementById("player-card-container").innerHTML;

}
