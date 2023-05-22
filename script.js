const toggleOpen = () =>{
    const open = document.querySelector("#close")
    const menu = document.querySelector("#menu")
    menu.style.display = "none"
        if (open.classList.contains("open")){
            open.classList.remove("open")
        }
        else{
            open.classList.add("open")
        }
}