document.addEventListener("DOMContentLoaded", function() {
    const emailElement = document.getElementById("email");
    emailElement.addEventListener("click", function() {
        alert("My email is: " + emailElement.textContent);
    });
});
