// (function (){
    
//     let uname = prompt("What is your name");
//     alert("Hello " + uname);
// })();
// // IFEE -> immidietly invoked function execution


(function() {
    let timeUnits = prompt("Enter Time");
    let interval = prompt("Log after how much time");

    let iid = setInterval(handleCalls, interval * 1000);

    function handleCalls() {
        console.log(timeUnits + " left");
        timeUnits -= interval;

        if(timeUnits == 0){
            clearInterval(iid);
            alert("Done");
        }
    }
    
})();