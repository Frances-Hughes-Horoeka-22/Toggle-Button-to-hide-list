const toggleButton = document.querySelector('#toggleButton');
const divList = document.querySelector('.listHolder');

toggleButton.addEventListener('click', () => {
  if (divList.style.display === 'none') {
    divList.style.display = 'block';
    toggleButton.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleButton.innerHTML = 'Show List';
  }
});
