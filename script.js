let btn = document.querySelector("button");
let inp = document.querySelector("input");
let addList = document.querySelector(".add-list");
let removeList = document.querySelector(".remove-list");
let nonElement = document.querySelector(".non");
let non1 = document.querySelector(".non-1");
console.log(removeList.childNodes.length);

btn.disabled = true;
inp.addEventListener("input", (value) => {
  if (value.target.value === "") {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});
// ==========================================
function replaceAdd() {
  console.log(addList.childElementCount);

  if (addList.childElementCount > 1) {
    nonElement.remove();
  } else {
    addList.append(nonElement);
  }
}
// =========================================
function replaceRemove() {
  if (removeList.childNodes.length >= 5) {
    non1.remove();
  } else {
    removeList.append(non1);
  }
}
// =========================================
btn.addEventListener("click", () => {
  replaceAdd();

  let elem = document.createElement("p");
  elem.textContent = inp.value;
  let button = document.createElement("button");
  button.className = "btn-plus";
  button.textContent = "+";
  elem.append(button);

  addList.appendChild(elem);
  inp.value = "";
  btn.disabled = true;
  console.log(elem);
});

addList.addEventListener("click", (e) => {
  if (e.target.className === "btn-plus") {
    let item = e.target.parentElement;
    addList.removeChild(item);
    e.target.className = "btn-del";
    e.target.textContent = "x";
    removeList.appendChild(item);
    replaceAdd();
    replaceRemove();
    console.log(item);
  }
});

removeList.addEventListener("click", (ev) => {
  if (ev.target.className === "btn-del") {
    let del = ev.target.parentElement;
    removeList.removeChild(del);
    replaceRemove();
  }
});
