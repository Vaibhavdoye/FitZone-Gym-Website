
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""||number === ""

    ){
        alert("Please fill all fields!");
        return;
    }

    alert("Message Sent Successfully!");
    form.reset();
});