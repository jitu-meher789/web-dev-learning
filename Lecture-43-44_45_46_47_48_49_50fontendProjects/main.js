(function () {

    let btn = document.querySelector("#myFirstButton");

    let divContainer = document.querySelector("#container");

    let template = document.querySelector("#myTemplate");

    let fid = 0;
    let folders = [];

    btn.addEventListener("click", addFolder);


    function addFolder() {
            let fname = prompt("Enter a folder");

            if (fname == null) {
                return;
            }
            
            fid++;
            addFolderInPage(fname, fid);
            folders.push({
                id: fid,
                name: fname,
            });

            persistFolder();
    }

    function addFolderInPage (fname, fid) {
        let divFolderTemplate = template.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let divName = divFolder.querySelector("[purpose='name']");
        divName.innerHTML = fname;

        divFolder.setAttribute("fid", fid);

        let spanDelete = divFolder.querySelector("span[action='delete']");
        spanDelete.addEventListener("click", deleteFolder);

        let editSpan = divFolder.querySelector("span[action='edit']");
        editSpan.addEventListener("click", editFolder);

        divContainer.appendChild(divFolder);
    }
    function deleteFolder() {

            let divFolder = this.parentNode;
            let divName = divFolder.querySelector("[purpose='name']");

            let flag = confirm("Do you want to delete the folder ? " + divName.innerHTML);

            if (flag == true) {
                divContainer.removeChild(divFolder);
    
                // let idx = folders.findIndex((f) => fid.id == parseInt(divFolder.getAttribute("fid")));
                let idx = folders.findIndex(f => f.id == parseInt(divFolder.getAttribute("fid")));
                folders.splice(idx, 1);
                persistFolder();
            }
            
    }
    function editFolder() {

        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let fname = prompt("Enter the new folder name");

        if (fname == null) {
            return;
        }
        divName.innerHTML = fname;

        let folder = folders.find((f) => f.id == parseInt(divFolder.getAttribute("fid")));
        folder.name = fname;
        persistFolder();
    }
    function persistFolder() {
        console.log(folders);
        let fjson = JSON.stringify(folders);
        localStorage.setItem("data", fjson);
    }
    function loadFoldersFromStorage () {
        let json = localStorage.getItem("data");

        if(!!json){
            folders = JSON.parse(json);

            folders.forEach(function(f) {
                addFolderInPage(f.name, f.id);
            })
        }
    }
    loadFoldersFromStorage();
})();











































































/* let h1 = document.querySelector("h1");
    btn.addEventListener("click", function() {
        h1.style.color = "green";
    })

    btn.addEventListener("mouseover", function() {
        h1.style.color = "yellow";
    })

    btn.addEventListener("mouseout", function() {
        h1.style.color = "red";
    })*/
