let button = document.querySelector("submit");
let email = document.querySelector("#email");
let err = document.querySelector("#error")
let userEmail = email.value;
let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
button.addEventListener("mouseenter", () => {
    button.style.filter = "drop-shadow(0 7px 10px var(--desatRed))";
    button.style.background = "url('design/images/icon-arrow.svg'),linear-gradient(135deg, rgb(248, 191, 191),hsl(0,80%,86%)";
    button.style.backgroundRepeat = "no-repeat";

    button.style.backgroundPosition = "center";
})

button.addEventListener("mouseleave", () => {
    button.style = "none";
})

function validateEmail(email)  {

    if (email.value.match(mailFormat)) {
        err.style="none";
        return true;
    }
    else {
        err.style.visibility = "visible"
        email.style.border="solid 1pt var(--softRed)"

        return false;
    }
}



