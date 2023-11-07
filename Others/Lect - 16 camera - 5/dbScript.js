let req = indexedDB.open("Camera", 1);
let db;
let gbody = document.querySelector(".media-container-hero");
let backBtn = document.querySelector(".nav-cam");

req.addEventListener("success", function () {
  db = req.result;
});

// upgrade event occurs in 2 cases
// case1 : when we create a new db
// case2 : when we try to open a database which already existed with a incremented version
req.addEventListener("upgradeneeded", function () {
  let accessToCameraDB = req.result;
  accessToCameraDB.createObjectStore("Gallery", { keyPath: "mId" });
});

req.addEventListener("error", function () {
  alert("error in creation");
});

backBtn.addEventListener("click", function () {
  location.assign("index.html");
});
function addMedia(media, type) {
  if (!db) return;
  let obj = { mId: Date.now(), media, type };

  let tx = db.transaction("Gallery", "readwrite");

  let gallery = tx.objectStore("Gallery");

  gallery.add(obj);
}

function viewMedia() {
  if (!db) return;
  let tx = db.transaction("Gallery", "readonly");

  let gallery = tx.objectStore("Gallery");

  let cReq = gallery.openCursor();

  cReq.addEventListener("success", function () {
    let cursor = cReq.result;
    if (cursor) {
      //   let li = document.createElement("li");
      //   li.innerHTML = `<div>${cursor.value.title}</div><div>${cursor.value.content}</div> <br>`;
      //   ul.append(li);

      let mo = cursor.value;
      let linkForDownloadBtn = "";
      let div = document.createElement("div");
      div.classList.add("media-container");

      if (mo.type == "video") {
        let url = window.URL.createObjectURL(cursor.value.media);
        linkForDownloadBtn = url;
        div.innerHTML = `<div class="media">
                            <video src="${url}" autoplay loop controls muted></video>
                        </div>
                        <span class="material-symbols-outlined">videocam</span>
                        <button class="download"><span class="material-symbols-outlined" id="download-icon">download</span></button>
                        <button class="delete" data-id="${mo.mId}"><span class="material-symbols-outlined" id="delete-icon">delete</span></button>`;
        gbody.append(div);
      } else {
        linkForDownloadBtn = mo.media;
        div.innerHTML = `<div class="media">
                            <a href="${mo.media}">
                                <img src="${mo.media}">
                            </a>
                        </div>
                        <span class="material-symbols-outlined">image</span>
                        <button class="download"><span class="material-symbols-outlined" id="download-icon">download</span></button>
                        <button class="delete" data-id="${mo.mId}"><span class="material-symbols-outlined" id="delete-icon">delete</span></button>`;
      }

      let downloadBtn = div.querySelector(".download");
      let deleteBtn = div.querySelector(".delete");
      downloadBtn.addEventListener("click", function (e) {
        let a = document.createElement("a");
        a.href = linkForDownloadBtn;

        if (mo.type == "video") {
          a.download = "video.mp4";
        } else {
          a.download = "img.png";
        }
        a.click();
        a.remove();
      });

      deleteBtn.addEventListener("click", function (e) {
        let id = e.currentTarget.getAttribute("data-id");

        let temp = confirm("Are you sure you want to delete");
        if (!temp) {
          return;
        } else {
          // remove from db
          deleteMedia(id);
          // remove from ui
          e.currentTarget.parentElement.remove();
        }
      });

      gbody.append(div);
      cursor.continue();
    }
  });
}

function deleteMedia(id) {
  if (!db) return;
  let tx = db.transaction("Gallery", "readwrite");
  let gallery = tx.objectStore("Gallery");
  gallery.delete(Number(id));
}
