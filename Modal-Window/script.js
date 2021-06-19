const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
// console.log(btnShowModal);

const openModal = () => {
  // console.log('button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closedModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
  overlay.addEventListener('click', openModal);

  btnCloseModal.addEventListener('click', closedModal);
  overlay.addEventListener('click', closedModal);
}

document.addEventListener('keydown', (e) => {
  // console.log(e);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closedModal();
    }
  }
});
