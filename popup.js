const container = document.getElementById("ladder-container");
const climbBtn = document.getElementById("climbBtn");

const SEGMENT_HEIGHT = 40;
const SCREEN_HEIGHT = 350;
const TOTAL_VARIANTS = 3;

let segments = [];
let offset = 0;

// 🔹 Create ladder segment
function createSegment() {
  const img = document.createElement("img");

  const index = Math.floor(Math.random() * TOTAL_VARIANTS) + 1;
  img.src = `assets/ladder/ladder_0${index}.png`;

  img.classList.add("ladder-segment");

  return img;
}

// 🔹 Fill initial screen
function initializeLadder() {
  const needed = Math.ceil(SCREEN_HEIGHT / SEGMENT_HEIGHT) + 2;

  for (let i = 0; i < needed; i++) {
    const segment = createSegment();
    segment.style.position = "absolute";
    segment.style.top = `${-i * SEGMENT_HEIGHT}px`;
    container.appendChild(segment);
    segments.push(segment);
  }
}

function climb() {
  offset += SEGMENT_HEIGHT;

  segments.forEach(seg => {
    const currentTop = parseInt(seg.style.top);
    seg.style.top = `${currentTop + SEGMENT_HEIGHT}px`;
  });

  // Remove off-screen segments
  segments = segments.filter(seg => {
    if (parseInt(seg.style.top) > SCREEN_HEIGHT) {
      seg.remove();
      return false;
    }
    return true;
  });

  // Add new segment at top
  const topMost = Math.min(...segments.map(seg => parseInt(seg.style.top)));
  const newSeg = createSegment();
  newSeg.style.position = "absolute";
  newSeg.style.top = `${topMost - SEGMENT_HEIGHT}px`;

  container.appendChild(newSeg);
  segments.push(newSeg);
}

climbBtn.addEventListener("click", climb);

initializeLadder();