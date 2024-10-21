// load css modules
import buttons from "../styles/button.module.css";
// console.log(buttons);

const $ = document;
const btn = $.createElement("button");
btn.innerText = "btn"
btn.classList.add(buttons.btn);
btn.classList.add(buttons["btn-success"]);

// append to body 
$.body.appendChild(btn)
