const container = document.querySelector(".container");

const creationButton = document.querySelector("#create-grid-button");
const creationText = document.querySelector("#create-grid-text");
const rows = [ ]

function createGrid(size = 32) {
    for (let row of rows) {
        for (let item of row.children) {
            row.removeChild(item);
        }
        container.removeChild(row);
    }
    while (rows.length) {
        rows.pop();
    }
    
    for (let i = 0; i < size; ++i) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < size; ++j) {
            let item = document.createElement("div");
            item.classList.add("item");

            item.addEventListener("mouseover", () => item.classList.add("colored"));

            row.appendChild(item);
        }

        rows.push(row);
        container.appendChild(row);
    }
}

createGrid();

creationButton.addEventListener("click", (e) => {
    let number = parseInt(creationText.value);
    if (!Number.isInteger(number)) {
        console.log("Not a number");
    } else if (number < 1 || number > 100) {
        console.log("Value is too big or too small");
    } else {
        createGrid(number);
    }
});