// Get the modal
var modal = document.getElementById("myModal");

// Get the image and text for the modal
var modalTitle = document.getElementById("modal-title");
var modalImage = document.getElementById("modal-image");
var modalText = document.getElementById("modal-text");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open modal when a service box is clicked
function openModal(name, image, text) {
    modal.style.display = "block";
    modalTitle.innerHTML = name; // Set the service name
    modalImage.src = image;
    modalText.innerHTML = text;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}