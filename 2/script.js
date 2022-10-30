const button = document.querySelector('.button');
const pop_up = document.querySelector('.pop-up');

const isPopUpOpen = false;

button.addEventListener('click', () => {
  if (!isPopUpOpen) {
    pop_up.classList.add('pop-up_active');
  } else {
    pop_up.classList.remove('pop-up_active');
  }
});
