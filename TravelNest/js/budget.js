function calculateBudget(){

const days =
Number(document.getElementById("days").value);

const dailyBudget =
Number(document.getElementById("dailyBudget").value);

const total =
days * dailyBudget;

let status;

if(total < 500){
    status = "Low Budget";
}
else if(total < 2000){
    status = "Moderate Budget";
}
else{
    status = "Luxury Budget";
}

document.getElementById("result").innerHTML =
`
<h2>Total Cost: $${total}</h2>
<h3>${status}</h3>
`;

}

function saveBudget(){

const trip = {
destination:
document.getElementById("destination").value,

days:
document.getElementById("days").value,

dailyBudget:
document.getElementById("dailyBudget").value
};

localStorage.setItem(
"savedTrip",
JSON.stringify(trip)
);

alert("Trip Saved");
}