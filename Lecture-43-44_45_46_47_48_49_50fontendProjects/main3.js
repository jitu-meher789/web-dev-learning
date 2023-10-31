(function () {
  let btnAddFolder = document.querySelector("#addFolder");
  let btnAddTextFile = document.querySelector("#addTextFile");
  let divbreadcrumb = document.querySelector("#breadcrumb");
  let divContainer = document.querySelector("#container");

  let divApp = document.querySelector("#app");
  let divAppTitleBar = document.querySelector("#app-title-bar");
  let divAppTitle = document.querySelector("#app-title");
  let divAppMenuBar = document.querySelector("#app-menu-bar");
  let divAppBody = document.querySelector("#app-body");



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
  function deleteTextFile() {

    let spanDelete = this;
    let divTextFile = spanDelete.parentNode;
    let divName = divTextFile.querySelector("[purpose='name']");

    let fidTBD = parseInt(divTextFile.getAttribute("rid"));
    let fname = divName.innerHTML;



    let sure = confirm(
      `Are you sure you want to delete ${fname} ?`);
    if (!sure) {
      return;
    }

    // delete form html
    divContainer.removeChild(divTextFile);

    // delete form ram
    let ridx = resources.findIndex(r => r.rid == fidTBD);
    resources.splice(ridx,1);

    // storage
    saveToStorage();
  }






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
    let divFolder = spanRename.parentNode;
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
  function renameTextFile() {

    let nrname = prompt("Enter File's name");
    if (!nrname != null) {
      nrname = nrname.trim();
    }

    if (!nrname) {
      alert("Empty name is not allowed");
      return;
    }

    let spanRename = this;
    let divTextFile = this.parentNode;
    let divName = divTextFile.querySelector("[purpose=name]");
    let orname = divName.innerHTML;
    let ridTBU = parseInt(divTextFile.getAttribute("rid"));

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
  function viewTextFile() {

    let spanView = this;
    let divTextFile = spanView.parentNode;
    let divName = divTextFile.querySelector("[purpose=name]");
    let fname = divName.innerHTML;
    let fid = parseInt(divTextFile.getAttribute('rid'));

    let divNotepadMenuTemplate = templates.content.querySelector("[purpose=notepad-menu]");
    let divNotepadMenu = document.importNode(divNotepadMenuTemplate,true);

    divAppMenuBar.innerHTML = "";
    divAppMenuBar.appendChild(divNotepadMenu);
    

    let divNotepadBodyTemplate = templates.content.querySelector("[purpose=notepad-body]");
    let divNotepadBody = document.importNode(divNotepadBodyTemplate, true);

    divAppBody.innerHTML = "";
    divAppBody.appendChild(divNotepadBody);

    divAppTitle.innerHTML = fname;
    divAppTitle.setAttribute("rid", fid);


    let spanSave = divAppMenuBar.querySelector("[action=save]");
    let spanBold = divAppMenuBar.querySelector("[action=bold]");
    let spanItalic = divAppMenuBar.querySelector("[action=italic]");
    let spanUnderline = divAppMenuBar.querySelector("[action=underline]");
    let spanBGColor = divAppMenuBar.querySelector("[action=bg-color]");
    let spanTextColor = divAppMenuBar.querySelector("[action=fg-color]");
    let spanFontFamily = divAppMenuBar.querySelector("[action=font-family]");
    let spanFontSize = divAppMenuBar.querySelector("[action=font-size]");
    let spanDonwload = divAppMenuBar.querySelector("[action=download]");
    let inputUpload = divAppMenuBar.querySelector("[action=upload]");


    spanSave.addEventListener("click", saveNotepad);
    spanBold.addEventListener("click", makeNotepadBold);
    spanItalic.addEventListener("click", makeNotepadItalic);
    spanUnderline.addEventListener("click", makeNotepadUnderline);
    spanBGColor.addEventListener("change", makeNotepadBGColor);
    spanTextColor.addEventListener("change", makeNotepadTextColor);
    spanFontFamily.addEventListener("change", makeNotepadFontFamily);
    spanFontSize.addEventListener("change", makeNotepadFontSize);
    spanDonwload.addEventListener("click", downloadNotepad);
    inputUpload.addEventListener("change", uploadNotepad);
 

  }


  function downloadNotepad() {
    let fid = parseInt(divAppTitle.getAttribute("rid"));
    let resource = resources.find(r => r.rid == fid);
    console.log(resource);
  }


  function uploadNotepad() {
    console.log("in upload")

  }
// 
  function saveNotepad () {
    let fid = parseInt(divAppTitle.getAttribute("rid"));
    let resource = resources.find(r => r.rid == fid);


    let spanSave = divAppMenuBar.querySelector("[action=save]");
    let spanBold = divAppMenuBar.querySelector("[action=bold]");
    let spanItalic = divAppMenuBar.querySelector("[action=italic]");
    let spanUnderline = divAppMenuBar.querySelector("[action=underline]");
    let inputBGColor = divAppMenuBar.querySelector("[action=bg-color]");
    let inputTextColor = divAppMenuBar.querySelector("[action=fg-color]");
    let selectFontFamily = divAppMenuBar.querySelector("[action=font-family]");
    let selectFontSize = divAppMenuBar.querySelector("[action=font-size]");
   




    resource.isBold = spanBold.getAttribute("pressed") == "true";
    resource.isItalic = spanItalic.getAttribute("pressed") == "true";
    resource.isUnderline = spanUnderline.getAttribute("pressed") == "true"; 
    resource.bgColor = inputBGColor.value;
    resource.textColor = inputTextColor.value;
    resource.fontFamily = selectFontFamily.value;
    resource.fontSize = selectFontSize.value;

    saveToStorage();
  }

  function makeNotepadBold () {

    let textArea = divAppBody.querySelector("textArea");
    let isPressed = this.getAttribute("pressed") == "true";

    if(isPressed == false){
      this.setAttribute("pressed", true);
      textArea.style.fontWeight = "bold";
    }else{
      this.setAttribute("pressed", false);
      textArea.style.fontWeight = "normal";
    }
    
  }

  function makeNotepadItalic () {
    let textArea = divAppBody.querySelector("textArea");
    let isPressed = this.getAttribute("pressed") == "true";

    if(isPressed == false){
      this.setAttribute("pressed", true);
      textArea.style.fontStyle = "italic";
    }else{
      this.setAttribute("pressed", false);
      textArea.style.fontStyle = "normal";
    }
  }

  function makeNotepadUnderline () {
    let textArea = divAppBody.querySelector("textArea");
    let isPressed = this.getAttribute("pressed") == "true";

    if(isPressed == false){
      this.setAttribute("pressed", true);
      textArea.style.textDecoration = "underline";
    }else{
      this.setAttribute("pressed", false);
      textArea.style.textDecoration = "none";
    }
  }

  function makeNotepadBGColor () {
      let color = this.value;
      let textArea = divAppBody.querySelector("textArea");
      textArea.style.backgroundColor = color;
  }

  function makeNotepadTextColor () {
    let color = this.value;
    let textArea = divAppBody.querySelector("textArea");
    textArea.style.color = color;
  }

  function makeNotepadFontFamily () {
    let family = this.value;
    let textArea = divAppBody.querySelector("textArea" );
    textArea.style.fontFamily = family;
  }

  function makeNotepadFontSize () {
    let size = this.value;
    let textArea = divAppBody.querySelector("textArea");
    textArea.style.fontSize = size + "px";
  }





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
