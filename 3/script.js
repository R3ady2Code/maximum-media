const rightToggle = document.querySelector('.toggle__item-right');
const leftToggle = document.querySelector('.toggle__item-left');

const toggles = document.querySelectorAll('.toggle__item');

function onClickToToggle(e) {
  if (e.target.innerHTML === rightToggle.innerHTML) {
    leftToggle.classList.remove('toggle__item_active');
    rightToggle.classList.add('toggle__item_active');
  } else {
    rightToggle.classList.remove('toggle__item_active');
    leftToggle.classList.add('toggle__item_active');
  }
}

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener('click', (e) => onClickToToggle(e));
}
