const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");
let eventLink;
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

//iterate over a collection of elements
links.forEach((link, i) => {
        if(i === 0){
            link.setAttribute("href", "index.html")
        }else if(i === 1) {
            link.setAttribute("href", "./pages/signup.html")
        }else if(i === 2){
            link.setAttribute("href", "#contact")
            eventLink = link
        }
})


//using BOM to open my linkedIn page
eventLink.addEventListener("click",()=>{
    window.open(
        "https://www.linkedin.com/in/patriciamariamrsn/",
        "linkedIn",
        `width=${availW * 0.75}, height=${availH * 0.75}, left=${
            availW * 0.125
          }, top=${availH * 0.125}, resizable=yes, scrollbars=yes, location=yes`
    );
    window.focus();
})


const main = document.createElement("main");
document.body.appendChild(main)
const title = document.createElement("h1")
main.appendChild(title)
title.textContent = "Merry Christmas!";

//modify the text content based on the user interaction
title.addEventListener("click", ()=> {
    if(title.textContent === "Merry Christmas!"){
        title.textContent = "Feliz navidad!"
        title.classList.add("title-spanish")
    }else if(title.textContent === "Feliz navidad!"){
        title.textContent = "Merry Christmas!"
        title.classList.remove("title-spanish")
    }
})

// insert an img
const img = document.createElement("img");
main.appendChild(img);
title.nextElementSibling.setAttribute("src","./images/christmas_pic.jpg");

img.addEventListener("click", () => {
    currentSrc = img.getAttribute("src")
    if(currentSrc === "./images/christmas_pic.jpg"){
        img.setAttribute("src", "./images/noel_pic.jpg")
    }else if(currentSrc === "./images/noel_pic.jpg"){
        img.setAttribute("src", "./images/christmas_pic.jpg")
    }
})