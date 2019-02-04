const rewq = atob('aHR0cHM6Ly9zY3JpcHQuZ29vZ2xlLmNvbS9tYWNyb3Mvcy9BS2Z5Y2J5WGJhYXF0SFZyV05PNjZHS0haSTByWU1RcjhYdHdhTUxYdzJrZ0dXazFKVGVvdVNpOC9leGVj');
const form = document.forms['submit-to-google-sheet']
const successText = document.getElementById('success');
successText.hidden = true;

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(rewq, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
successText.hidden = false;
});