let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let container = document.querySelector(".container");
let items = container.querySelectorAll(".list .item");
let indicator = document.querySelector(".indicator");
let dots = document.querySelectorAll(".indicators ul li");
let list = container.querySelector(".list");

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;
let number = document.querySelector(".number");


nextButton.onclick = () => {
  list.style.setProperty('--calculation', 1)
  
  active = verifyActiveLength(active);
  
  setSlider();
  
  changeNumber(number);
};

prevButton.onclick = () => {
  list.style.setProperty('--calculation', -1)

  active = verifyActiveLength(active, true);

  setSlider();

  changeNumber(number);
};
function setSlider() {
  let itemOld = container.querySelector(".list .item.active");
  let dotsOld = document.querySelector(".indicators ul li.active");
  removeAtiveItemOld(itemOld);
  addActiveItemInItems(items[active]);
  verifyExistDotsOlds(dotsOld);
  verifyActiveInDots(dots[active]);
}
function verifyActiveLength(active, isPrevButton) {
  if (isPrevButton) {
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    return active;
  } else {
    active = active + 1 > lastPosition ? 0 : active + 1;
    return active;
  }
}

function removeAtiveItemOld(item) {
  if (item.classList.contains("active")) {
    item.classList.remove("active");
  }
}

function addActiveItemInItems(activeOnItem) {
  activeOnItem.classList.add("active");
}

function verifyExistDotsOlds(dotsOld) {
  if (dotsOld !== undefined) {
    dotsOld.classList.remove("active");
  }
}

function verifyActiveInDots(activeOnDots) {
  if (activeOnDots !== undefined) {
    activeOnDots.classList.add("active");
  }
}

function changeNumber(number) {
  number.innerHTML = "0" + (active + 1);
}
