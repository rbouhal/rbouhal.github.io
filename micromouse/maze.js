const mazeContainer = document.getElementById("maze_container");
const mazeRows = 10; 
const mazeColumns = 10; 
let maze = [];

// Create the backend 2D array for maze
function initializeMaze() {
    maze = new Array(mazeRows);
    for (let i = 0; i < mazeRows; i++) {
        maze[i] = new Array(mazeColumns);
        for (let j = 0; j < mazeColumns; j++) {
            maze[i][j] = { top: true, right: true, bottom: true, left: true };
        }
    }
}

// Create the GUI maze structure
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
    finishCell.innerHTML = '<img src="icons/finish.png" alt="Finish" class="finish-img" width="35px">';
}

// Place the start icon at the bottom right of the maze
function placeStart() {
    const startCell = document.getElementById(`cell-${mazeRows - 1}-${mazeColumns - 1}`);
    startCell.innerHTML = '<img src="icons/mouse.png" alt="Start" width="35px" id="mouse">';
}

// Generates the random paths using a backtracking DFS algorithm
// Updated GUI and backend
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
        maze[y][x].visited = true;

        let directions = [0, 1, 2, 3];
        shuffle(directions); // Shuffle directions to ensure randomness

        // Explore neighbors
        for (let i = 0; i < directions.length; i++) {
            let nextX = x + dx[directions[i]];
            let nextY = y + dy[directions[i]];

            // Check if the neighbor is within bounds and not visited
            if (isInBounds(nextX, nextY) && !maze[nextY][nextX].visited) {
                // Carve a path between the current cell and the neighbor
                if (directions[i] === 1) { // Right
                    document.getElementById(`cell-${y}-${x}`).style.borderRight = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderLeft = "none";
                    maze[y][x].right = false;
                    maze[nextY][nextX].left = false;
                } else if (directions[i] === 3) { // Left
                    document.getElementById(`cell-${y}-${x}`).style.borderLeft = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderRight = "none";
                    maze[y][x].left = false;
                    maze[nextY][nextX].right = false;
                } else if (directions[i] === 0) { // Up
                    document.getElementById(`cell-${y}-${x}`).style.borderTop = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderBottom = "none";
                    maze[y][x].top = false;
                    maze[nextY][nextX].bottom = false;
                } else if (directions[i] === 2) { // Down
                    document.getElementById(`cell-${y}-${x}`).style.borderBottom = "none";
                    document.getElementById(`cell-${nextY}-${nextX}`).style.borderTop = "none";
                    maze[y][x].bottom = false;
                    maze[nextY][nextX].top = false;
                }

                carvePath(nextX, nextY); // Recursive call
            }
        }
    }

    carvePath(0, 0); // Start carving from the top-left corner
}

function resetVisitedStatus() {
    for (let i = 0; i < mazeRows; i++) {
        for (let j = 0; j < mazeColumns; j++) {
            maze[i][j].visited = false;
        }
    }
}


function floodFill(x, y, finishX, finishY, path = []) {
    if (x < 0 || x >= mazeColumns || y < 0 || y >= mazeRows || maze[y][x].visited) {
        return false;
    }

    maze[y][x].visited = true;
    path.push({ x, y });

    if (x === finishX && y === finishY) {
        console.log("Finish reached at:", x, y);
        return path;
    }

    console.log("Visiting:", x, y);

    // Try each direction
    if (!maze[y][x].top && floodFill(x, y - 1, finishX, finishY, path)) return path;
    if (!maze[y][x].right && floodFill(x + 1, y, finishX, finishY, path)) return path;
    if (!maze[y][x].bottom && floodFill(x, y + 1, finishX, finishY, path)) return path;
    if (!maze[y][x].left && floodFill(x - 1, y, finishX, finishY, path)) return path;

    // Backtrack: Remove the last element if all directions are blocked
    path.pop();
    return false;
}




function startFloodFill() {
    // Reset the visited status of all cells
    resetVisitedStatus();

    const startRow = mazeRows - 1; // Assuming the start is at the bottom right
    const startColumn = mazeColumns - 1;
    const finishRow = Math.floor(mazeRows / 2); // Assuming the finish is at the center
    const finishColumn = Math.floor(mazeColumns / 2);

    let path = floodFill(startColumn, startRow, finishColumn, finishRow);
    if (path && path.length > 0) {
        console.log("Path found!");
        animateMouse(path);
    } else {
        console.log("No path found");
    }
}

function animateMouse(path) {
    let step = 0;
    let lastX = null, lastY = null;

    function rotateMouse(currentX, currentY) {
        let mouseImg = document.getElementById("mouse");
        if (lastX != null && lastY != null) {
            if (currentX > lastX) { // Moving right
                mouseImg.style.transform = 'rotate(90deg)';
            } else if (currentX < lastX) { // Moving left
                mouseImg.style.transform = 'rotate(-90deg)';
            } else if (currentY > lastY) { // Moving down
                mouseImg.style.transform = 'rotate(180deg)';
            } else { // Moving up or default
                mouseImg.style.transform = 'rotate(0deg)';
            }
        }
        lastX = currentX;
        lastY = currentY;
    }

    function moveNext() {
        if (step < path.length) {
            let { x, y } = path[step];
            rotateMouse(x, y);

            // Check if the next step is the finish position
            if (step === path.length - 1) {
                let finishRow = Math.floor(mazeRows / 2);
                let finishColumn = Math.floor(mazeColumns / 2);
                let finishCell = document.getElementById(`cell-${finishRow}-${finishColumn}`);
                let mouse = document.getElementById("mouse");
                finishCell.appendChild(mouse); // Move mouse to finish cell
                return; // Stop the animation
            }

            let mouseCell = document.getElementById(`cell-${y}-${x}`);
            mouseCell.style.backgroundColor = '#404553'; // Color the path
            let mouse = document.getElementById("mouse");
            mouseCell.appendChild(mouse);
            step++;
            setTimeout(moveNext, 200); // Adjust timeout for animation speed
        }
    }
    moveNext();
}






