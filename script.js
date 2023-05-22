const profileBorder = () => {
    let profile = document.querySelector(".profile");
    let popUp2 = document.querySelector(".pop-up2");
    let popUp1 = document.querySelector(".pop-up1");
    popUp2.classList.toggle("block");
    popUp1.classList.toggle("block");
}

// increment and decriment fucntion
const decrement = () => {
    let popUp1 = document.querySelector(".pop-up1")
    let value = document.querySelector(".value")
    let valueNumber = document.querySelector(".valueNumber")
    let amount = document.querySelector(".amount")
    let counter = parseInt(value.textContent);
    if (counter > 0){
        counter = counter - 1;
        value.textContent = counter;
        popUp1.textContent = counter
        valueNumber.textContent = counter
        amount.textContent = "$" + counter * 125.00
    }
    else{
        value.textContent = 0;
        popUp1.textContent = 0; 
    }
}

const increment = () => {
    let popUp1 = document.querySelector(".pop-up1")
    let value = document.querySelector(".value")
    let Menu = document.querySelector(".amount-sec")
    let valueNumber = document.querySelector(".valueNumber")
    let amount = document.querySelector(".amount")
    let counter = parseFloat(value.textContent)
    Menu.classList.toggle("block");
    counter = counter + 1;
    value.textContent = counter;
    popUp1.textContent = counter
    valueNumber.textContent = counter 
    amount.textContent = "$" + counter * 125.00
}

// cleaning the pop up
const clean = () => {
    let Menu = document.querySelector(".amount-sec")
    let check1 = document.querySelector(".checkout");
    Menu.style.display = "none"
}