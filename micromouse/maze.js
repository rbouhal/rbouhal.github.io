mazeWidth = 12;
mazeHeight = 12;
function createBlankMaze() {

    var rowIndex, colIndex;

    var table = document.createElement("table");
    var tbody = document.createElement("tbody");

    for (rowIndex = 1; rowIndex <= mazeHeight; rowIndex++) {

        var row = document.createElement("tr");

        for (colIndex = 1; colIndex <= mazeWidth; colIndex++) {

            var col = document.createElement("td");
            if (rowIndex == mazeHeight && colIndex == mazeWidth) {
                col.setAttribute("type", "start");col.style.display = "flex";
                col.style.justifyContent = "center";
                col.style.alignItems = "center";
                var mouseIcon = document.createElement("img");
                mouseIcon.setAttribute("src", "icons/mouse.png");
                mouseIcon.style.width = "35px";
                mouseIcon.style.height = "35px";
                // Append the image to the cell
                col.appendChild(mouseIcon);

            } else if (rowIndex == mazeHeight / 2 && colIndex == mazeWidth / 2) {
                col.setAttribute("type", "finish");
                // Create an img element for the finish icon
                col.style.display = "flex";
                col.style.justifyContent = "center";
                col.style.alignItems = "center";
                var finishIcon = document.createElement("img");
                finishIcon.setAttribute("src", "icons/finish.png");
                finishIcon.style.width = "35px";
                finishIcon.style.height = "35px";
                // Append the image to the cell
                col.appendChild(finishIcon);

            }
            col.setAttribute("id", "cell_" + rowIndex + "_" + colIndex);

            row.appendChild(col);

        }

        tbody.appendChild(row);

    }

    table.appendChild(tbody);

    document.getElementById("maze_container").appendChild(table);

    var exits = randomPath();
    let currentRow = mazeHeight; // Start position
    let currentCol = mazeWidth;


    var rowIndex = mazeWidth;
    var colIndex = mazeHeight;

    for (let exitIndex = 0; exitIndex < exits.length; exitIndex++) {
        let currentCell = document.getElementById("cell_" + currentRow + "_" + currentCol);

        switch (exits[exitIndex]) {
            case "left":
                currentCol = currentCol - 1;
                currentCell.style.borderLeft = "none";
                break;
            case "up":
                currentRow = currentRow - 1;
                currentCell.style.borderTop = "none";
                break;
            case "right":
                currentCell.style.borderRight = "none";
                currentCol = currentCol + 1;
                break;
            case "down":
                currentCell.style.borderBottom = "none";
                currentRow = currentRow + 1;
                break;
        }

        currentCell.style.backgroundColor = "transparent";

        // Remove the opposite border from the adjacent cell
        let adjacentCell = document.getElementById("cell_" + currentRow + "_" + currentCol);
        if (adjacentCell) {
            switch (exits[exitIndex]) {
                case "left":
                    adjacentCell.style.borderRight = "none";
                    break;
                case "up":
                    adjacentCell.style.borderBottom = "none";
                    break;
                // case "right":
                //     adjacentCell.style.borderLeft = "none";
                //     break;
                // case "down":
                //     adjacentCell.style.borderTop = "none";
                //     break;
            }
            adjacentCell.style.backgroundColor = "transparent";
        }
    }
}

// Don't revist squares
function randomPath() {
    let exits = [];
    let finishRow = Math.floor(mazeHeight / 2);
    let finishCol = Math.floor(mazeWidth / 2);
    let currentRow = mazeHeight; // Start position
    let currentCol = mazeWidth;
    while (currentRow > mazeHeight / 2 || currentCol > mazeWidth / 2) {
        let direction = Math.floor(Math.random() * 4); // Generate a number between 0 and 3

        // Move in a random direction based on the generated number
        switch (direction) {
            case 0: // Up
                if (currentRow > finishRow) {
                    currentRow--;
                    exits.push("up");
                }
                break;
            case 1: // Right
                if (currentCol < mazeWidth - 1) {
                    currentCol++;
                    exits.push("right");
                }
                break;
            case 2: // Down
                if (currentRow < mazeHeight - 1) {
                    currentRow++;
                    exits.push("down");
                }
                break;
            case 3: // Left
                if (currentCol > finishCol) {
                    currentCol--;
                    exits.push("left");
                }
                break;
        }

    }
    return exits;
}