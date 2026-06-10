let selectedDestination = null;

function generateTrip(){

const randomIndex =
Math.floor(
Math.random() * destinations.length
);

selectedDestination =
destinations[randomIndex];

document.getElementById(
"tripResult"
).innerHTML =
`
<h2>${selectedDestination.name}</h2>
<p>${selectedDestination.country}</p>
<p>${selectedDestination.description}</p>
`;

}

function saveWishlist(){

if(!selectedDestination){
alert("Generate a trip first");
return;
}

localStorage.setItem(
"wishlist",
JSON.stringify(selectedDestination)
);

alert("Saved to Wishlist");

}