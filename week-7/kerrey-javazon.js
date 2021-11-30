/*
============================================
; Title: Assignment 7.2 Javazon
; File Name: kerrey-javazon.js
; Author: Professor Krasso
; Date: 5 December 2021
; Modified By: Seth Kerrey
; Description: 
;   Script for the kerrey-javazon.html file
; Resources: 
;   JavaScript code was taken from "WEB 231 Assign_7.docx" 
;   
;   W3Schools This keyword
;       https://www.w3schools.com/js/js_this.asp     
;   W3Schools Switch Statement
;       https://www.w3schools.com/js/js_switch.asp
;   W3Schools toFixed()
;       https://www.w3schools.com/jsref/jsref_tofixed.asp

===========================================
*/

class Product {
  constructor(id, description, price, quantity) {
    this.id = id;
    this.description = description;
    this.price = price;
    this.quantity = quantity;
    totalValue.toFixed(2) = quantity * price;
  }
}

class Services {
  constructor(id, description, hourlyRate, min) {
    this.id = id;
    this.description = description;
    this.hourlyRate = hourlyRate.toFixed(2);
    this.min = min;
  }
}

class Employees {
  constructor(id, firstName, lastName, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary.toFixed(2);
  }
}

// const favoriteAuthor1 = {
//   name: "Isaac Asimov",
//   genre: "Science Fiction"
// }

// const Product = {
//   id: 9781118008188,
//   description: "HTML and CSS",
//   price: 22.26,
//   quantity: 10
// }


let products = document.getElementById("products");
let services = document.getElementById("services");
let employees = document.getElementById("employees");

products.style.display = "none";
services.style.display = "none";
employees.style.display = "none";

// Register onclick event
document.getElementById("btnDisplayListing").onclick = function() {

  // Capture inputted value from txtMySelectList id & assign to variable choice
  let choice = document.getElementById("txtMySelectList").value;

  switch(choice) {

    case "products": 

      products.style.display = "block";
      services.style.display = "none";
      employees.style.display = "none";

      console.log("switch case - products selected"); // test
      
      break;

    case "services":

      products.style.display = "none";
      services.style.display = "block";
      employees.style.display = "none";

      console.log("switch case - service selected"); // test

      break;

    case "employees": 

      products.style.display = "none";
      services.style.display = "none";
      employees.style.display = "block";

      console.log("switch case - employees selected"); // test

      break;

    default:

      console.log("no value selected"); // test

  }
}
                
  