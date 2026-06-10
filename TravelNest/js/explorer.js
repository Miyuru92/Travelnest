const cards =
document.getElementById("cards");

function displayDestinations(list){

cards.innerHTML="";

list.forEach(destination=>{

cards.innerHTML += `
<div class="card">

<img src="${destination.image}">

<h3>${destination.name}</h3>

<p>${destination.country}</p>

</div>
`;

});

addCardEvents(list);

}

displayDestinations(destinations);

function addCardEvents(list){

const allCards =
document.querySelectorAll(".card");

allCards.forEach((card,index)=>{

card.addEventListener("click",()=>{

showModal(list[index]);

});

});

}

function showModal(destination){

document.getElementById("modal").style.display="block";

document.getElementById("modalBody").innerHTML=`

<h2>${destination.name}</h2>

<p>${destination.description}</p>

<h3>Attractions</h3>

<ul>
${destination.attractions
.map(a=>`<li>${a}</li>`)
.join("")}
</ul>

<table border="1">

<tr>
<th>Cost</th>
<td>${destination.cost}</td>
</tr>

</table>

`;

}

document
.getElementById("close")
.addEventListener("click",()=>{

document.getElementById("modal").style.display="none";

});

document
.getElementById("search")
.addEventListener("input",filterData);

document
.getElementById("continent")
.addEventListener("change",filterData);

function filterData(){

const text =
document.getElementById("search")
.value
.toLowerCase();

const continent =
document.getElementById("continent")
.value;

const filtered =
destinations.filter(d=>{

const nameMatch =
d.name.toLowerCase()
.includes(text);

const continentMatch =
continent==="all" ||
d.continent===continent;

return nameMatch &&
continentMatch;

});

displayDestinations(filtered);

}