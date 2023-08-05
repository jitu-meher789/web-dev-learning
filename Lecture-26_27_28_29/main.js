// default height width is smaller
// let canvasBoard = document.querySelector("canvas");
// let body = document.querySelector("body");
// canvasBoard.height = window.innerHeight;
// canvasBoard.width = window.innerWidth;

// this line gives you the tool to draw on that canvas
// let tool = canvasBoard.getContext("2d");

// // rectangle build
// tool.fillStyle="green";

// // x, y , widht, height
// tool.fillRect(0,0,200,200);

// // boundary draw
// tool.strokeStyle="red";
// tool.strokeRect(50,50,200,200);
// tool.fillStyle="blue";
// tool.fillRect(40,40,100,100);

// ---------------------------------------------------------------------

// let canvasBoard = document.querySelector("canvas");
// let body = document.querySelector("body");
// let rectTool = document.querySelector(".fa-square");
// let lineTool = document.querySelector(".fa-grip-lines-vertical");
// let pencilTool = document.querySelector(".fa-pencil");
// let currTool = "rectTool";
// let tool = canvasBoard.getContext("2d");

// let redColor = document.querySelector(".red");
// let greenColor = document.querySelector(".green");
// let blueColor = document.querySelector(".blue");
// canvasBoard.height = window.innerHeight;
// canvasBoard.width = window.innerWidth;
// let drawingMode = false;
// let iX, iY, fX, fY;
// tool.lineWidth = 25;

// // tool change logic
// rectTool.addEventListener("click", function () {
//   currTool = "rectTool";
//   drawingMode = false;

// });

// lineTool.addEventListener("click", function () {
//   currTool = "lineTool";
//   drawingMode = false;
// });

// pencilTool.addEventListener("click", function () {
//   currTool = "pencilTool";
// });

// let boardTop = canvasBoard.getBoundingClientRect().top;
// console.log(canvasBoard.getBoundingClientRect());

// // press on the body
// body.addEventListener("mousedown", function (e) {
//   iX = e.clientX;
//   iY = e.clientY - boardTop;
// });

// body.addEventListener("mouseup", function (e) {
//   fX = e.clientX;
//   fY = e.clientY - boardTop;

//   let width = fX - iX;
//   let height = fY - iY;
//   if (currTool == "rectTool") {
//     tool.strokeRect(iX, iY, width, height);
//   }else if (currTool == "pencilTool") {

//     drawingMode = false;
//     body.addEventListener("mousedown", function (e) {
//       drawingMode = true;
//       tool.beginPath();
//       tool.moveTo(e.clientX, e.clientY - boardTop);
//     });

//     body.addEventListener("mouseup", function (e) {
//       drawingMode = false;
//     });

//     body.addEventListener("mousemove", function(e) {
//     if(drawingMode == false)
//         return;
//     fX = e.clientX;
//     fY = e.clientY - boardTop;

//     tool.lineTo(fX,fY);
//     tool.stroke();x
//     iX = fX;
//     iY = fY;
// })
//   } else {
//     tool.beginPath();
//     tool.moveTo(iX, iY);
//     tool.lineTo(fX, fY);
//     tool.stroke();
//     console.log("Pencil tool is pending");
//   }

// });

// redColor.addEventListener("click", function () {
//   tool.strokeStyle = "red";
// });
// greenColor.addEventListener("click", function () {
//   tool.strokeStyle = "green";
// });
// blueColor.addEventListener("click", function () {
//   tool.strokeStyle = "blue";
// });

// --------------------------------------------------------------------------
// canvas variables
let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");

canvasBoard.width = window.innerWidth;
canvasBoard.height = window.innerHeight;
tool.strokeStyle = "red";

let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
console.log();

// tool variables
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rect = document.querySelector("#rect");
let line = document.querySelector("#line");
let option = document.querySelectorAll(".size-box");
let cTool = "pencil";

// axis vairable
let iX, iY, fX, fY;
let drawingMode = false;

// color variables
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");

// size variables
let pencilSize = 5;
let eraserSize = 5;
let rectSize = 5;
let lineSize = 5;
//--------------------------------------------------------------------------

// ---------------------tool change section  -----------------------------------
// identify  -> click  -> again click
pencil.addEventListener("click", function () {
  if (cTool == "pencil") {
    // second click
    // options show
    option[0].style.display = "flex";
    body.style.cursor = "crosshair";
  } else {
    // eraser.style.border = "1px solid red";
    cTool = "pencil";
    tool.strokeStyle = "red";
    body.style.cursor = "crosshair";
    for (let i = 0; i < option.length; i++) {
      option[i].style.display = "none";
    }
  }
});

