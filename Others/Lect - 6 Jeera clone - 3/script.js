let allFilters = document.querySelectorAll(".filter div");

let grid = document.querySelector(".grid");

let addBtn = document.querySelector(".add");
let modalVisible = false;
let body = document.querySelector("body");

let colors = {
  pink: " #d595aa",
  blue: "#5ecdde",
  green: "#91e6c7",
  black: "black",
};

addBtn.addEventListener("click", function (e) {
  if (modalVisible) return;

  let modal = document.createElement("div");
  modal.setAttribute("first-click", true);
  modal.classList.add("modal-container");

  modal.innerHTML = `<div class="writing-area" contenteditable>Enter Your Task</div>
        <div class="filter-area">
            <div class="modal-filter pink active-modal-filter" ></div>
            <div class="modal-filter blue"></div>  
            <div class="modal-filter green"></div> 
            <div class="modal-filter black"></div> 
        </div>`;

  body.appendChild(modal);
  modalVisible = true;

  let allModalFilters = modal.querySelectorAll(".modal-filter");

  for (let i = 0; i < allModalFilters.length; i++) {
    allModalFilters[i].addEventListener("click", function (e) {
      for (let j = 0; j < allModalFilters.length; j++) {
        allModalFilters[j].classList.remove("active-modal-filter");
      }
      e.currentTarget.classList.add("active-modal-filter");
    });
  }

  let writingArea = modal.querySelector(".writing-area");
  writingArea.addEventListener("click", function (e) {
    if (modal.getAttribute("first-click") == "true") {
      writingArea.innerHTML = "";
      modal.setAttribute("first-click", false);
    }

    writingArea.addEventListener("keypress", function (e) {
      const characters =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let hashTicket = "#";

      for (let i = 1; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        hashTicket += characters[randomIndex];
      }
      if (e.key == "Enter") {
        let task = e.currentTarget.innerText;
        let selectedModalFilter = document.querySelector(
          ".active-modal-filter"
        );
        let color = selectedModalFilter.classList[1];
        let ticket = document.createElement("div");

        ticket.classList.add("ticket");

        ticket.innerHTML = `<div class="ticket-color ${color}"></div>
        <div class="ticket-id">${hashTicket}</div>
        <div class="ticket-box" contenteditable="">${task}</div>`;

        grid.appendChild(ticket);
        modal.remove();
        modalVisible = false;
      }
    });
  });

  //   writingArea.addEventListener("keydown", function(e) {
  //     if(e.key == "Enter"){
  //         e.preventDefault();
  //         let task = e.value;
  //         console.log("task");
  //     }
  //   })
});

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", function (e) {
    let color = e.currentTarget.classList[0].split("-")[0];
    grid.style.backgroundColor = colors[color];
  });
}
