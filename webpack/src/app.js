import Alpine from "alpinejs";
import Counter from "./components/Counter/Counter";

// import tailwind css output 
import "./css/style.css"

// run counter
const counter = new Counter();
counter.render();


// run alpine
window.Alpine = Alpine;
Alpine.start();
