let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click",function(e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if(notes==null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes",JSON.stringify(notesObj));
  addTxt.value="";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if(notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html= "";
  notesObj.forEach(function(element, index) {
    html += `
    <head>
    <style>
    .card {
    display : inline-block;
    width : 350px;
    margin: 10px;
    }
    .note {
    height: 100px;
    border: 2px outset black;
    border-radius:10px;
    overflow:auto;
    padding:5px;
    &:hover {
      background-color: rgb(208, 208, 208);
    }
    }
    button {
    border: 1px solid black;
    border-radius:10px;
    padding:5px;
    background-color: rgb(208, 208, 208);
    &:hover {
      background-color: rgb(255, 92, 92);
    }
    }
    </style>
    </head>
    <body>
    <div class="card">
    <h5>Note ${index+1}</h5>
    <p class=note>${element}</p>
    <button id="${index}" onClick="deleteNote(this.id)">Delete Note</button>
    </div>
    </body>`;
  });
  let notesElm = document.getElementById("notes");
  if( notesObj.length !=0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show!`;
  }
}

function deleteNote(index) {
  let notes = localStorage.getItem("notes");
  if(notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}