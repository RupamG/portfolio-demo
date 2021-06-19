// selecting items
let btnOpenForm = document.getElementById("bt");
let btnCloseForm = document.querySelector(".close");

// function for Opening the form modal
function openForm() {
  setTimeout(function () {
    document.querySelector(".bg-modal").style.display = "flex";
  }, 250);
}

// function for closing the form modal
function closeForm() {
  setTimeout(function () {
    document.querySelector(".bg-modal").style.display = "none";
  }, 250);
}

// adding click eventlisteners
btnOpenForm.addEventListener("click", openForm);

btnCloseForm.addEventListener("click", closeForm);

// On esc key press
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeForm();
  }
});
