/*
Name : Harninsh Prajapati
File : main.js
Date : 1 April 2025
Purpose : assignment 4 part 2
*/

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const obj = {
    "pic1.jpg": "Picture of Human eye",
    "pic2.jpg": "Picture of something wavy",
    "pic3.jpg": "Lavender flowers",
    "pic4.jpg": "Ancient Egypt painting",
    "pic5.jpg": "Butterfly image"
}

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
