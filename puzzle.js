const valentine = "VALENTINE"
const letters = valentine.split("");
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
const slot = new Array(valentine.length).fill("");

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

const statusEl = document.querySelector("#status");
const slotsEl = document.querySelector(".slots");
statusEl.textContent = "Drag the letters into the slots!";

// Create slots at the bottom
const slotElements = [];
letters.forEach((letter, index) => {
    const slotDiv = document.createElement("div");
    slotDiv.className = "slot";
    slotDiv.dataset.index = index;
    slotDiv.dataset.letter = "";
    slotElements.push(slotDiv);
    slotsEl.appendChild(slotDiv);
});

// Create tiles positioned randomly around the page
letters.forEach((letter, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.textContent = shuffledLetters[index];
    tile.dataset.letter = shuffledLetters[index];
    
    // Position randomly on the page
    const randomX = Math.random() * (window.innerWidth - 100);
    const randomY = Math.random() * (window.innerHeight - 200);
    tile.style.left = `${randomX}px`;
    tile.style.top = `${randomY}px`;
    
    document.body.appendChild(tile);
    
    // Mouse events for dragging
    tile.addEventListener("mousedown", (e) => {
        draggedElement = tile;
        offsetX = e.clientX - tile.offsetLeft;
        offsetY = e.clientY - tile.offsetTop;
    });
});

document.addEventListener("mousemove", (e) => {
    if (draggedElement) {
        draggedElement.style.left = `${e.clientX - offsetX}px`;
        draggedElement.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", (e) => {
    if (draggedElement) {
        // Check if dragged element is over a slot
        slotElements.forEach((slotEl, index) => {
            const slotRect = slotEl.getBoundingClientRect();
            const tileRect = draggedElement.getBoundingClientRect();
            
            // Check if tile overlaps with slot
            if (!(tileRect.right < slotRect.left || 
                  tileRect.left > slotRect.right || 
                  tileRect.bottom < slotRect.top || 
                  tileRect.top > slotRect.bottom)) {
                
                // Check if this is the correct letter for this slot
                if (valentine[index] === draggedElement.dataset.letter && slotEl.dataset.letter === "") {
                    slotEl.textContent = draggedElement.dataset.letter;
                    slotEl.dataset.letter = draggedElement.dataset.letter;
                    draggedElement.style.display = "none";
                    slot[index] = draggedElement.dataset.letter;
                    
                
                }
            }
        });
    }
    draggedElement = null;
});


