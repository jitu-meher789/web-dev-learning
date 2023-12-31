let video = document.querySelector("video");
let recordBtn = document.querySelector("#record");
let recDiv = recordBtn.querySelector("div");
let captureBtn = document.querySelector("#capture");
let capDiv = captureBtn.querySelector("div");
let body = document.querySelector("body");

let isRecording = false;
let mediaRecorder;
let chunks = [];

let minZoom = 1;
let maxZoom = 3;
let zoomInBtn = document.querySelector(".zoom-in");
let zoomOutBtn = document.querySelector(".zoom-out");
let currZoom = 1;

let appliedFilter;
let filters = document.querySelectorAll(".filter");



zoomInBtn.addEventListener("click",function() {
    if(currZoom < maxZoom){
        currZoom = currZoom + 0.1;

    }
    video.style.transform = `scale(${currZoom})`;
});



zoomOutBtn.addEventListener("click",function() {
    if(currZoom > minZoom) {
        currZoom = currZoom - 0.1;
    }
    video.style.transform = `scale(${currZoom})`;
});





for(let i = 0; i < filters.length; i++) {
    filters[i].addEventListener("click", function(e){
        console.log(e.currentTarget.style.backgroundColor);
        removeFilter();
        appliedFilter = e.currentTarget.style.backgroundColor;
        let div = document.createElement("div");
        div.style.backgroundColor = appliedFilter;
        div.classList.add("filter-div");
        body.append(div);
    })
}

// startBtn.addEventListener("click", () => {
//     mediaRecorder.start();
// });
// stopBtn.addEventListener("click", () => {
//     mediaRecorder.stop();
// });

recordBtn.addEventListener("click", (e) => {
    if (isRecording) {
        mediaRecorder.stop();
        isRecording = false;
        recDiv.classList.remove("record-animation");
    } else {
        mediaRecorder.start();
        appliedFilter = "";
        removeFilter();
        currZoom = 1;
        video.style.transform = `scale(${currZoom})`;
        isRecording = true;
        recDiv.classList.add("record-animation");
    }
});

captureBtn.addEventListener("click", function () {

    capDiv.classList.add("capture-animation");
    
    setTimeout(function () {
        capDiv.classList.remove("capture-animation");
    },1000)

    let canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    let tool = canvas.getContext("2d");

    tool.translate(canvas.width / 2, canvas.height / 2);
    tool.scale(currZoom, currZoom);
    tool.translate(-canvas.width / 2, -canvas.height / 2);


    tool.drawImage(video, 0, 0);

    if(appliedFilter) {
        tool.fillStyle = appliedFilter;
        tool.fillRect(0, 0, canvas.width, canvas.height);
    }

    let link = canvas.toDataURL();
    let a = document.createElement("a");
    a.href = link;
    a.download = "img.png";
    a.click();
    a.remove();
    canvas.remove();
})

navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(function (mediaStream) {

        mediaRecorder = new MediaRecorder(mediaStream);

        mediaRecorder.addEventListener("dataavailable", (e) => {
            chunks.push(e.data)
                ;
        })

        mediaRecorder.addEventListener("stop", () => {
            let blob = new Blob(chunks, { type: "video/mp4" });
            let a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "jitumeher.mp4";
            a.click();
            a.remove();
        })

        video.srcObject = mediaStream;



    }).catch(function (error) {
        console.log(error);
    })


    function removeFilter() {
        let filter = document.querySelector(".filter-div");
        if(filter) {
            filter.remove();
        }
    }