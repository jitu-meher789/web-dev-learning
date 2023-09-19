(function () {
  let btnAddFolder = document.querySelector("#addFolder");
  let btnAddTextFile = document.querySelector("#addTextFile");
  let divbreadcrumb = document.querySelector("#breadcrumb");
  let divContainer = document.querySelector("#container");
  let aRootPath = divbreadcrumb.querySelector("a[purpose='path']");
  let templates = document.querySelector("#template");
  let resources = [];
  let cfid = -1;
  let rid = 0;

  btnAddFolder.addEventListener("click", addFolder);
  btnAddTextFile.addEventListener("click", addTextFile);
  aRootPath.addEventListener("click", viewFolderFromPath);

  function addFolder() {
    // validation - unique, non-blank, persist
    let rname = prompt("Enter folder's name");

    if (rname != null) {
      rname = rname.trim();
    }

    if (!rname) {
      // empty name validation
      alert("Empty name not fine");
      return;
    }

    let alreadyExists = resources.some(
      (r) => r.rname == rname && r.pid == cfid
    );
    if (alreadyExists == true) {
      // uniqueness validation
      alert(rname + " is already in use. Try some other name");
      return;
    }

    let pid = cfid;
    rid++;
    addFolderHTML(rname, rid, pid);

    resources.push({
      rid: rid,
      rname: rname,
      rtype: "folder",
      pid: cfid,
    });
    saveToStorage();
  }

  function addTextFile() {
    let rname = prompt("Enter text file's name");

    if (rname != null) {
      rname = rname.trim();
    }

    if (!rname) {
      // empty name validation
      alert("Empty name not fine");
      return;
    }

    let alreadyExists = resources.some(
      (r) => r.rname == rname && r.pid == cfid
    );
    if (alreadyExists == true) {
      // uniqueness validation
      alert(rname + " is already in use. Try some other name");
      return;
    }

    let pid = cfid;
    rid++;
    addTextFileHTML(rname, rid, pid);

    resources.push({
      rid: rid,
      rname: rname,
      rtype: "text-file",
      pid: cfid,
    });
    saveToStorage();
  }

  



  // delete the folder
  function deleteFolder() {
    let spanDelete = this;
    let divFolder = spanDelete.parentNode;
    let divName = divFolder.querySelector("[purpose='name']");

    let fidTBD = parseInt(divFolder.getAttribute("rid"));
    let fname = divName.innerHTML;

    let childrenExists = resources.some((r) => r.pid == fidTBD);

    let sure = confirm(
      `Are you sure you want to delete ${fname} ?` +
        (childrenExists ? ". It has also children." : "")
    );
    if (!sure) {
      return;
    }

    // delete form html
    divContainer.removeChild(divFolder);

    // delete form ram
    deleteHelper(fidTBD);

    // storage
    saveToStorage();
  }





  // delete helper
  function deleteHelper(fidTBD) {
    let children = resources.filter((r) => r.pid == fidTBD);

    for (let i = 0; i < children.length; i++) {
      deleteHelper(children[i].rid);
    }

    let ridx = resources.findIndex((r) => r.rid == fidTBD);
    console.log(resources[ridx].rname);
    resources.splice(ridx, 1);
  }






  // delete text file
  function deleteTextFile() {}






  // rename folder
  function renameFolder() {
    let nrname = prompt("Enter Folder's name");
    if (!nrname != null) {
      nrname = nrname.trim();
    }

    if (!nrname) {
      alert("Empty name is not allowed");
      return;
    }

    let spanRename = this;
    let divFolder = this.parentNode;
    let divName = divFolder.querySelector("[purpose=name]");
    let orname = divName.innerHTML;
    let ridTBU = parseInt(divFolder.getAttribute("rid"));

    if (nrname == orname) {
      alert("Please enter new name");
      return;
    }

    let alreadyExists = resources.some(
      (r) => r.rname == nrname && r.pid == cfid
    );
    if (alreadyExists == true) {
      alert(nrname + " already exists");
      return;
    }

    // change html
    divName.innerHTML = nrname;
    // change ram
    let resource = resources.find((r) => r.rid == ridTBU);
    resource.rname = nrname;
    // change storage
    saveToStorage();
  }








  // rename textfile
  function renameTextFile() {}





  // view folder
  function viewFolder() {
    let spanView = this;
    let divFolder = spanView.parentNode;
    let divName = divFolder.querySelector("[purpose=name]");

    let fname = divName.innerHTML;
    let fid = parseInt(divFolder.getAttribute("rid"));

    let aPathTemplate = templates.content.querySelector("a[purpose='path']");
    let aPath = document.importNode(aPathTemplate, true);

    aPath.innerHTML = fname;
    aPath.setAttribute("rid", fid);
    aPath.addEventListener("click", viewFolderFromPath);
    divbreadcrumb.appendChild(aPath);

    cfid = fid;
    divContainer.innerHTML = "";

    for (let i = 0; i < resources.length; i++) {
      if(resources[i].pid == cfid){
        if(resources[i].rtype == "folder"){
         addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
        }else if(resources[i].rtype == "text-file"){
         addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
        }
     }
    }
  }








  // view folder from path
  function viewFolderFromPath() {
    let aPath = this;
    let fid = parseInt(aPath.getAttribute("rid"));

    // set the breadCrumb
    while (aPath.nextSibling) {
      aPath.parentNode.removeChild(aPath.nextSibling);
    }

    // set the container
    cfid = fid;
    divContainer.innerHTML = "";

    for (let i = 0; i < resources.length; i++) {
      if(resources[i].pid == cfid){
        if(resources[i].rtype == "folder"){
         addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
        }else if(resources[i].rtype == "text-file"){
         addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
        }
     }
    }
  }








  // view text file
  function viewTextFile() {}







  // add folder to html
  function addFolderHTML(rname, rid, pid) {
    let divFolderTemplate = templates.content.querySelector(".folder");
    let divFolder = document.importNode(divFolderTemplate, true);

    let spanRename = divFolder.querySelector("[action=rename]");
    let spanDelete = divFolder.querySelector("[action=delete]");
    let spanView = divFolder.querySelector("[action=view]");
    let divName = divFolder.querySelector("[purpose='name']");

    spanRename.addEventListener("click", renameFolder);
    spanDelete.addEventListener("click", deleteFolder);
    spanView.addEventListener("click", viewFolder);

    divName.innerHTML = rname;
    divFolder.setAttribute("rid", rid);
    divFolder.setAttribute("pid", pid);

    divContainer.appendChild(divFolder);
  }







  // add text file html
  function addTextFileHTML(rname, rid, pid) {
    let divTextFileTemplate = templates.content.querySelector(".text-file");
    let divTextFile = document.importNode(divTextFileTemplate, true);

    let spanRename = divTextFile.querySelector("[action=rename]");
    let spanDelete = divTextFile.querySelector("[action=delete]");
    let spanView = divTextFile.querySelector("[action=view]");
    let divName = divTextFile.querySelector("[purpose='name']");

    spanRename.addEventListener("click", renameTextFile);
    spanDelete.addEventListener("click", deleteTextFile);
    spanView.addEventListener("click", viewTextFile);

    divName.innerHTML = rname;
    divTextFile.setAttribute("rid", rid);
    divTextFile.setAttribute("pid", pid);

    divContainer.appendChild(divTextFile);
  }







// save to storage
  function saveToStorage() {
    let rjson = JSON.stringify(resources);
    localStorage.setItem("data", rjson);
  }

  function loadFromStoarage() {
    let rjson = localStorage.getItem("data");

    if (!!rjson) {
      resources = JSON.parse(rjson);

      for(let i = 0;i < resources.length; i++){
        if(resources[i].pid == cfid){
           if(resources[i].rtype == "folder"){
            addFolderHTML(resources[i].rname, resources[i].rid, resources[i].pid);
           }else if(resources[i].rtype == "text-file"){
            addTextFileHTML(resources[i].rname, resources[i].rid, resources[i].pid);
           }
        }

        if (resources.rid > rid) {
          rid = resources.rid;
        }
      }
    }
  }

  // load from storage
  loadFromStoarage();
})();
