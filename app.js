// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

const cl = document.getElementById("play-button");
cl.onclick = ()=> {
    location.href = "game.html";
}
