const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box"); // select all the created notes

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}



createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./delete.svg";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage()
})

notesContainer.addEventListener("click", (e) => {
    // delete a note
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // remove deleted item from local storage;
    } // store note in local storage, when something is written in the notes;
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.forEach((note) => {
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})