eraser.addEventListener("click", function () {
  if (cTool == "eraser") {
    // second click
    // options show
    tool.strokeStyle = "white";
    option[1].style.display = "flex";
  } else {
    // eraser.style.border = "1px solid red";
    cTool = "eraser";
    tool.strokeStyle = "white";
    for (let i = 0; i < option.length; i++) {
      option[i].style.display = "none";
    }
  }
});

rect.addEventListener("click", function () {
  if (cTool == "rect") {
    // second click
    // options show
    option[2].style.display = "flex";
  } else {
    // eraser.style.border = "1px solid red";
    cTool = "rect";
    tool.strokeStyle = "red";
    for (let i = 0; i < option.length; i++) {
      option[i].style.display = "none";
    }
  }
});
line.addEventListener("click", function () {
  if (cTool == "line") {
    // second click
    // options show
    option[3].style.display = "flex";
  } else {
    // eraser.style.border = "1px solid red";
    cTool = "line";
    tool.strokeStyle = "red";
    for (let i = 0; i < option.length; i++) {
      option[i].style.display = "none";
    }
  }
});
// ----------------------------------------------------------

// ---------------- pencil, rect, line tool   --------------------------------------------
body.addEventListener("mousedown", function (e) {
  iX = e.clientX - boardLeft;
  iY = e.clientY - boardTop;
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = true;
    tool.beginPath();
    tool.moveTo(iX, iY);
  }
});

body.addEventListener("mouseup", function (e) {
  if (cTool == "pencil" || cTool == "eraser") {
    drawingMode = false;
  } else if (cTool == "rect" || cTool == "line") {
    fX = e.clientX - boardLeft;
    fY = e.clientY - boardTop;

    let width = fX - iX;
    let height = fY - iY;

    if (cTool == "rect") {
      tool.strokeRect(iX, iY, width, height);
    } else if (cTool == "line") {
      tool.beginPath();
      tool.moveTo(iX, iY);
      tool.lineTo(fX, fY);
      tool.stroke();
    }
  }
});

body.addEventListener("mousemove", function (e) {
  if (drawingMode == false) return;

  fX = e.clientX + boardLeft;
  fY = e.clientY - boardTop;

  tool.lineTo(fX, fY);
  tool.stroke();
  iX = fX;
  iY = fY;
});
// ----------------------------------------------------------

// ------------ color change section-----------------------------------------------
redColor.addEventListener("click", function () {
  tool.strokeStyle = "red";
});
greenColor.addEventListener("click", function () {
  tool.strokeStyle = "green";
});
blueColor.addEventListener("click", function () {
  tool.strokeStyle = "blue";
});

// size change logic
let sizeBox = document.querySelectorAll(".size-box");
sizeBox[0].addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  let elems = ["size1", "size2", "size3", "size4"];

  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      pencilSize = 1;
    } else if (firstClass == "size2") {
      pencilSize = 5;
    } else if (firstClass == "size3") {
      pencilSize = 10;
    } else if (firstClass == "size4") {
      pencilSize = 15;
    }
    tool.lineWidth = pencilSize;
  }
});

sizeBox[1].addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  let elems = ["size1", "size2", "size3", "size4"];

  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      eraserSize = 1;
    } else if (firstClass == "size2") {
      eraserSize = 5;
    } else if (firstClass == "size3") {
      eraserSize = 10;
    } else if (firstClass == "size4") {
      eraserSize = 15;
    }
    tool.lineWidth = eraserSize;
  }
});

sizeBox[2].addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  let elems = ["size1", "size2", "size3", "size4"];

  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      rectSize = 1;
    } else if (firstClass == "size2") {
      rectSize = 5;
    } else if (firstClass == "size3") {
      rectSize = 10;
    } else if (firstClass == "size4") {
      rectSize = 15;
    }
    tool.lineWidth = rectSize;
  }
});

sizeBox[3].addEventListener("click", function (e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  let elems = ["size1", "size2", "size3", "size4"];

  let allTheClasses = e.target.classList;
  let firstClass = allTheClasses[0];
  let test = elems.includes(firstClass);

  if (test) {
    if (firstClass == "size1") {
      lineSize = 1;
    } else if (firstClass == "size2") {
      lineSize = 5;
    } else if (firstClass == "size3") {
      lineSize = 10;
    } else if (firstClass == "size4") {
      lineSize = 15;
    }
    tool.lineWidth = lineSize;
  }
});
