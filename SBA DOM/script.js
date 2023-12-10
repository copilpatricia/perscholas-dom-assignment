const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");
let eventLink;
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

//iterate over a collection of elements
links.forEach((link, i) => {
  if (i === 0) {
    link.setAttribute("href", "index.html");
  } else if (i === 1) {
    link.setAttribute("href", "./pages/signup.html");
  } else if (i === 2) {
    link.setAttribute("href", "#contact");
    eventLink = link;
  }
});

//using BOM to open my linkedIn page
eventLink.addEventListener("click", () => {
  window.open(
    "https://www.linkedin.com/in/patriciamariamrsn/",
    "linkedIn",
    `width=${availW * 0.75}, height=${availH * 0.75}, left=${
      availW * 0.125
    }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
  );
  window.focus();
});

const main = document.createElement("main");
document.body.appendChild(main);
const title = document.createElement("h1");
main.appendChild(title);
title.textContent = "Merry Christmas!";

//modify the text content based on the user interaction
title.addEventListener("click", () => {
  if (title.textContent === "Merry Christmas!") {
    title.textContent = "Crăciun fericit!";
    title.classList.add("title-romanian");
  } else if (title.textContent === "Crăciun fericit!") {
    title.textContent = "Merry Christmas!";
    title.classList.remove("title-romanian");
  }
});

// insert an img
const img = document.createElement("img");
main.appendChild(img);
title.nextElementSibling.setAttribute("src", "./images/christmas_pic.jpg");

img.addEventListener("click", () => {
  currentSrc = img.getAttribute("src");
  if (currentSrc === "./images/christmas_pic.jpg") {
    img.setAttribute("src", "./images/noel_pic.jpg");
  } else if (currentSrc === "./images/noel_pic.jpg") {
    img.setAttribute("src", "./images/christmas_pic.jpg");
  }
});

const h3 = document.createElement("h3");
main.appendChild(h3);
h3.textContent = "Some jokes to put a smile on your face :)";

const jokes = [
    "Where does Santa stay on vacation? At a ho-ho-hotel.",
    "How does Santa take pictures? With his Pole-aroid camera.",
    "What is Santa's dog's name? Santa Paws.",
    "Why wouldn't you want to get into a fight with Santa? He has a black belt."

]


for (let i = 0; i < jokes.length; i++) {
  const p = document.createElement("p");
  main.appendChild(p);
  p.textContent = jokes[i];
}
