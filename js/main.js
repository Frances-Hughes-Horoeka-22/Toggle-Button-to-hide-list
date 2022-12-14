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
