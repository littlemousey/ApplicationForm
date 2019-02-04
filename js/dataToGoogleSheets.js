const rewq = googleSheetsAPI;
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