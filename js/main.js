const toggleButton = document.querySelector('#toggleButton');
const divList = document.querySelector('.listHolder');

// Can Toggle between Hide List and Show List
toggleButton.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleButton.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleButton.innerHTML = 'Show List';
  }
});

const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addButton');

function addLists() {
  if (addInput.value === '') {
    alert("Don't forget to add your 'To Do'!");
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createButton(li);
  }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    addLists();
  }
});

const listUl = document.querySelector('.list');
const lis = listUl.children;

function createButton(li) {
  // remove button
  const remove = document.createElement('button');
  remove.className = 'btn-icon remove';
  li.appendChild(remove);

  // down button
  const down = document.createElement('button');
  down.className = 'btn-icon down';
  li.appendChild(down);

  // up button
  const up = document.createElement('button');
  up.className = 'btn-icon up';
  li.appendChild(up);

  return li;
}

// loop to add buttons in each li
for (var i = 0; i < lis.length; i++) {
  createButton(lis[i]);
}

// buttons can move item up, down or delete item.

divList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.className === 'btn-icon remove') {
      ul.removeChild(li);
    } else if (button.className === 'btn-icon down') {
      const nextLi = li.nextElementSibling;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    } else if (button.className === 'btn-icon up') {
      const prevLi = li.previousElementSibling;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});
