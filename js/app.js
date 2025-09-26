//console.log(count);

let count = 0;
let countEl = document.getElementById("count");

function increment() {
  count++;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) count--;
  countEl.innerText = count;
}

let infoEl = document.getElementById("info");
let saveCounter = 0;
function save() {
  if (saveCounter == 0) {
    // first time
    infoEl.innerText += " " + count;
  } else {
    infoEl.innerText += " - " + count;
  }

  count = 0;
  // reset count after saving
  updateCount();
  // reset the count on the page

  saveCounter++;
}

function updateCount() {
  countEl.innerText = count;
}
