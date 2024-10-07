

// MENU SHOW and HIDDEN

const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

// MENU SHOW
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// MENU HIDDEN
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  // When we click on each nav_link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// ----------SKILLS---------

const skillsContent = document.getElementsByClassName('skills_content'),
  skillsHeader = document.querySelectorAll('.skills_header');

function toggleSkills() {
  let itemClass = this.parentNode.classList;

  // Close all skills
  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills_content skills_close';
  }

  // Open the clicked skill
  if (itemClass.contains('skills_close')) {
    this.parentNode.className = 'skills_content skills_open';
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
});

// ----------------------Qualification Tabs-----------------

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')


 tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification_active')
    })
    target.classList.add('qualification_active')

    tab.forEach(tab =>{
      tab.classList.remove('qualification_active')
    })
    tab.classList.add('qualification_active')
    
  })
 })     

//  ======================Services modal===========
const modalviews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

 let modal = function(modalClick){
     modalviews[modalClick].classList.add('active-modal')
 }

 modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener('click', () =>{
    modal(i)
  })
 })

 modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () =>{
    modalviews.forEach((modalview) =>{
      modalview.classList.remove('active-modal')
    })
  })
 })

//  ==========Portfolio swiper+======
let swiperPortfolio = new Swiper('.portfolio_container', {
  // cssMode: true,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

//  ==========Testimonial swiper+======
// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// =============Scroll sectiion active link==========

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive)

// ==================Change background header===================
function scrollHeader() {
  const nav = document.getElementById('header')
  //when the scroll is greater than 80 viewport height, add the scroll header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ==============Show scroll up=============
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //when the scroll is heigher than 500 viewport height, add the show scroll class  to the a tag with the scroll.
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// ===============Dark light theme============

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selcted)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
  //if the validation is fullfilled,we ask what the issue was to know if we activated or deactivatedthe dark mood
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate or deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  //add or remove the dark icontheme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  //save the theme and the current icon that the user choose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})