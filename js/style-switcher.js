// TOGGLE STYLE SWITCHER START
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open")
})
// TOGGLE STYLE SWITCHER END
// HIDE STYLE SWITCHER ON SCROLL START
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")
    }
})
// HIDE STYLE SWITCHER ON SCROLL END
// THEME COLORS START
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(colorN){
    alternateStyle.forEach((alternateStyleTitle) =>{
        if(colorN === alternateStyleTitle.getAttribute("title")){
            alternateStyleTitle.removeAttribute("disabled");
        }
        else{
            alternateStyleTitle.setAttribute("disabled","true");
        }
    })
}
// THEME COLORS END
// THEME LIGHT AND DARK START
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})
// THEME LIGHT AND DARK END