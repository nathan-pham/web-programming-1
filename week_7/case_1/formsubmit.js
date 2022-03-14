const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("submitted form");
    return false;
});
