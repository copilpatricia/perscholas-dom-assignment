const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");

//iterate over a collection of elements
links.forEach((link, i) => {
        if(i === 0){
            link.setAttribute("href", "#about")
            console.log(link);
        }else if(i === 1) {
            link.setAttribute("href", "#signup")
            console.log(link);
        }else if(i === 2){
            link.setAttribute("href", "#contact")
            console.log(link);
        }
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
title.nextElementSibling.setAttribute("src","./images/christmas_pic.jpg")
