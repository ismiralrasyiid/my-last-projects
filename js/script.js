// ASIDE START
const   nav = document.querySelector(".nav"),
        navList = document.querySelectorAll("li"),
        totalNavList = navList.length,
        allSection = document.querySelectorAll(".section"),
        totalSection = allSection.length;
        const   navTogglerBtn = document.querySelector(".nav-toggler"),
                aside = document.querySelector(".aside");
                navTogglerBtn.addEventListener("click", () =>{
                    asideSectionTogglerBtn();
                })
                function asideSectionTogglerBtn(){
                    aside.classList.toggle("open");
                    navTogglerBtn.classList.toggle("open");
                    for(let i=0; i<totalSection; i++){
                        allSection[i].classList.toggle("open");
                    }
                }
// ASIDE END