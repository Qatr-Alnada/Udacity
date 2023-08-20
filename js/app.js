/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// global variable
const navList = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll("section");
const myA = document.querySelectorAll('a[href^="#"]');
//const section = document.querySelectorAll("section");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
//const navBuilder = () => {
    //let navUI =  '';
    //section.forEach(section =>{
       //const sectionID = section.id;
       //const sectionDataNav = section.dataset.nav;
       //navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    //});
    //navgation.innerHTML = navUI;
 //}
 //navBuilder();


//const navList =document.querySelector('#navbar__list');

function buildNavbar() {
   for(let section of sectionsList) {
      navList.innerHTML += 
      `<li><a class="menu__link" data-nav="#${section.id}" href="#${section.id}"> ${section.id}</a></li>`;
   }
}

buildNavbar();

// Add class 'active' to section when near top of viewport


//function addActiveClass () {
   //sectionsList.forEach(section => {
      //console.log(`${section.id}`.sectionsList.getBoundingClientRect().top);
       //if(window.scrollY > (section.offsetTop -20) && window.scrollY < (section.offsetTop+section.offsetHeight) -30){
         //section.classList.add("your-active-class");
       //document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add ("active");
       //section.style.cssText ="background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";
       
   //} else {
       //section.classList.remove("your-active-class");
       //document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
       //section.style.cssText= "background-color: white";
   //}
//})
//}
//addActiveClass();
//const sectionActivation = ()=>{
   //sections.forEach(section => {
      //const elementOffset = sections.getBoundingClientRect();
      //inviewport = () => elementOffset < 100 &&  elementOffset >= -100;
      //removeActive(sections);
      //addActive(inviewport(),sections);
   //});
//};

//window.addEventListener('scroll',sectionActivation);
function activeNavBar ()
{
   const lis = Array.from( document.querySelectorAll('.menu__link') );
   sectionsList.forEach( section =>
   {
      if ( section )
      {
         const getBCR = section.getBoundingClientRect().top;
         if ( getBCR < 200 && getBCR > -40 )
         {
            section.classList.add( 'your-active-class' );
            const found = lis.filter( e =>
            {
               return e.dataset.nav == `#${ section.id }`;
            } );
            found[ 0 ].style.backgroundColor = 'yellow';
         } else
         {
            section.classList.remove( 'your-active-class' );
            const found = lis.filter( e =>
            {
               return e.dataset.nav == `#${ section.id }`;
            } );
            found[ 0 ].style.backgroundColor = '';
         }
      }
   } );
}

// Scroll to anchor && Add class 'active' to section when near top of viewport
document.addEventListener('scroll',activeNavBar);
//smoth Scroll to section 
function smoothScroll () {

   navList.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView ({
            behavior: 'smooth'
        });
      });
});
}

smoothScroll();
