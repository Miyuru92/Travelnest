const quotes = [
"Travel is the only thing you buy that makes you richer.",
"Adventure awaits.",
"Explore the world.",
"Collect memories, not things."
];

let index = 0;

setInterval(() => {
document.getElementById("quote").textContent =
quotes[index];

index++;

if(index >= quotes.length){
index = 0;
}
},3000);

const day =
new Date().getDate() %
destinations.length;

document.getElementById("destinationDay").textContent =
destinations[day].name;

function saveEmail(){

const email =
document.getElementById("email").value;

localStorage.setItem(
"newsletter",
email
);

alert("Subscribed!");
}