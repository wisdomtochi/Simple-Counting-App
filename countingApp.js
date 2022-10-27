// dom queries
const container = document.querySelector(".container");
const countEl = document.querySelector(".count-el");
const entries = document.querySelector(".entries");
const oldEntryList = document.querySelector(".old-entry-list");

let count = 0;
let entryList = [];
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("increment-btn")) {
    count++;
    countEl.innerText = count;
  } else if (e.target.classList.contains("decrement-btn")) {
    count--;
    countEl.innerText = count;
  } else if (e.target.classList.contains("save-btn")) {
    let item = count + "  -  ";
    entryList.push(count);
    localStorage.setItem("testkey", JSON.stringify(entryList));
    entries.textContent += item;
    oldEntryList.textContent += " - " + count;
    countEl.textContent = 0;
    count = 0;
  } else if (e.target.classList.contains("reset-btn")) {
    entries.textContent = "";
    countEl.innerText = 0;
    count = 0;
  } else if (e.target.classList.contains("old-entries")) {
    let test = JSON.parse(localStorage.getItem("testkey"));
    // To toggle the old entries
    if (oldEntryList.classList.contains("hide")) {
      oldEntryList.classList.remove("hide");
    } else {
      oldEntryList.classList.add("hide");
    }
    // to display from local storage
    if (test === 0) {
      oldEntryList.textContent = "";
    } else {
      let joining = test.join(" - ");
      oldEntryList.textContent = joining;
    }
  }
});
