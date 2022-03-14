const form = document.getElementById("survey");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("submitted form");
    return false;
});
