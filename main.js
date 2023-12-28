/**gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
/** Scroll header 
 
if (ScrollTrigger.isTouch !== 1) {
	window.addEventListener('scroll', e => {
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) 
	})
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content'
	})
}
*/
/** Nav Bar */
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('#menubar');
const iconClose = document.querySelector('.icon-close');
const iconOpen = document.querySelector('.icon-open');

navBtn.addEventListener('click', () => {
  menuBar.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
  iconOpen.classList.toggle("hidden");
});

document.addEventListener('click', (event) => {
  if (!menuBar.contains(event.target) && !navBtn.contains(event.target)) {
    menuBar.classList.add('hidden');
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  }
});
document.addEventListener('touch', (event) => {
  if (!menuBar.contains(event.target) && !navBtn.contains(event.target)) {
    menuBar.classList.add('hidden');
    iconOpen.classList.remove("hidden");
    iconClose.classList.add("hidden");
  }
});

/** Language switch */
const allLang = ['ru', 'en', 'sp'];
let select =document.querySelector('select');

function changeURLLanguage(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

select.addEventListener('change', changeURLLanguage);

function changeLanguage(){
    let hash = window.location.hash;
    hash = hash.substr(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname + '#en';
        location.reload();
    }
    select.value = hash;
    for(let key in langArr){
        let elem = document.querySelector('.lng-'+key);
        if(elem){
            elem.innerHTML =langArr[key][hash];
        };
    };
}
changeLanguage()

/** Pop Up Modal image */

let modalPopUp = function(popUpNumber){
  const width = window.innerWidth;
  const modal = document.querySelector('.modal_'+popUpNumber);
  if (width >= 768) {modal.style.display = "block";}
};

let closeModalPopUp = function(popUpNumber){
  const modal = document.querySelector('.modal_'+popUpNumber);
  modal.style.display = "none";
};