let prevTopScroll;
let prevLeftScroll;

grid.addEventListener('scroll', function(e) {
    let currTopScroll = e.currentTarget.scrollTop;
    let currLeftScroll = e.currentTarget.scrollLeft;

    if(currTopScroll != prevTopScroll){
        prevTopScroll = currTopScroll;

        columnTags.classList.add("column-tag-atke");
        rowNumbers.classList.remove("row-numbers-atke");
    }else if(currLeftScroll != prevLeftScroll){
        prevLeftScroll = currLeftScroll;
        columnTags.classList.remove("column-tag-atke");
        rowNumbers.classList.add("row-numbers-atke");
    }


});