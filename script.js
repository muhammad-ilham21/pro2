const openBtn = document.getElementById('open-btn');
const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
  modalContainer.style.display = 'flex';
  modalContainer.classList.remove('hide');
  modal.classList.remove('hide');
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.add('hide');
  modal.classList.add('hide');
  setTimeout(() => {
    modalContainer.style.display = 'none';
  }, 300); // match animation duration
});
