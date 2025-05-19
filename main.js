console.log('Hello World!');


// nav bar functionality selection start

const sidemenu = document.querySelector('.bar')
const bar1 = document.querySelector('#bar1')
const bar2 = document.querySelector('#bar2')
const bar3 = document.querySelector('#bar3')
const header = document.querySelector('#side-logic')
const mainul = document.querySelector('header nav ul')

// nav bar selection end

// dark and light mode start 

const mode = document.querySelector(".mode");

const darkMode = mode.firstElementChild;

const lightMode = mode.children[1];

const aboutSec = document.querySelector('.about')

const mainBody = document.querySelector('body')

const aboutHeading = document.querySelectorAll('#about-heading')
const aboutPara = document.querySelectorAll('#about-para1')
const aboutPara2 = document.querySelectorAll('#about-para2')
// dark and light mode end 


// main nav function start

sidemenu.addEventListener("click", () => {
  bar1.classList.toggle('barline1')
  bar2.classList.toggle('barline2')
  bar3.classList.toggle('barline3')
  sidemenu.classList.toggle('main-bar')
  header.classList.toggle('side-head')
  mainul.classList.toggle('main-ul')
});

// main nav function end

// dark and light mode start 

darkMode.addEventListener("click" , () => {
  aboutSec.classList.add('dark-about')
  mainBody.classList.add('dark-body')
})

lightMode.addEventListener("click", () => {
  aboutSec.classList.remove('dark-about')
  mainBody.classList.remove('dark-body')
})

// dark and light mode end 