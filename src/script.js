import keysList from './js/keysList.js';

localStorage.setItem('lang', 'ru');

function initKeyBoard() {
  const mainBlock = document.createElement('main');
  const mainTitle = document.createElement('h1');
  const textareaField = document.createElement('textarea');
  const keyboardBlock = document.createElement('div');
  const keyboardRow1 = document.createElement('div');
  const keyboardRow2 = document.createElement('div');
  const keyboardRow3 = document.createElement('div');
  const keyboardRow4 = document.createElement('div');
  const keyboardRow5 = document.createElement('div');
  const notice = document.createElement('p');

  mainBlock.classList.add('main');
  mainTitle.classList.add('main__title');
  textareaField.classList.add('main__input');
  keyboardBlock.classList.add('main__keyboard', 'keyboard__wrapper');
  keyboardRow1.classList.add('keyboard__row');
  keyboardRow2.classList.add('keyboard__row');
  keyboardRow3.classList.add('keyboard__row');
  keyboardRow4.classList.add('keyboard__row');
  keyboardRow5.classList.add('keyboard__row');
  notice.classList.add('main__notice');

  mainTitle.innerHTML = 'Virtual keyboard (Windows)';
  notice.innerHTML = 'Для переключения языка использовать комбинацию ctrl + shift';

  textareaField.rows = '10';
  textareaField.cols = '45';
  textareaField.name = 'text';
  textareaField.autofocus = true;

  for (let i = 0; i < keysList.length;) {
    const keyItem = document.createElement('div');
    keyItem.setAttribute('id', keysList[i].code);
    if (i < 14) {
      if (i === 13) {
        keyItem.classList.add('keyboard__btn', 'btn-backspace');
      } else {
        keyItem.classList.add('keyboard__btn', 'btn-key');
      }
      keyboardRow1.appendChild(keyItem);
    } else if (i < 28) {
      if (i === 14) {
        keyItem.classList.add('keyboard__btn', 'btn-tab');
      } else if (i === 27) {
        keyItem.classList.add('keyboard__btn', 'btn-del');
      } else {
        keyItem.classList.add('keyboard__btn', 'btn-key');
      }

      keyboardRow2.appendChild(keyItem);
    } else if (i < 42) {
      if (i === 28) {
        keyItem.classList.add('keyboard__btn', 'btn-caps');
      } else if (i === 41) {
        keyItem.classList.add('keyboard__btn', 'btn-enter');
      } else {
        keyItem.classList.add('keyboard__btn', 'btn-key');
      }

      keyboardRow3.appendChild(keyItem);
    } else if (i < 55) {
      if (i === 42 || i === 54) {
        keyItem.classList.add('keyboard__btn', 'btn-shift');
      } else {
        keyItem.classList.add('keyboard__btn', 'btn-key');
      }

      keyboardRow4.appendChild(keyItem);
    } else if (i < 64) {
      if (i === 58) {
        keyItem.classList.add('keyboard__btn', 'btn-space');
      } else {
        keyItem.classList.add('keyboard__btn', 'btn-key');
      }

      keyboardRow5.appendChild(keyItem);
    }

    if (localStorage.getItem('lang') === 'ru') {
      keyItem.innerHTML = keysList[i].keyRuDown;
    } else if (localStorage.getItem('lang') === 'en') {
      keyItem.innerHTML = keysList[i].keyEnDown;
    }
    i += 1;
  }

  mainBlock.appendChild(mainTitle);
  mainBlock.appendChild(textareaField);
  mainBlock.appendChild(keyboardBlock);
  keyboardBlock.appendChild(keyboardRow1);
  keyboardBlock.appendChild(keyboardRow2);
  keyboardBlock.appendChild(keyboardRow3);
  keyboardBlock.appendChild(keyboardRow4);
  keyboardBlock.appendChild(keyboardRow5);
  keyboardBlock.appendChild(notice);
  document.body.prepend(mainBlock);
}
initKeyBoard();

const inputWindow = document.querySelector('.main__input');
document.addEventListener('click', () => {
  inputWindow.focus();
});

function keyDownHandler(event) {
  event.preventDefault();
  if (event.key === 'Backspace'
       || event.key === 'Tab'
       || event.key === 'Delete'
       || event.key === 'CapsLock'
       || event.key === 'Enter'
       || event.key === 'Shift'
       || event.key === 'Control'
       || event.key === 'Meta'
       || event.key === 'Alt'
       || event.key === 'Space'
       || event.key === 'ArrowLeft'
       || event.key === 'ArrowUp'
       || event.key === 'ArrowDown'
       || event.key === 'ArrowRight') {
    document.querySelector(`#${event.code}`).classList.add('active');
  } else {
    inputWindow.value += event.key;
    if (document.querySelector(`#${event.code}`) != null) {
      document.querySelector(`#${event.code}`).classList.add('active');
    }
  }
  inputWindow.focus();
}

function keyUpHandler(event) {
  if (document.querySelector(`#${event.code}`) != null) {
    document.querySelector(`#${event.code}`).classList.remove('active');
  }
}

inputWindow.addEventListener('keydown', keyDownHandler);
inputWindow.addEventListener('keyup', keyUpHandler);
