// utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// get the formatted date
const getDateTime = () => {
    const time = new Date();
    return time.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });
};

// get map associated with time
const getMap = () => {
    const date = new Date();
    return (date.getMonth() * 2 + date.getHours()) % 24;
};

const updateMap = () => {
    $("#sky").src = `assets/sky${getMap()}.jpg`;
    $("#datetime").textContent = getDateTime();
};

// update map every second
setInterval(updateMap, 1000);
updateMap();
