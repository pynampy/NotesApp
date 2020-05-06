
showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];


    } else {

        notesObj = JSON.parse(notes)
    }

    notesObj.push(addTxt.value)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    showNotes();

})

function showNotes() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];


    } else {

        notesObj = JSON.parse(notes)
    }

    let html = "";
    notesObj.forEach(function (element, index) {

        html += `  <div class="notecard my-2 mx2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">NOTE #${index + 1}</h5>
            <p class = "card-text">${element}</p>
            <button id="${index}" onclick=deleteNode(this.id) class="btn btn-primary">Delete Note</button>
        </div>
    </div> `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = ` Empty :(     &nbsp &nbsp &nbsp   Use "Add note" to add a note`
    }
}

function deleteNode(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes)

    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}



let search = document.getElementById('searchTxt')

search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase()

    let noteCards = document.getElementsByClassName('notecard');
    Array.from(noteCards).forEach(function (element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }



    })
})
