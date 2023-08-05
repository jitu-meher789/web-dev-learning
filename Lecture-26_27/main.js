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

let canvasBoard = document.querySelector("canvas");
let body = document.querySelector("body");
let rectTool = document.querySelector(".fa-square");
let lineTool = document.querySelector(".fa-grip-lines-vertical");
let pencilTool = document.querySelector(".fa-pencil");
let currTool = "rectTool";
let tool = canvasBoard.getContext("2d");

let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;
let drawingMode = false;
let iX, iY, fX, fY;

// tool change logic
rectTool.addEventListener("click", function () {
  currTool = "rectTool";
  drawingMode = false;

});

lineTool.addEventListener("click", function () {
  currTool = "lineTool";
  drawingMode = false;
});

pencilTool.addEventListener("click", function () {
  currTool = "pencilTool";
});

let boardTop = canvasBoard.getBoundingClientRect().top;
console.log(canvasBoard.getBoundingClientRect());

// press on the body
body.addEventListener("mousedown", function (e) {
  iX = e.clientX;
  iY = e.clientY - boardTop;
});

body.addEventListener("mouseup", function (e) {
  fX = e.clientX;
  fY = e.clientY - boardTop;

  let width = fX - iX;
  let height = fY - iY;
    if (currTool == "rectTool") {
        tool.strokeRect(iX, iY, width, height);
    }else if (currTool == "pencilTool") {

        drawingMode = false;
        body.addEventListener("mousedown", function (e) {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(e.clientX, e.clientY - boardTop);
        });

        body.addEventListener("mouseup", function (e) {
        drawingMode = false;
        });

        body.addEventListener("mousemove", function(e) {
            if(drawingMode == false)
                return;
            fX = e.clientX;
            fY = e.clientY - boardTop;

            tool.lineTo(fX,fY);
            tool.stroke();x
            iX = fX;
            iY = fY;
        })
    } else {
        tool.beginPath();
        tool.moveTo(iX, iY);
        tool.lineTo(fX, fY);
        tool.stroke();
        console.log("Pencil tool is pending");
    }
});

redColor.addEventListener("click", function () {
  tool.strokeStyle = "red";
});
greenColor.addEventListener("click", function () {
  tool.strokeStyle = "green";
});
blueColor.addEventListener("click", function () {
  tool.strokeStyle = "blue";
});










// let canvasBoard = document.querySelector("canvas");
// let tool = canvasBoard.getContext("2d");
// let body = document.querySelector("body");

// canvasBoard.width = window.innerWidth;
// canvasBoard.height = window.innerHeight;

// let boardTop = canvasBoard.getBoundingClientRect().top;
// console.log();

// let iX, iY, fX, fY;
// let drawingMode = false;
// body.addEventListener("mousedown", function(e) {

//     drawingMode = true;
//     tool.beginPath();
//     tool.moveTo(e.clientX,e.clientY - boardTop);
// })

// body.addEventListener("mouseup", function(e) {
//     drawingMode = false;
// })

// body.addEventListener("mousemove", function(e) {
//     if(drawingMode == false)
//         return;
//     fX = e.clientX;
//     fY = e.clientY - boardTop;

//     tool.lineTo(fX,fY);
//     tool.stroke();x
//     iX = fX;
//     iY = fY;
// })
