
const image = document.getElementById('slide');
const images = [ 'assets/ozil.jpg', 'assets/messi.jpg','assets/arsenal.jpg','assets/tony.jpg'];

let currentIndex = 0;

function changeImage() {
    image.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}
setInterval(changeImage, 3000);


function submitForm() {

    var form = document.getElementById("form");
    if (form.checkValidity()) {
        alert("thank you!");

    } else {
        alert("Please fill out all fields correctly.");
    }
}
