console.log("running script");

// const app = document.getElementById("app");

//to see the properties of the element - .dir
// console.dir(app);

// console.log(app);

//queries the first p tag
//always returns the first elem that he finds
// const pElem = document.querySelector("p");
// console.log(pElem.textContent); // textContent to see the content inside the tag

// queries the anchor with id of contact
// const anchorContact = document.querySelector('#contact');
// console.log(anchorContact);

//  queries a p tag with class third-p
// return the first element who has the class (now I added the class for ohter elements, this is why the div is first)
// const thirdP = document.querySelector(".third-p");
// console.log(thirdP);

// queries the elements that has the same class third-p
// const thirdPEl = document.querySelectorAll(".third-p");
// console.log(thirdPEl);
//  => will receive a NodeList of 4 elements and we can access elements using arrays, they are similar to arrays
// console.log(thirdPEl[1]);

// const codeEl = document.querySelector("code");
// console.log(codeEl);

// const app = document.querySelector("#app");
// console.log(app.parentNode); // parentNode - gives the parent of the element we selected

// const firstSelect = document.querySelector("input[type=checkbox]");
// console.log(firstSelect);

// const secondDiv = document.querySelectorAll("div")[1];
// console.log(secondDiv.nextElementSibling);

//parentNode - gives the parent of the element we selected
//previousElementSibling - fratele lui div[1] care e inainte lui
//nextElementSibling - fratele lui div[1] care e dupa el
//childNodes - copiii lui section - text(count the white space), ul , text (all types of nodes)
//children - only the ul, without the text (only html elements! - ul tag)
//firstElementChild - gives the ul and the ul childs - li

// const section = document.querySelector("section");
// console.log(section.firstElementChild);
// const ul = section.firstElementChild;
// console.log(ul.firstElementChild.nextElementSibling);

// const lis = document.getElementsByTagName("li");
// console.log(lis);

// lis[0].remove();
// console.log(lis);

// getElementsByTagName - returns a HTML Collection - we can see the updates
//querrySelectorAll - returns a NodeList - we can't see the updates

// how to create an array from a HTMLCollection
// const myHTMLArray = Array.from(lis);
// console.log(myHTMLArray);

// const UL = document.querySelector("ul");
// console.log(UL.lastElementChild);

// const firstLi = document.querySelector("#first");
// console.log(firstLi.nextElementSibling.nextElementSibling);

//appendChild - the element is appended as a child of another element
// div.appendChild("p")

//.textContent = insert text / console.log(div.textContent)= see the text

// app
//    .appendChild(document.createElement("div"))
//    .appendChild(document.createElement("ul"))
//    .appendChild(document.createElement("li")). textContent = "Nested strctures!"

//prepand - adds a node to the beginning of a list of children of a specific parent node
//is a method of the Element object, not Node

//insertBefore - adds a node before another node in a list of children of a specified parent node

//commentList.insertBefore(listItem,commentList.firstChild);

// const bodyEl = document.querySelector("body");
// I used document.body, whitout selecting and creating another constant for the body tag

const div1 = document.createElement("div");
console.log(div1);
const div2 = document.createElement("div");
console.log(div2);

const ol = document.createElement("ol");
console.log(ol);
const ul = document.createElement("ul");
console.log(ul);

for (let i = 0; i < 3; i++) {
  ol.appendChild(document.createElement("li"));
}

for (let i = 0; i < 3; i++) {
  ul.appendChild(document.createElement("li"));
}

div1.appendChild(ol)
div2.appendChild(ul)


document.body.appendChild(div1)
document.body.appendChild(div2);
console.log(document.body);
// need to continue the exercise

const p = document.createElement("p")
console.log(p);

document.body.appendChild(p)
p.innerHTML = "<h1>mama are mere</h1>"

