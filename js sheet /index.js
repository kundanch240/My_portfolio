const mode = document.querySelector(".mode");

const darkMode = mode.firstElementChild;

const lightMode = mode.children[1];

const aboutSec = document.querySelector('.about')

const mainBody = document.querySelector('body')

const aboutHeading = document.querySelectorAll('#about-heading')
const aboutPara = document.querySelectorAll('#about-para1')
const aboutPara2 = document.querySelectorAll('#about-para2')

darkMode.addEventListener("click" , () => {
  aboutSec.classList.add('dark-about')
  mainBody.classList.add('dark-body')
})

lightMode.addEventListener("click", () => {
  aboutSec.classList.remove('dark-about')
  mainBody.classList.remove('dark-body')
})

// dark and light mode end 