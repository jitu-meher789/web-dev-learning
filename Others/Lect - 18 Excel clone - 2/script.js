let body = document.querySelector("body");
body.spellcheck = false;

let columnTags = document.querySelector(".column-tag");
let rowNumbers = document.querySelector(".row-numbers");

let oldCell;
let formulaSelectCell = document.querySelector("#select-cell");


let grid = document.querySelector(".grid");
let menuBarPTags = document.querySelectorAll(".menu-bar p");
console.log(menuBarPTags);

for (let i = 0; i < menuBarPTags.length; i++) {
  menuBarPTags[i].addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains("menu-bar-option-selected")) {
      e.currentTarget.classList.remove("menu-bar-option-selected");
    } else {
      for (let j = 0; j < menuBarPTags.length; j++) {
        if (menuBarPTags[j].classList.contains("menu-bar-option-selected")) {
          menuBarPTags[j].classList.remove("menu-bar-option-selected");
        }
      }
      e.currentTarget.classList.add("menu-bar-option-selected");
    }
  });
}

for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag-cell");
  div.innerText = String.fromCharCode(65 + i);
  columnTags.append(div);
}

for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-number-cell");
  div.innerText = i;
  rowNumbers.append(div);
}



for (let j = 1; j <= 100; j++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 26; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-address", String.fromCharCode(i + 65)+j);


    cell.addEventListener("click", function(e) { 
        if(oldCell){
            oldCell.classList.remove("grid-selected-cell");
        }
        e.currentTarget.classList.add("grid-selected-cell");

        let cellAddress = e.currentTarget.getAttribute("data-address");

        formulaSelectCell.value = cellAddress;  
        oldCell = e.currentTarget;
    })


    cell.contentEditable = true;
    row.appendChild(cell);
  }
  grid.append(row);
}
