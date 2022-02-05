const navToogle = document.getElementById('nav-toogle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
navToogle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu');
}) 
navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
})
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(element => {
    element.addEventListener('click',linkActive)
});
function linkActive(){
    navMenu.classList.remove('show-menu');
}
// theme change
const themeChange = document.getElementById('theme-change');
if(localStorage.getItem('theme')===null){
    localStorage.setItem('theme','light');
}
if(localStorage.getItem('theme')==='light'){
    document.body.classList.add('body-dark-theme');
        themeChange.classList.remove('uil-moon');
        themeChange.classList.add('uil-sun');
}
else if (localStorage.getItem('theme')==='dark'){
    document.body.classList.remove('body-dark-theme');
        themeChange.classList.remove('uil-sun');
        themeChange.classList.add('uil-moon');
}
themeChange.addEventListener('click',()=>{
    let theme = localStorage.getItem('theme');
    if(theme==='dark'){
        document.body.classList.add('body-dark-theme');
        themeChange.classList.remove('uil-moon');
        themeChange.classList.add('uil-sun');
        localStorage.setItem('theme','light');
    }else{
        document.body.classList.remove('body-dark-theme');
        themeChange.classList.remove('uil-sun');
        themeChange.classList.add('uil-moon');
        localStorage.setItem('theme','dark');
    }
})


// Skills Accordian 
const skillsHeaders = document.querySelectorAll('.skills__header');
const skillsContents = document.querySelectorAll('.skills__content');
skillsContents.forEach((element,index) => {
    element.addEventListener('click',()=>{
        if(element.classList.contains('skills__open')){
            element.classList.remove('skills__open');
        }else{
            skillsContents.forEach(e=>{
                e.classList.remove('skills__open');
            })
            skillsContents[index].classList.add('skills__open');
        }
    })

});


// scrollTop 
const scrollTopButton  = document.querySelector('.scrollTop__box');
scrollTopButton.addEventListener('click',()=>{
    topFunction();
})
window.addEventListener('scroll',scrollFunction);
function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Injecting Dynamic Text
let array = ['JavaScript','Frontend Developer','Backend Developer','Ui/Ux Developer','Programmer','Data Science','C','Python','Data Structures and Algorithms'];
const Inject = document.querySelectorAll('.inject');

let i=0;
setInterval(() => {
    if(i<array.length){
        Inject.forEach(e =>{
            e.innerText = array[i];
        })
        i++;
    }else{
        i=0;
    }
}, 900);