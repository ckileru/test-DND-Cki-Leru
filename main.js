const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () =>{
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
});

const menuItem = document.querySelector('[role="menuitem"]');

menuItem.addEventListener('click', () =>{
    menuBar.classList.remove("flex");
    menuBar.classList.add("flex");
});

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	let itemsL = gsap.utils.toArray('.gallery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0 , y: 100}, {
			opacity: 1, y: 0,
			scrollTrigger: {
				trigger: item,
				start: '-500',
				end: '-100',
				scrub: true
			}
		})
	})
}