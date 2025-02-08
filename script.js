const texts = ["Backend Engineer", "Software Engineer", "Frontend Engineer", "Devops Engineer","Full Stack Engineer"];
let index = 0;

function changeText() {
    document.getElementById("changingText").innerText = texts[index];
    index = (index + 1) % texts.length; // Loop through the texts
}

setInterval(changeText, 2999); // Change text every 2 seconds
