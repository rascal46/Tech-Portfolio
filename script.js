// MOBILE NAVBAR

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML=
`<i class="fa-solid fa-xmark"></i>`;

}
else{

menuBtn.innerHTML=
`<i class="fa-solid fa-bars"></i>`;

}

});




// SMOOTH ACTIVE LINK

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=
section.offsetTop;

if(
pageYOffset>=sectionTop-200
){

current=
section.getAttribute("id");

}

});

navItems.forEach(link=>{

link.classList.remove("current");

if(
link.getAttribute("href")==="#"+current
){

link.classList.add("current");

}

});

});




// FADE-IN ANIMATION

const observer=
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:.15
}

);


const hiddenElements=
document.querySelectorAll(
".project-card,.skill-card,.about-card,.timeline-card,.contact-card,.glass-card"
);

hiddenElements.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});




// PARALLAX BACKGROUND EFFECT

const background=
document.querySelector(
".background-blur"
);

document.addEventListener(
"mousemove",
(e)=>{

let x=
(e.clientX/window.innerWidth)
*20;

let y=
(e.clientY/window.innerHeight)
*20;

background.style.transform=
`translate(${x}px,${y}px)`;

});




// TYPING EFFECT

const text=
[
"Embedded Systems",
"AI / ML",
"IoT",
"Robotics"
];

let count=0;
let index=0;
let currentText="";
let letter="";

(function type(){

if(count===text.length){

count=0;

}

currentText=
text[count];

letter=
currentText.slice(
0,
++index
);

document.querySelector(
".hero h2"
).textContent=
letter;

if(
letter.length===
currentText.length
){

count++;

index=0;

setTimeout(
type,
1500
);

}
else{

setTimeout(
type,
100
);

}

})();




// SCROLL TO TOP BUTTON

const scrollBtn=
document.createElement(
"button"
);

scrollBtn.innerHTML=
`↑`;

scrollBtn.classList.add(
"scroll-top"
);

document.body.appendChild(
scrollBtn
);

window.addEventListener(
"scroll",
()=>{

if(window.scrollY>500){

scrollBtn.style.opacity=1;

}
else{

scrollBtn.style.opacity=0;

}

});

scrollBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});




// FLOATING PARTICLES

const hero=
document.querySelector(
".hero"
);

for(let i=0;i<25;i++){

let particle=
document.createElement(
"span"
);

particle.classList.add(
"particle"
);

particle.style.left=
Math.random()*100+"%";

particle.style.top=
Math.random()*100+"%";

particle.style.animationDuration=
(4+Math.random()*6)
+"s";

particle.style.opacity=
Math.random();

hero.appendChild(
particle
);

}

document.getElementById("copyEmail")
.addEventListener("click", function(e){

e.preventDefault();

navigator.clipboard.writeText(
"sutirtho17@gmail.com"
);

alert("Email copied to clipboard!");

});