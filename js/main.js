const toggleButton = document.querySelector('#toggleButton');
const divList = document.querySelector('.listHolder');

toggleButton.addEventListener('click', () => {
  if (divList.getElementsByClassName.display === 'none') {
    divList.getElementsByClassName.display = 'block';
    toggleButton.innerHTML = 'Hide List';
  } else {
    divList.style.display = 'none';
    toggleButton.innerHTML = 'Show List';
  }
});
