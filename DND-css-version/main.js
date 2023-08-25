gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
/** Scroll header */
if (ScrollTrigger.isTouch !== 1) {
	window.addEventListener('scroll', e => {
		document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
	})
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content'
	})
}

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
