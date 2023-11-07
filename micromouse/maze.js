const mazeContainer = document.getElementById("maze_container");
const mazeRows = 10; // Change as needed
const mazeColumns = 10; // Change as needed
let maze = [];

// Initialize the maze array
function initializeMaze() {
    maze = new Array(mazeRows);
    for (let i = 0; i < mazeRows; i++) {
        maze[i] = new Array(mazeColumns).fill(0);
    }
}

// Create the visual maze structure
function createBlankMaze() {
    initializeMaze();
    let tableHTML = "";
    for (let i = 0; i < mazeRows; i++) {
        let rowHTML = "<tr>";
        for (let j = 0; j < mazeColumns; j++) {
            rowHTML += `<td id="cell-${i}-${j}" class="maze-cell"></td>`;
        }
        rowHTML += "</tr>";
        tableHTML += rowHTML;
    }
    mazeContainer.innerHTML = `<table>${tableHTML}</table>`;
    placeFinish(); // Place the finish icon at the center
    generateMazeDFS(); // Start the maze generation
    placeStart(); // Place the start icon at the bottom right
}

// Place the finish icon in the center of the maze
function placeFinish() {
    const centerRow = Math.floor(mazeRows / 2);
    const centerColumn = Math.floor(mazeColumns / 2);
    const finishCell = document.getElementById(`cell-${centerRow}-${centerColumn}`);
    finishCell.innerHTML = '<img src="icons/finish.png" alt="Finish" width="35px">';
}

// Place the start icon at the bottom right of the maze
function placeStart() {
    const startCell = document.getElementById(`cell-${mazeRows - 1}-${mazeColumns - 1}`);
    startCell.innerHTML = '<img src="icons/mouse.png" alt="Start" width="35px">';
}

// Implementing DFS algorithm to carve out the maze
function generateMazeDFS() {
    // Direction vectors
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];

    // Utility function to shuffle an array in-place
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Checks if the cell is within the bounds of the maze
    function isInBounds(x, y) {
        return x >= 0 && x < mazeColumns && y >= 0 && y < mazeRows;
    }

    // The recursive DFS function
    function carvePath(x, y) {
        // Mark the current cell as visited
        maze[y][x] = 1;
        let directions = [0, 1, 2, 3];
        shuffle(directions); // Shuffle directions to ensure randomness

        // Explore neighbors
        for (let i = 0; i < directions.length; i++) {
            let nextX = x + dx[directions[i]];
            let nextY = y + dy[directions[i]];

            // Check if the neighbor is within bounds and not visited
            if (isInBounds(nextX, nextY) && maze[nextY][nextX] === 0) {
                // Carve a path between the current cell and the neighbor
                if (directions[i] === 1) { // Right
                    document.getElementById(`cell-${y}-${x}`).style.borderRight = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderLeft = "none";
                } else if (directions[i] === 3) { // Left
                    document.getElementById(`cell-${y}-${x}`).style.borderLeft = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderRight = "none";
                } else if (directions[i] === 0) { // Up
                    document.getElementById(`cell-${y}-${x}`).style.borderTop = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderBottom = "none";
                } else if (directions[i] === 2) { // Down
                    document.getElementById(`cell-${y}-${x}`).style.borderBottom = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderTop = "none";
                }

                carvePath(nextX, nextY); // Recursive call
            }
        }
    }

    carvePath(0, 0); // Start carving from the top-left corner
}


createBlankMaze();
