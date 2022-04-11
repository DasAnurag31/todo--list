var count = 2
const add = document.querySelector('.add')
add.addEventListener('click', () => {
  const item = document.querySelector('#input').value
  console.log(item)
  task(item)
  count += 1
})
function task(item) {
    // var none=document.getElementById("display")
    // none.classList.add("display")

  var mainList = document.querySelector('.main-list')
  const li = document.createElement('li')
  const div = document.createElement('div')
  div.classList.add('todo-input', 'list-item')
  const span = document.createElement('span')
  span.classList.add('todo-new-item')
  span.innerText = item
  const node = document.getElementsByClassName('cross')
  const clone = node[0].cloneNode(true)
  const check= document.getElementsByClassName('custom-radio')
  const clonecheck=check[0].cloneNode(true)
  clonecheck.id=count;
  div.append(clonecheck,span,clone)
  li.append(div)
  mainList.prepend(li)
}

window.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault()
    const item = document.querySelector('#input').value
    console.log(item)
     task(item)
     count+=1;
  }
})

function strikethrough(e,el,id)
{
  var svg= document.getElementById(id)
  var span= el.nextSibling;
  var cross = span.nextSibling;
  span.style.textDecoration="line-through"
  svg.style.backgroundColor="red";
  cross.addEventListener("click",function(e) {
    console.log(cross.parentElement);
    cross.parentElement.style.display="none"
  })
}

