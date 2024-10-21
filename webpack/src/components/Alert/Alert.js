import "./Alert.scss";

class Alert {
    render(content, type) {
        const $ = document;
        const body = $.body;
        const alert = $.createElement("div");
        const alertWrapper = $.createElement("div");

        // alert wrapper 
        alertWrapper.classList.add("alert-wrapper");
        alertWrapper.appendChild(alert);

        // alert 
        alert.classList.add("alert");
        alert.classList.add(type);
        alert.innerText = content;

        // append to body 
        body.appendChild(alertWrapper);
    };
    success(content) {
        this.render(content, "success");
    }
    info(content) {
        this.render(content, "info");
    }
    warning(content) {
        this.render(content, "warning");
    }
    danger(content) {
        this.render(content, "danger");
    }
};

export default Alert;