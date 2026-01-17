const valentine = "VALENTINE"
const letters = valentine.split("");
let draggedElement = null;
let offsetX = 0;
let offsetY = 0;
const slot = new Array(valentine.length).fill("");
let puzzleComplete = false;
const noMessage = ["wrong button", "try again", "please 🥺", "please say yes for me 🥺", "🥺", "come on darling ;(", 
    "ur breaking my heart ;(", "dont say no please", ">:(", "VIVIAN YANG >:(", "baka :pout:", 
    "CHERE PLSSSSS MON AMOUR PLSSS", "please speed i need this my mom kinda homeless", "yk ur very cute u should press yes"]

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
const greetingEl = document.querySelector("#greeting");
const finalMessageEl = document.querySelector("#finalMessage");
const eqEl = document.querySelector("#qe");
statusEl.textContent = "Drag the letters into the slots!";
const yesEl = document.querySelector("#yes");
const noEl = document.querySelector("#no");
const noMessageEl = document.querySelector("#noMessage");
const yesBtn = document.querySelector("#yes");
const gameEl = document.querySelector(".scramble");
const newPageEl = document.querySelector(".newpage");

function handleNoClick() {
  if (!puzzleComplete) return;
  const index = Math.floor(Math.random() * noMessage.length);
  noMessageEl.textContent = noMessage[index];
}


// Hide greeting and final message initially
greetingEl.style.opacity = "0";
finalMessageEl.style.opacity = "0";

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
    
    // Touch events for mobile dragging
    tile.addEventListener("touchstart", (e) => {
        e.preventDefault();
        draggedElement = tile;
        const touch = e.touches[0];
        offsetX = touch.clientX - tile.offsetLeft;
        offsetY = touch.clientY - tile.offsetTop;
    });
});

// Handle both mouse and touch movement
function handleMove(clientX, clientY) {
    if (draggedElement) {
        draggedElement.style.left = `${clientX - offsetX}px`;
        draggedElement.style.top = `${clientY - offsetY}px`;
    }
}

document.addEventListener("mousemove", (e) => {
    handleMove(e.clientX, e.clientY);
});

document.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleMove(touch.clientX, touch.clientY);
});




// Handle both mouse and touch end
function handleEnd() {
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
                    
                    // Check if puzzle is complete
                    checkPuzzleComplete();
                }
            }
        });
    }
    draggedElement = null;
}

// Function to check if puzzle is complete
function checkPuzzleComplete() {
    const isComplete = slot.every(letter => letter !== "");
    if (isComplete) {
        puzzleComplete = true;
        // Hide tiles and status
        document.querySelectorAll(".tile").forEach(tile => {
            tile.style.display = "none";
        });
        statusEl.style.opacity = "0";
        
        // Show greeting and final message with fade effect
        greetingEl.style.opacity = "1";
        finalMessageEl.style.opacity = "1";
        setTimeout(() =>{
        eqEl.style.opacity = "1";}, 1000)
        setTimeout(() =>{
        yesEl.style.opacity = "1";}, 2000)
         setTimeout(() =>{
        noEl.style.opacity = "1";}, 2000)
        statusEl.style.opacity = "0";
    }
}



document.addEventListener("mouseup", handleEnd);
document.addEventListener("touchend", handleEnd);
noEl.addEventListener("click", handleNoClick);

yesBtn.addEventListener("click", () => {
  if (!puzzleComplete) return;
  gameEl.style.display = "none";
  newPageEl.style.display = "block";
});
