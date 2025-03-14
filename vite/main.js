// load css file vite default load css and dont need css loader
import "./src/styles/main.css";

// load sass file
import "./src/styles/sass/main.scss";

// load js file
// import "./src/js/button";

// load tailwind css
import "./src/styles/tailwind/tailwind.css";

// load fonts
import "./src/styles/vazir.css";

// _!!!! slash in vite always public folder !!!!
import logo from "/vite.svg";
import jsSvgLogo from "/javascript.svg";

// add alpinejs package
import Alpine from "alpinejs";

window.addEventListener("DOMContentLoaded", () => {
  // init alpine
  window.Alpine = Alpine;
  Alpine.start();

  // render (js and vite) svg icons
  const $ = document;
  const viteLogo = $.createElement("img");
  viteLogo.src = logo;

  const jsLogo = $.createElement("img");
  jsLogo.src = jsSvgLogo;

  const logoWrapper = $.createElement("div");
  logoWrapper.className = "flex gap-3 items-center mt-3";

  // append logos in wrapper
  logoWrapper.appendChild(viteLogo);
  logoWrapper.appendChild(jsLogo);

  // append to body
  $.body.appendChild(logoWrapper);

  console.log("[main.js] init...");
});
