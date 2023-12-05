var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

// Menu data structure

// Part 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;
mainEl.classList.add("flex-ctr");

// Part 2
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Part 3
for (let i = 0; i < menuLinks.length; i++) {
  const aTag = document.createElement("a");
  aTag.setAttribute("href", menuLinks[i].href);
  aTag.innerHTML = menuLinks[i].text;
  topMenuEl.appendChild(aTag);
  // console.log(aTag);
}

// Part two of the R-ALAB 316.3.1: DOM Manipulation (Part Two)

//Part 3: Creating the Submenu
let subMenuEl = document.querySelector("#sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Part 4: Adding Menu Interaction
const topMenuLinks = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();

  if (event.target.tagName !== "A") {
    return;
  }

  if (event.target.classList.contains("active")) {
    // if the clicked link is already active, remove the "active" class
    event.target.classList.remove("active");
    subMenuEl.style.top = "0";
  } else {
    // if the clicked link is not active, add the "active" class
    event.target.classList.add("active");
  }

  // remove the "active" class from other links, if current link in the loop is not the clicked link
  topMenuLinks.forEach((link) => {
    if (link !== event.target) {
      link.classList.remove("active");
    }
  });

  let subLinks = [];
  for (let i = 0; i < menuLinks.length; i++) {
    if (
      menuLinks[i].text === event.target.textContent &&
      menuLinks[i].hasOwnProperty("subLinks")
    ) {
      subLinks = subLinks.concat(menuLinks[i].subLinks);
    } else {
      subMenuEl.style.top = "0";
    }
    subMenuEl.style.top = "100%";
  }
  console.log(subLinks);

  function buildSubmenu(arr) {
    subMenuEl.innerHTML = "";
    arr.forEach((ar) => {
      const subATag = document.createElement("a");
      console.log(subATag);
      subATag.setAttribute("href", ar.href);
      console.log(subATag);
      subATag.textContent = ar.text;
      subMenuEl.appendChild(subATag);
    });
  }
  buildSubmenu(subLinks);
}

topMenuEl.addEventListener("click", handleClick);

subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.tagName);
  subMenuEl.style.top = "0";
  topMenuLinks.forEach((link) => link.classList.remove("active"));
  mainEl.innerHTML = `<h1>${event.target.innerText.toUpperCase()}</h1>`;

})

