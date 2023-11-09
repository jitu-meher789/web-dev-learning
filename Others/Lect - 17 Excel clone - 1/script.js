let body = document.querySelector("body");
body.spellcheck = false;


let menuBarPTags = document.querySelectorAll(".menu-bar p");
console.log(menuBarPTags);


for(let i = 0; i < menuBarPTags.length; i++){
    menuBarPTags[i].addEventListener("click", (e) => {
        if(e.currentTarget.classList.contains("menu-bar-option-selected")){
            e.currentTarget.classList.remove("menu-bar-option-selected");
        }else{
            for(let j = 0; j < menuBarPTags.length; j++) {
                if(menuBarPTags[j].classList.contains("menu-bar-option-selected")){
                    menuBarPTags[j].classList.remove("menu-bar-option-selected")
                }
            }
            e.currentTarget.classList.add("menu-bar-option-selected");
        }
    })
}