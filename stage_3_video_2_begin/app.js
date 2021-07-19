const nameInput = document.getElementById('name');
const messageTextArea = document.getElementById('message');

//nameInput.addEventListener('click', e => e.target.className = 'highlight');

const focusHandler = event => {
  event.target.className = 'highlight'
};

const blurHandler = event => {
  event.target.className = ''
};

nameInput.addEventListener('focus', focusHandler);

nameInput.addEventListener('blur', blurHandler);

messageTextArea.addEventListener('focus', focusHandler);

messageTextArea.addEventListener('blur', blurHandler);
