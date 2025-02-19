//your JS code here. If required.
const searchDiv = document.querySelector('.search');
const searchInput = document.querySelector('.input');
const searchButton = document.querySelector('.btn');

searchButton.addEventListener('click', function() {
  searchDiv.classList.add('active');  // Add the 'active' class to change styles
  searchInput.focus();  // Focus on the input field when button is clicked
});
