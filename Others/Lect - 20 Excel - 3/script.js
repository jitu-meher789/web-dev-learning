let body = document.querySelector("body");
body.spellcheck = false;

let columnTags = document.querySelector(".column-tag");
let rowNumbers = document.querySelector(".row-numbers");

let oldCell;
let formulaSelectCell = document.querySelector("#select-cell");

let grid = document.querySelector(".grid");
let menuBarPTags = document.querySelectorAll(".menu-bar p");
// console.log(menuBarPTags);

// menu bar toggle effect
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

// create 26 number of columns ex-A,B,C,D
for (let i = 0; i < 26; i++) {
  let div = document.createElement("div");
  div.classList.add("column-tag-cell");
  div.innerText = String.fromCharCode(65 + i);
  columnTags.append(div);
}

// create 100 numbers of row
for (let i = 1; i <= 100; i++) {
  let div = document.createElement("div");
  div.classList.add("row-number-cell");
  div.innerText = i;
  rowNumbers.append(div);
}

let dataObject = {};

// create 26 * 100 cells in a grid section
for (let j = 1; j <= 100; j++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 26; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    let address = String.fromCharCode(i + 65) + j;
    cell.setAttribute("data-address", address);

    dataObject[address] = {
      value: "",
      formula: "",
      upstream: [],
      downstream: [],
    };

    cell.addEventListener("click", function (e) {
      if (oldCell) {
        oldCell.classList.remove("grid-selected-cell");
      }
      e.currentTarget.classList.add("grid-selected-cell");

      let cellAddress = e.currentTarget.getAttribute("data-address");

      formulaSelectCell.value = cellAddress;
      oldCell = e.currentTarget;
    });

    cell.addEventListener("input", function (e) {
      console.log(e.currentTarget.innerText);
      let address = e.currentTarget.getAttribute("data-address");

      dataObject[address].value = Number(e.currentTarget.innerText);

      dataObject[address].formula = "";

      // upstream clear karini he (current cell jis cell me dependent he us cell me ja ke unke downsteam me me current cell ko remove karne he)
      let currCellUpstream = dataObject[address].upstream;

      for (let i = 0; i < currCellUpstream.length; i++) {
        removeFromUpstream(address, currCellUpstream[i]);
      }
      dataObject[address].upstream = [];

      // downstream k cells ko update karni hai
      let currCellDownstream = dataObject[address].downstream;
      for (let i = 0; i < currCellDownstream.length; i++) {
        updateDownstreamElements(currCellDownstream[i]);
      }
    });

    cell.contentEditable = true;
    row.appendChild(cell);
  }
  grid.append(row);
}

console.log(dataObject);

function removeFromUpstream(dependant, OnWhichItIsDepending) {
  let newDownStream = [];

  let oldDownStream = dataObject[OnWhichItIsDepending].downstream;

  for (let i = 0; i < oldDownStream.length; i++) {
    if (oldDownStream[i] != dependant) newDownStream.push(oldDownStream[i]);
  }

  dataObject[OnWhichItIsDepending].downstream = newDownStream;
}

function updateDownstreamElements(elementAddress) {
  // 1- jis element ko update kar reh hain unki upstream element ki current value  le aao
  let valObj = {};

  let currCellUpstream = dataObject[elementAddress].upstream;

  for (let i = 0; i < currCellUpstream.length; i++) {
    let upstreamCellAddress = currCellUpstream[i];
    let upstreamCellValue = dataObject[upstreamCellAddress].value;

    valObj[upstreamCellAddress] = upstreamCellValue;
  }

  // 2 - jis element ko update kar reh hein uska formula le aao
  let currFormula = dataObject[elementAddress].formula;

  // formula ko space k basis par split maro
  let formulaArr = currFormula.split(" ");
  // split marne k baad jo array mili uspar loop mara and formula me
  // jo variable hein (cells) nko unki value se repalce  kardo, using valObj

  for (let j = 0; j < formulaArr.length; j++) {
    if (valObj[formulaArr[j]]) {
      formulaArr[j] = valObj[formulaArr[j]];
    }
  }

  // 3 - create karlo wapas formula from the array by joining it
  currFormula = formulaArr.join(" ");

  //4- evaluate the new value usng eval function
  let newValue = eval(currFormula);

  // update the cell(jispar function call hua) in dataObject
  dataObject[elementAddress].value = newValue;

  // 5 - ui par update kardo new value
  let cellOnUi = document.querySelector(`[data-address=${elementAddress}]`);
  cellOnUi.innerText = newValue;

  // 6- downstream leke aao jis elemnt ko update kara just abhi, kyun ki uspar bhu kuch elemnt depennd kar sakte hein
  // unko bhi update karna padega
  let currCellDownstream = dataObject[elementAddress].downstream;
  // check karo ki downstream me elements hai kya, agar han to un sab par yehi function call kardo(recursively)
  // jise wo bhi update ho jaye with new value
  if (currCellDownstream.length > 0) {
    for (let k = 0; k < currCellDownstream.length; k++) {
      updateDownstreamElements(currCellDownstream[k]);
    }
  }
}
