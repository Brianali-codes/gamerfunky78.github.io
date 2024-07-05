// main section calls
let navbar = document.getElementById("Navbar")
let home = document.getElementById("Home")
let about = document.getElementById("About")
let projects = document.getElementById("Projects")
let services = document.getElementById("Services")
let contacts = document.getElementById("Contacts")
let texter = document.getElementById("interchanger")
let navBAR = document.getElementById("open-menu")
//


//button calls
let Button1 = document.getElementById("button1")
let Button2 = document.getElementById("button2")
let Button3 = document.getElementById("button3")
let Button4 = document.getElementById("button4")
let Button5 = document.getElementById("button5")
//


//event handlers
home.onmouseenter= reverseBg;
about.onmouseenter = changeBg;
projects.onmouseenter = reverseBg;
services.onmouseenter = changeBg;
//

//functions
function changeBg(){
    let about = document.getElementById("About")
    let navbar = document.getElementById("Navbar")
    let Button1 = document.getElementById("button1")
    about.style.animation = "change-bg ease-in 0.5s"
    services.style.animation = "change-bg ease-out 0.2s"
    about.style.backgroundColor = "white"
    services.style.backgroundColor = "white"
    let projects = document.getElementById("Projects")
    projects.style.backgroundColor = "black"
    Button1.style.color = "black"
    Button2.style.color = "black"
    Button3.style.color = "black"
    Button4.style.color = "black"
    Button5.style.color = "black"

}
function reverseBg(){
    let home = document.getElementById("Home")
    let navbar = document.getElementById("Navbar")
    home.style.animation = "reverse-bg ease-in 0.5s"
    navbar.style.animation = "reverse-bg ease-out 0.2s"
    home.style.backgroundColor = "black"
    contacts.style.animation = "reverse-bg ease-in 0.5s"
    contacts.style.backgroundColor = "black"
    Button1.style.color = "white"
    Button2.style.color = "white"
    Button3.style.color = "white"
    Button4.style.color = "white"
    Button5.style.color = "white"
}
function textloop(){
    let texts = ["UI/UX designer","Freelance Dev","Web Developer",]
    let texter = document.getElementById("interchanger")
    texter.style.animation = "changeText 2s "
    
    setInterval(() => {
        let i = Math.floor(Math.random() * texts.length)
        texter.textContent = texts[i]
    }, 3000);
    
}
function webAnim(){
    let head = document.getElementById("heading")
    let head2 = document.getElementById("heading2")
    let body = document.getElementById("home-info")
    let body2 = document.getElementById("home-info2")
    let changer = document.getElementById("interchange")

    head.style.animation = "slide-in-left 1s ease-in"
    body.style.animation = "slide-in-bottom 1s ease-in "
    body2.style.animation = "slide-in-bottom 1s ease-in "
    changer.style.animation = "slide-in-left 1s ease-in "
    head2.style.animation = "slide-in-left2 1s ease-in "
    
}


function toggleNavbar(){
    let navBAR = document.getElementById("open-menu")

    if(navBAR.style.display === "none"|| navBAR.style.display === "" ){
        navBAR.style.display = "flex"
        navBAR.style.animation = "slide-in-left ease-in 0.4s"
    }
    else{
        navBAR.style.display = "none"
        navBAR.style.animation = "slide-in-left ease-in 0.2s"
    }
}



document.addEventListener("DOMContentLoaded", textloop);
document.addEventListener("DOMContentLoaded", webAnim);




