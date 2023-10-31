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
let colorClass = ["pink", "blue", "green", "black"];
let deleteState = false;
let deleteBtn = document.querySelector(".delete");

if (!localStorage.getItem("tasks")) {
  localStorage.setItem("tasks", JSON.stringify([]));
}

// delete the ticket
deleteBtn.addEventListener("click", function (e) {
  if (deleteState) {
    deleteState = false;
    e.currentTarget.classList.remove("delete-state");
  } else {
    deleteState = true;
    e.currentTarget.classList.add("delete-state");
  }
});

// add modal
addBtn.addEventListener("click", function (e) {
  if (modalVisible) return;

  if (deleteBtn.classList.contains("delete-state")) {
    deleteState = false;
    deleteBtn.classList.remove("delete-state");
  }

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
      let id = "";

      for (let i = 1; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
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
        <div class="ticket-id">#${id}</div>
        <div class="ticket-box" contenteditable="">${task}</div>`;

        saveTicketInLocalStorage(id, color, task);

        let ticketWritingArea = ticket.querySelector(".ticket-box");

        ticketWritingArea.addEventListener("input", writingAreaHandler);

        // delete ticket handler
        ticket.addEventListener("click", function (e) {
          if (deleteState) {
            let id = e.currentTarget
              .querySelector(".ticket-id")
              .innerText.split("#")[1];

            let taskArr = JSON.parse(localStorage.getItem("tasks"));

            taskArr = taskArr.filter(function (el) {
              return el.id != id;
            });

            localStorage.setItem("tasks", JSON.stringify(taskArr));

            e.currentTarget.remove();
          }
        });

        let ticketColorDiv = ticket.querySelector(".ticket-color");
        ticketColorDiv.addEventListener("click", ticketColorsHandler);

        grid.appendChild(ticket);
        modal.remove();
        modalVisible = false;
      }
    });
  });
});

for (let i = 0; i < allFilters.length; i++) {
  allFilters[i].addEventListener("click", function (e) {
    if(e.currentTarget.parentElement.classList.contains("selected-filter")) {
      e.currentTarget.parentElement.classList.remove("selected-filter");
      loadTasks();
    }else{
      let color = e.currentTarget.classList[0].split("-")[0];
      e.currentTarget.parentElement.classList.add("selected-filter");
      loadTasks(color);
    }
  });
}

// save ticket in local storage
function saveTicketInLocalStorage(id, color, task) {
  let requireObj = { id, color, task };
  let taskArr = JSON.parse(localStorage.getItem("tasks"));

  taskArr.push(requireObj);
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

// load all ticket from local storage
function loadTasks(passedColor) {

  let allTickets = document.querySelectorAll(".ticket");
  for(let t = 0 ; t < allTickets.length; t++) allTickets[t].remove();



  let tasks = JSON.parse(localStorage.getItem("tasks"));

  for (let i = 0; i < tasks.length; i++) {
    let id = tasks[i].id;
    let color = tasks[i].color;
    let taskValue = tasks[i].task;

    if(passedColor) {
      if(passedColor != color) continue;
    }

    let ticket = document.createElement("div");
    ticket.classList.add("ticket");
    ticket.innerHTML = `<div class="ticket-color ${color}"></div>
                        <div class="ticket-id">#${id}</div>
                        <div class="ticket-box" contenteditable="">${taskValue}</div>`;

    
    
    let ticketWritingArea = ticket.querySelector(".ticket-box");
    ticketWritingArea.addEventListener("input", writingAreaHandler);



    let ticketColorDiv = ticket.querySelector(".ticket-color");
    ticketColorDiv.addEventListener("click", ticketColorsHandler);



    ticket.addEventListener("click", function (e) {
      if (deleteState) {
        let id = e.currentTarget
          .querySelector(".ticket-id")
          .innerText.split("#")[1];

        let taskArr = JSON.parse(localStorage.getItem("tasks"));

        taskArr = taskArr.filter(function (el) {
          return el.id != id;
        });

        localStorage.setItem("tasks", JSON.stringify(taskArr));

        e.currentTarget.remove();
      }
    });

     grid.appendChild(ticket);
  }
}

// ticket color handler
function ticketColorsHandler(e) {
  let id = e.currentTarget.parentElement
    .querySelector(".ticket-id")
    .innerText.split("#")[1];

  let taskArr = JSON.parse(localStorage.getItem("tasks"));
  let reqIdx = -1;

  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].id == id) {
      reqIdx = i;
      break;
    }
  }

  let currColor = e.currentTarget.classList[1];
  let index = colorClass.indexOf(currColor);
  index++;
  index = index % 4;
  e.currentTarget.classList.remove(currColor);
  e.currentTarget.classList.add(colorClass[index]);

  taskArr[reqIdx].color = colorClass[index];
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}

// writing area handler
function writingAreaHandler(e) {
  let id = e.currentTarget.parentElement
    .querySelector(".ticket-id")
    .innerText.split("#")[1];
  // console.log(id);
  let taskArr = JSON.parse(localStorage.getItem("tasks"));
  let reqIdx = -1;

  for (let i = 0; i < taskArr.length; i++) {
    if (taskArr[i].id == id) {
      reqIdx = i;
      break;
    }
  }
  taskArr[reqIdx].task = e.currentTarget.innerText;
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}


loadTasks();