const valentine = "VALENTINE"
const letters = valentine.split("");
const slot = new Array(valentine.length).fill("");
let draggedElement = null;

// Shuffle function to randomize letter order
function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const shuffledLetters = shuffle(letters);



function dragStart(event){
    draggedElement = event.target;
    const draggedLetter = event.target.dataset.letter;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedLetter);
    event.target.style.opacity = "0.5";
}

function dragEnd(event){
    event.target.style.opacity = "1";
}

function allowDrop(event){
    event.preventDefault();
}

function placeTiles(letter, slotIndex) {
  // Only allow tile to be placed in correct slot
  if (valentine[slotIndex] === letter && slot[slotIndex] === "") {
    slot[slotIndex] = letter;
    return true;
  }
  return false;
}



function drop(event){
    event.preventDefault();
    const letter = event.dataTransfer.getData("text/plain");
    const slotIndex = event.target.dataset.index;
    const success = placeTiles(letter, slotIndex);
    
    if (success && draggedElement) {
        // Display the letter in the slot and hide the tile
        event.target.textContent = letter;
        draggedElement.style.display = "none";
    }
    
    draggedElement = null;
}

function filled(){
    return slot.every(letter => letter !== "");
}

function isCorrect(){
    return slot.join("") === valentine;
}

const rackEl = document.querySelector(".rack");
const slotEl = document.querySelector(".slots");
const statusEl = document.querySelector("#status");


letters.forEach((letter, index) => {
    const tile = document.createElement("div");
    // Position tiles in a line below the slots with more spacing (80px = 50px tile + 30px gap)
    const x = index * 80;
    const y = 200; // Distance below slots
    tile.style.left = `${x}px`;
    tile.style.top = `${y}px`;
    tile.className = "tile";
    tile.textContent = shuffledLetters[index];
    tile.draggable = true;
    tile.dataset.letter = shuffledLetters[index];
    rackEl.appendChild(tile);
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragend", dragEnd);
});

for(let i = 0; i < valentine.length; i++){
    const slotDiv = document.createElement("div");
    slotDiv.className = "slot";
    slotDiv.dataset.index = i;
    slotDiv.addEventListener("dragover", allowDrop);
    slotDiv.addEventListener("drop",drop)
    slotEl.appendChild(slotDiv);
}


