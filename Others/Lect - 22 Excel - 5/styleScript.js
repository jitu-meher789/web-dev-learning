let colorSpan = document.querySelectorAll(".colors span");
let fontColorBtn = colorSpan[0];
let backgroundColorBtn = colorSpan[1];

let alignmentSpans = document.querySelectorAll(".alignment span");
let leftAlignBtn = alignmentSpans[0];
let centerAlignBtn = alignmentSpans[1];
let rightAlignBtn = alignmentSpans[2];



// text alignment
leftAlignBtn.addEventListener("click",function(e) {
    oldCell.style.textAlign = "left";
    let address = oldCell.getAttribute("data-address");
    dataObject[address].textAlign = "left";
    console.log(dataObject[address]);
})
centerAlignBtn.addEventListener("click",function(e) {
    oldCell.style.textAlign = "center";
    let address = oldCell.getAttribute("data-address");
    dataObject[address].textAlign = "center";
    console.log(dataObject[address]);
})
rightAlignBtn.addEventListener("click",function(e) {
    oldCell.style.textAlign = "right";
    let address = oldCell.getAttribute("data-address");
    dataObject[address].textAlign = "right";
    console.log(dataObject[address]);
})

// change the color of the cell
fontColorBtn.addEventListener("click",function(e) {
    // oldCell wala cell ko font color change kardo 

    let colorPicker  = document.createElement("input");
    colorPicker.type = "color";

    colorPicker.addEventListener("change",function(e) {
        console.log(e.currentTarget.value);
        oldCell.style.color = e.currentTarget.value;
        let address = oldCell.getAttribute("data-address");
        dataObject[address].fontColor = e.target.value;
        console.log(dataObject[address])
    })
    colorPicker.click();
});


// change the background color of the cell
backgroundColorBtn.addEventListener("click",function(e) {
    // oldCell wala cell ko font color change kardo 
    
    let colorPicker  = document.createElement("input");
    colorPicker.type = "color";
    
    colorPicker.addEventListener("change",function(e) {
        console.log(e.currentTarget.value);
        oldCell.style.backgroundColor = e.currentTarget.value;
        let address = oldCell.getAttribute("data-address");
        dataObject[address].backgroundColor = e.target.value;

    })
    colorPicker.click();
});




