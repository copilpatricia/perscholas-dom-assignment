const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");
let eventLink;
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

//iterate over a collection of elements
links.forEach((link, i) => {
        if(i === 0){
            link.setAttribute("href", "../index.html")
            console.log(link);
        }else if(i === 1) {
            link.setAttribute("href", "signup.html")
            console.log(link);
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


