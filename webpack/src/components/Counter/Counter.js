import "./Counter.css";
import "./Counter.scss";
import logo from "./logo.svg"

class Counter {
    render() {
        // create elements
        const $ = document;
        const myLogo = $.createElement("img")
        myLogo.classList.add("img")
        myLogo.src = logo;
        const counterWrapper = $.createElement("div");
        const buttonsWrapper = $.createElement("div");
        buttonsWrapper.classList.add("buttons-wrapper");
        counterWrapper.classList.add("counter-wrapper");

        // increment btn
        const increment = $.createElement("button");
        increment.className = "btn btn-success";
        increment.innerText = "افزایش";
        increment.onclick = this.increment.bind(this);

        // decrement btn
        const decrement = $.createElement("button");
        decrement.className = "btn btn-danger";
        decrement.innerText = "کاهش";
        decrement.onclick = this.decrement.bind(this);

        // counter 
        this.counter = document.createElement("span");
        this.counter.innerText = 0;
        this.counter.className = "text-xl"

        // append
        buttonsWrapper.append(decrement, increment);
        counterWrapper.append(myLogo, this.counter, buttonsWrapper,);
        $.body.appendChild(counterWrapper);
    }

    increment() {
        const prevCount = Number(this.counter.innerText);
        this.counter.innerText = prevCount + 1;
    }
    decrement() {
        const prevCount = Number(this.counter.innerText);
        this.counter.innerText = prevCount - 1;
    }
}

export default Counter;