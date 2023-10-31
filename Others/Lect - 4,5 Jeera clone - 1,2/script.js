

let allFilters = document.querySelectorAll(".filter div");

let grid = document.querySelector(".grid");

let addTicket = document.querySelector(".add");
let modalContainer = document.querySelector(".modal-container");

let colors = {
    pink: " #d595aa",
    blue: "#5ecdde",
    green: "#91e6c7",
    black: "black"
};

addTicket.addEventListener("click", function(e) {
    modalContainer.style.display = "flex";
})

for(let i = 0; i < allFilters.length; i++) {
    allFilters[i].addEventListener("click", function(e) {
        let color = e.currentTarget.classList[0].split("-")[0];
        grid.style.backgroundColor = colors[color];
    })
}
