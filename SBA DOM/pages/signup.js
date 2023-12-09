const navbar = document.getElementById("nav-id");
const links = document.querySelectorAll("a");
let eventLink;
let availH = window.screen.availHeight;
let availW = window.screen.availWidth;

//iterate over a collection of elements
links.forEach((link, i) => {
        if(i === 0){
            link.setAttribute("href", "../index.html")
        }else if(i === 1) {
            link.setAttribute("href", "signup.html")
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

// form validation

const form = document.getElementById("registration");

form.addEventListener("submit", handleSubmit);

function handleSubmit(){
    console.log("pati")
}






