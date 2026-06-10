function submitFeedback(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const message =
document.getElementById("message").value;

if(
name === "" ||
email === "" ||
message === ""
){

alert("Please fill all fields");

return;

}

const feedback = {

name,
email,
message

};

localStorage.setItem(
"feedback",
JSON.stringify(feedback)
);

document.getElementById(
"confirmation"
).innerHTML =
"<h3>Feedback Submitted Successfully</h3>";

}

const accordions =
document.querySelectorAll(".accordion");

accordions.forEach(button=>{

button.addEventListener("click",()=>{

const panel =
button.nextElementSibling;

if(panel.style.display==="block"){

panel.style.display="none";

}
else{

panel.style.display="block";

}

});

});