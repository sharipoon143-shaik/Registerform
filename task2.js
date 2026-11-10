const registrationForm = document.getElementById("registrationForm");
const cancelButton = document.getElementById("cancelButton");

registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Registration submitted successfully!");
});

cancelButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to cancel?")) {
        registrationForm.reset();
    }
});
