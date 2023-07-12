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




/*********** DRESS UP */
let state = {
  dress: 0,
  hair: 0,
  hat: 0,
  shoes: 0,
  accessory: 0,
  face: 0,
};
nextdress();
nexthair();
nextface();

function nextdress() {
  let dress = document.querySelector("#dress");
  if (state.dress < 7) {
    state.dress++;
    dress.setAttribute("class", `dress${state.dress}`);
  } else if (state.dress === 7) {
    state.dress = 0;
    dress.setAttribute("class", `dress${state.dress}`);
  }
}



/*************SCROLL BAR TABS */
const tabs = document.querySelectorAll(".scrollable-tabs-container a");
const rightArrow = document.querySelector(
  ".scrollable-tabs-container .right-arrow svg"
);
const leftArrow = document.querySelector(
  ".scrollable-tabs-container .left-arrow svg"
);
const tabsList = document.querySelector(".scrollable-tabs-container ul");
const leftArrowContainer = document.querySelector(
  ".scrollable-tabs-container .left-arrow"
);
const rightArrowContainer = document.querySelector(
  ".scrollable-tabs-container .right-arrow"
);

const removeAllActiveClasses = () => {
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    removeAllActiveClasses();
    tab.classList.add("active");
  });
});

const manageIcons = () => {
  if (tabsList.scrollLeft >= 20) {
    leftArrowContainer.classList.add("active");
  } else {
    leftArrowContainer.classList.remove("active");
  }

  let maxScrollValue = tabsList.scrollWidth - tabsList.clientWidth - 20;
  console.log("scroll width: ", tabsList.scrollWidth);
  console.log("client width: ", tabsList.clientWidth);

  if (tabsList.scrollLeft >= maxScrollValue) {
    rightArrowContainer.classList.remove("active");
  } else {
    rightArrowContainer.classList.add("active");
  }
};

rightArrow.addEventListener("click", () => {
  tabsList.scrollLeft += 200;
  manageIcons();
});

leftArrow.addEventListener("click", () => {
  tabsList.scrollLeft -= 200;
  manageIcons();
});

tabsList.addEventListener("scroll", manageIcons);

let dragging = false;

const drag = (e) => {
  if (!dragging) return;
  tabsList.classList.add("dragging");
  tabsList.scrollLeft -= e.movementX;
};

tabsList.addEventListener("mousedown", () => {
  dragging = true;
});

tabsList.addEventListener("mousemove", drag);

document.addEventListener("mouseup", () => {
  dragging = false;
  tabsList.classList.remove("dragging");
});