var count = 2;

// taking a new user todo
const add = document.querySelector(".add");
add.addEventListener("click", () => {
  const item = document.querySelector("#input").value;
  task(item);
  count += 1;
});

// adding a new todo in the main list
function task(item) {
  var mainList = document.querySelector(".main-list");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("todo-input", "list-item");
  const span = document.createElement("span");
  span.classList.add("todo-new-item");
  span.innerText = item;
  const node = document.getElementsByClassName("cross");
  const clone = node[0].cloneNode(true);
  const check = document.getElementsByClassName("custom-radio");
  const clonecheck = check[0].cloneNode(true);
  clonecheck.id = count;
  clone.id = `cross${count}`

  div.append(clonecheck, span, clone);
  li.append(div);
  mainList.prepend(li);

  // to clear the input after adding a new element
  document.querySelector('#input').value = "";
}

window.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    const item = document.querySelector("#input").value;
    task(item);
    count += 1;
  }
});
 
// to stike and change state
function strikethrough(e, el, id) {
  var svg = document.getElementById(id);
  var span = el.nextSibling;
  span.style.textDecoration = "line-through";
  svg.style.backgroundColor = 'linear-gradient(#57ddff,#c058f3)';
}

function cut(e, el, id) {
  const cross = document.getElementById(id);
  cross.parentElement.style.display = "none";
}












