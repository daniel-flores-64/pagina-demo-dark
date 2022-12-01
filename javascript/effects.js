window.onscroll = function() {navbarActiveState()};

function navbarActiveState() {
  var i = 0;
  let navElems = document.getElementsByClassName("nav-item");
  while(i+1 <= navElems.length){
    navElems[i].classList.remove("active");
    i++;
  }
  if (document.documentElement.scrollTop >= 3020) {
    var activeElement = navElems[6];
      activeElement.classList.add("active");
  } else if (document.documentElement.scrollTop >= 2420) {
    var activeElement = navElems[5];
      activeElement.classList.add("active");
  } else if (document.documentElement.scrollTop >= 1880) {
    var activeElement = navElems[4];
      activeElement.classList.add("active");
  } else if (document.documentElement.scrollTop >= 1100) {
    var activeElement = navElems[3];
      activeElement.classList.add("active");
  } else if (document.documentElement.scrollTop >= 750) {
    var activeElement = navElems[2];
      activeElement.classList.add("active");
  } else if (document.documentElement.scrollTop >= 0) {
    var activeElement = navElems[1];
      activeElement.classList.add("active");
  }
}
const el = document.getElementsByClassName("cont");
addEventListener("click", navbarActiveState);

const textArray = ["I am Jose Smith"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!document.querySelector(".cursor").classList.contains("typing"))
      document.querySelector(".cursor").classList.add("typing");
    document.querySelector("#target").textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    document.querySelector(".cursor").classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!document.querySelector(".cursor").classList.contains("typing"))
      document.querySelector(".cursor").classList.add("typing");
    document.querySelector("#target").textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    document.querySelector(".cursor").classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) 
      textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*let elementsArray = document.querySelectorAll(".fade-in");
console.log(elementsArray);*/
window.addEventListener("scroll", fadeIn); 
function fadeIn() {
    for (var i = 0; i < document.querySelectorAll(".fade-in").length; i++) {
        var elem = document.querySelectorAll(".fade-in")[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
            elem.classList.add("inView");
        } else {
            elem.classList.remove("inView");
        }
    }
}
fadeIn();

/*const faders = document.querySelectorAll(".fade-in");
console.log(document.querySelectorAll(".fade-in"));
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

document.querySelectorAll(".fade-in").forEach(fader => {
  appearOnScroll.observe(fader);
});*/