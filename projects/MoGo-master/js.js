'use strict';

//Ability-item in Service

let num = 0;
let info = document.querySelectorAll('.ability-item-info')
let ability = document.querySelectorAll('.ability-item');
let massAbility = []

function saturn(e) {
    let num = massAbility.indexOf(this);
    removeClass(info, 'hidden');
    info[num].classList.add('hidden');
}

function removeClass(massiv, className) {
    for (let item of massiv) item.classList.remove(className)
}

for (let i = 0; i < ability.length; i++) {
    massAbility.push(ability[i]);
    ability[i].addEventListener ('click', saturn);
} 
 

// Translate blockqote

let quotes = document.querySelectorAll('.quotes-item')
let btnRight = document.querySelector('.quotes-right-btn')
let btnLeft = document.querySelector('.quotes-left-btn')
let numCurrent = 0;
let widthQuotes = document.querySelector('.quotes-container')
let size = widthQuotes.clientWidth

btnRight.addEventListener('click', nextBtn);
btnLeft.addEventListener('click', prevBtn)

displayBtn()

function nextBtn() {
    quotes[numCurrent].style.transform = "translateX(" + -size + "px)";
    quotes[numCurrent+1].style.transform = "translateX(0px)";
    console.log(numCurrent);
    numCurrent++;
    displayBtn();
}

function prevBtn() {
    quotes[numCurrent].style.transform = "translateX(" + size + "px)";
    quotes[numCurrent-1].style.transform = "translateX(0px)";
    numCurrent--;
    displayBtn();
}

function displayBtn(){
(numCurrent == 0) ? (btnLeft.style.display ='none') : (btnLeft.style.display ='block');   
(numCurrent == 2) ? (btnRight.style.display ='none') : (btnRight.style.display ='block')
}

//Translate collage 

let comment = document.querySelectorAll('.collage-comment')
let btnCollageRight = document.querySelector('.collage-right-btn')
let btnCollageLeft = document.querySelector('.collage-left-btn')
let numCollage = 0;
let widthCollage = document.querySelector('.collage-container')
let sizeCollage = widthCollage.clientWidth

displayCollageBtn()

btnCollageRight.addEventListener('click', nextCollageBtn);
btnCollageLeft.addEventListener('click', prevCollageBtn)

function nextCollageBtn() {
    comment[numCollage].style.transform = "translateX(" + -sizeCollage + "px)";
    comment[numCollage+1].style.transform = "translateX(0px)";
    console.log(numCollage);
    numCollage++;
    displayCollageBtn();
}

function prevCollageBtn() {
    comment[numCollage].style.transform = "translateX(" + sizeCollage + "px)";
    comment[numCollage-1].style.transform = "translateX(0px)";
    numCollage--;
    displayCollageBtn();
}

function displayCollageBtn(){
(numCollage == 0) ? (btnCollageLeft.style.display ='none') : (btnCollageLeft.style.display ='block');   
(numCollage == 2) ? (btnCollageRight.style.display ='none') : (btnCollageRight.style.display ='block')
}