// modern scrapers have the ability to execute JS
// not much point in protecting emails (might as well obfuscate & minify them though)

// utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// select all blank cells
const emailCells = $$("td").filter((el) => el.textContent.trim().length == 0);
const emailAddresses = [
    "cadler",
    "mikeli",
    "khoward",
    "rhope",
    "wlewis",
    "bforth",
].map((email) => `${email}@mpl.gov`);

// replace all blank cells with generated emails
for (let i = 0; i < emailCells.length; i++) {
    const emailCell = emailCells[i];
    const emailAddress = emailAddresses[i];

    const anchor = document.createElement("a");
    anchor.href = `mailto:${emailAddress}`;
    anchor.textContent = emailAddress;

    emailCell.appendChild(anchor);
}
