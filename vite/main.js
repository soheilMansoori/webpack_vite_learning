// load css file vite default load css and dont need css loader
import "./src/styles/main.css";

// load sass file 
import "./src/styles/sass/main.scss";

// load js file
import "./src/js/button";

// load tailwind css
import "./src/styles/tailwind/tailwind.css";

// load fonts 
import "./src/styles/vazir.css"

// !!!! slash in vite always public folder !!!!
import logo from "/vite.svg";

const $ = document;
const img = $.createElement("img");
img.className = "my-5"
img.src = logo;

// append to body
$.body.appendChild(img)

console.log("[main.js] init...");

