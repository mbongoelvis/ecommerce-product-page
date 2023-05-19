const profileBorder = () => {
    let profile = document.querySelector(".profile");
    let popUp2 = document.querySelector(".pop-up2");
    let popUp1 = document.querySelector(".pop-up1");
    profile.classList.toggle("profile-circle");
    popUp2.classList.toggle("block");
    popUp1.classList.toggle("block");
}

// increment and decriment fucntion
const decrement = () => {
    let value = document.querySelector(".value")
    let counter = parseInt(value.textContent);
    counter = counter - 1;
    value.textContent = counter;
}

const increment = () => {
    let value = document.querySelector(".value")
    let counter = parseFloat(value.textContent)
    counter = counter + 1;
    value.textContent = counter;
}