(function() {

    let btnAddFolder = document.querySelector("#btnAddFolder");
    let divContainer = document.querySelector("#divContainer");
    let pageTemplates = document.querySelector("#pageTemplates");
    let divBreadCrumb = document.querySelector("#divBreadCrumb");
    let aRootPath = document.querySelector(".path");
    
    let folders = [];
    let cfid = -1;
    let fid = -1;

    btnAddFolder.addEventListener("click", addFolder);
    aRootPath.addEventListener("click", navigateBreadCrumb);
    
    
    function addFolder() {
        let fname = prompt("Enter Folder name");

        if(!!fname){
            let found = folders.some(f => f.name == fname);

            if(found == false){
                fid++;

                folders.push({
                    id: fid,
                    name: fname,
                    pid: cfid
                });
                addFolderInHtmlPage(fname, fid, cfid);
                saveToStorage();
            }else{
                alert(fname + " already exists");
            }
            
        }else {
            alert("Please enter something");
        }
    }

    function editFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let ofname = divName.innerHTML;

        let nfname = prompt("Enter a new name for " +  ofname);

        if(!!nfname) {
            if(nfname != ofname){
                let exists = folders.filter(f => f.pid == cfid).some(f => f.name == nfname);
                if(exists == false){

                    // ram
                    let folder = folders.filter(f => f.pid == cfid).find(f => f.name == ofname);
                    folder.name = nfname;
                    // html
                    divName.innerHTML = nfname;
                    //storage
                    saveToStorage();
                }else{
                    alert(nfname + " already exists")
                }
            }else{
                alert("This is the old name only, Please enter something new.");
            }
        }else{
            alert("Please enter a name");
        }
    }

    function deleteFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        let fidtbd = divFolder.getAttribute("fid");


        let flag = confirm("Are you sure you want to delete " + divName.innerHTML + " ?");

        if(flag){
            let exists = folders.some(f => f.pid == fidtbd);
            
            if(exists){

                let fidx = folders.findIndex(f => f.id == fidtbd);
                folders.splice(fidx,1);

                divContainer.removeChild(divFolder);

                saveToStorage();
            }else {
                alert("Can't delete. Has children");
              }
            
        }
    }

    function navigateBreadCrumb() {
        let fname = this.innerHTML;
        cfid = parseInt(this.getAttribute("fid"));

        divContainer.innerHTML = "";
        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderInHtmlPage(f.name, f.id, f.pid);
        })

        while(this.nextSibling){
            this.parentNode.removeChild(this.nextSibling);
        }
    }

    function viewFolder() {
        let divFolder = this.parentNode;
        let divName = divFolder.querySelector("[purpose='name']");
        cfid = parseInt(divFolder.getAttribute("fid"));

        let apathTemplate = pageTemplates.content.querySelector(".path");
        let apath = document.importNode(apathTemplate, true);

        apath.innerHTML = divName.innerHTML;
        apath.setAttribute("fid", cfid);
        apath.addEventListener("click", navigateBreadCrumb);
        divBreadCrumb.appendChild(apath);

        divContainer.innerHTML = "";

        folders.filter(f => f.pid == cfid).forEach(f => {
            addFolderInHtmlPage(f.name, f.id, f.pid);
        })

    }

    function addFolderInHtmlPage(fname, fid, pid){
        
        let divFolderTemplate = pageTemplates.content.querySelector(".folder");
        let divFolder = document.importNode(divFolderTemplate, true);

        let spanEdit = divFolder.querySelector("[action='edit']");
        let spanDelete = divFolder.querySelector("[action='delete']");
        let spanView = divFolder.querySelector("[action='view']");

        let divName = divFolder.querySelector("[purpose='name']");

        divFolder.setAttribute("fid", fid);
        divFolder.setAttribute("pid", pid);

        divName.innerHTML = fname;

        spanEdit.addEventListener("click", editFolder);
        spanDelete.addEventListener("click", deleteFolder);
        spanView.addEventListener("click", viewFolder);


        divContainer.appendChild(divFolder);

    }


    function saveToStorage() {
        let fjson = JSON.stringify(folders);

        localStorage.setItem("data", fjson);
    }

    function loadFromStorage () {
        let fjson = localStorage.getItem("data");

        if(!!fjson){

            folders = JSON.parse(fjson);

            folders.forEach(f => {
                if(f.id > fid){
                    fid = f.id;
                } 
                if(f.pid === cfid){
                    addFolderInHtmlPage(f.name, f.id);
                }
            }); 
        }
    }

    
    loadFromStorage();
})();