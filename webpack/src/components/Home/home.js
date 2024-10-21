import "./home.css";
// // import alert component
// import Alert from "../Alert/Alert";

class Home {
    render() {
        console.log("home class render !!!")

        // // create alert 
        // const alert = new Alert()
        // alert.success("test content");
        // alert.info("test content");
        // alert.danger("test content");
        // alert.warning("test content");

        // lazy load
        const body = document.body;
        const btn = document.createElement("button");
        btn.innerText = "load lazy alerts"
        btn.addEventListener("click", () => {
            // load lazy module
            import("../Alert/Alert")
                .then((module) => {
                    console.log("load success", module);
                    const Alert = module.default;
                    const alert = new Alert()
                    alert.success("lazy alerts");
                    alert.info("lazy alerts");
                    alert.danger("lazy alerts");
                    alert.warning("lazy alerts");
                })
        });

        // append btn to dom
        body.appendChild(btn)
    }
}

const home = new Home();
home.render();

export default Home