let audio;

function playBeach(){

stopAudio();

audio = new Audio("sounds/beach.mp3");

audio.play();

}

function playForest(){

stopAudio();

audio = new Audio("sounds/forest.mp3");

audio.play();

}

function stopAudio(){

if(audio){
audio.pause();
}

}

function saveVisited(){

const destination =
document.getElementById(
"visitedDestination"
).value;

localStorage.setItem(
"visitedDestination",
destination
);

document.getElementById(
"visitedResult"
).innerHTML =
`
<h3>
Visited:
${destination}
</h3>
`;

}