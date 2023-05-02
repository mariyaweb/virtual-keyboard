const keysList = [
  {
    code: 'Backquote',
    keyEnDown: '~',
    keyEnUp: '~',
    keyRuDown: 'ё',
    keyRuUp: 'Ё',
    keyCode: 192,
    row: 1,
  },
  {
    code: 'Digit1',
    keyEnDown: '1',
    keyEnUp: '!',
    keyRuDown: '1',
    keyRuUp: '!',
    keyCode: 49,
    row: 1,
  },
  {
    code: 'Digit2',
    keyEnDown: '2',
    keyEnUp: '@',
    keyRuDown: '2',
    keyRuUp: '"',
    keyCode: 50,
    row: 1,
  },
  {
    code: 'Digit3',
    keyEnDown: '3',
    keyEnUp: '#',
    keyRuDown: '3',
    keyRuUp: '№',
    keyCode: 51,
    row: 1,
  },
  {
    code: 'Digit4',
    keyEnDown: '4',
    keyEnUp: '$',
    keyRuDown: '4',
    keyRuUp: ';',
    keyCode: 52,
    row: 1,
  },
  {
    code: 'Digit5',
    keyEnDown: '5',
    keyEnUp: '%',
    keyRuDown: '5',
    keyRuUp: '%',
    keyCode: 53,
    row: 1,
  },
  {
    code: 'Digit6',
    keyEnDown: '6',
    keyEnUp: '^',
    keyRuDown: '6',
    keyRuUp: ':',
    keyCode: 54,
    row: 1,
  },
  {
    code: 'Digit7',
    keyEnDown: '7',
    keyEnUp: '&',
    keyRuDown: '7',
    keyRuUp: '?',
    keyCode: 55,
    row: 1,
  },
  {
    code: 'Digit8',
    keyEnDown: '8',
    keyEnUp: '*',
    keyRuDown: '8',
    keyRuUp: '*',
    keyCode: 56,
    row: 1,
  },
  {
    code: 'Digit9',
    keyEnDown: '9',
    keyEnUp: '(',
    keyRuDown: '9',
    keyRuUp: '(',
    keyCode: 57,
    row: 1,
  },
  {
    code: 'Digit0',
    keyEnDown: '0',
    keyEnUp: ')',
    keyRuDown: '0',
    keyRuUp: ')',
    keyCode: 48,
    row: 1,
  },
  {
    code: 'Minus',
    keyEnDown: '-',
    keyEnUp: '_',
    keyRuDown: '-',
    keyRuUp: '_',
    keyCode: 189,
    row: 1,
  },
  {
    code: 'Equal',
    keyEnDown: '=',
    keyEnUp: '+',
    keyRuDown: '=',
    keyRuUp: '+',
    keyCode: 187,
    row: 1,
  },
  {
    code: 'Backspace',
    keyEnDown: 'Backspace',
    keyEnUp: 'Backspace',
    keyRuDown: 'Backspace',
    keyRuUp: 'Backspace',
    keyCode: 8,
    row: 1,
  },
  {
    code: 'Tab',
    keyEnDown: 'Tab',
    keyEnUp: 'Tab',
    keyRuDown: 'Tab',
    keyRuUp: 'Tab',
    keyCode: 9,
    row: 2,
  },
  {
    code: 'KeyQ',
    keyEnDown: 'q',
    keyEnUp: 'Q',
    keyRuDown: 'й',
    keyRuUp: 'Й',
    keyCode: 81,
    row: 2,
  },
  {
    code: 'KeyW',
    keyEnDown: 'w',
    keyEnUp: 'W',
    keyRuDown: 'ц',
    keyRuUp: 'Ц',
    keyCode: 87,
    row: 2,
  },
  {
    code: 'KeyE',
    keyEnDown: 'e',
    keyEnUp: 'E',
    keyRuDown: 'у',
    keyRuUp: 'У',
    keyCode: 69,
    row: 2,
  },
  {
    code: 'KeyR',
    keyEnDown: 'r',
    keyEnUp: 'R',
    keyRuDown: 'к',
    keyRuUp: 'К',
    keyCode: 82,
    row: 2,
  },
  {
    code: 'KeyT',
    keyEnDown: 't',
    keyEnUp: 'T',
    keyRuDown: 'е',
    keyRuUp: 'Е',
    keyCode: 84,
    row: 2,
  },
  {
    code: 'KeyY',
    keyEnDown: 'y',
    keyEnUp: 'Y',
    keyRuDown: 'н',
    keyRuUp: 'Н',
    keyCode: 89,
    row: 2,
  },
  {
    code: 'KeyU',
    keyEnDown: 'u',
    keyEnUp: 'U',
    keyRuDown: 'г',
    keyRuUp: 'Г',
    keyCode: 85,
    row: 2,
  },
  {
    code: 'KeyI',
    keyEnDown: 'i',
    keyEnUp: 'I',
    keyRuDown: 'ш',
    keyRuUp: 'Ш',
    keyCode: 73,
    row: 2,
  },
  {
    code: 'KeyO',
    keyEnDown: 'o',
    keyEnUp: 'O',
    keyRuDown: 'щ',
    keyRuUp: 'Щ',
    keyCode: 79,
    row: 2,
  },
  {
    code: 'KeyP',
    keyEnDown: 'p',
    keyEnUp: 'P',
    keyRuDown: 'з',
    keyRuUp: 'З',
    keyCode: 80,
    row: 2,
  },
  {
    code: 'BracketLeft',
    keyEnDown: '[',
    keyEnUp: '{',
    keyRuDown: 'х',
    keyRuUp: 'Х',
    keyCode: 219,
    row: 2,
  },
  {
    code: 'BracketRight',
    keyEnDown: ']',
    keyEnUp: '}',
    keyRuDown: 'ъ',
    keyRuUp: 'Ъ',
    keyCode: 221,
    row: 2,
  },
  {
    code: 'Delete',
    keyEnDown: 'Del',
    keyEnUp: 'Del',
    keyRuDown: 'Del',
    keyRuUp: 'Del',
    keyCode: 46,
    row: 2,
  },
  {
    code: 'CapsLock',
    keyEnDown: 'CapsLock',
    keyEnUp: 'CapsLock',
    keyRuDown: 'CapsLock',
    keyRuUp: 'CapsLock',
    keyCode: 20,
    row: 3,
  },
  {
    code: 'KeyA',
    keyEnDown: 'a',
    keyEnUp: 'A',
    keyRuDown: 'ф',
    keyRuUp: 'Ф',
    keyCode: 65,
    row: 3,
  },
  {
    code: 'KeyS',
    keyEnDown: 's',
    keyEnUp: 'S',
    keyRuDown: 'ы',
    keyRuUp: 'Ы',
    keyCode: 83,
    row: 3,
  },
  {
    code: 'KeyD',
    keyEnDown: 'd',
    keyEnUp: 'D',
    keyRuDown: 'в',
    keyRuUp: 'В',
    keyCode: 68,
    row: 3,
  },
  {
    code: 'KeyF',
    keyEnDown: 'f',
    keyEnUp: 'F',
    keyRuDown: 'а',
    keyRuUp: 'А',
    keyCode: 70,
    row: 3,
  },
  {
    code: 'KeyG',
    keyEnDown: 'g',
    keyEnUp: 'G',
    keyRuDown: 'п',
    keyRuUp: 'П',
    keyCode: 71,
    row: 3,
  },
  {
    code: 'KeyH',
    keyEnDown: 'h',
    keyEnUp: 'H',
    keyRuDown: 'р',
    keyRuUp: 'Р',
    keyCode: 72,
    row: 3,
  },
  {
    code: 'KeyJ',
    keyEnDown: 'j',
    keyEnUp: 'J',
    keyRuDown: 'о',
    keyRuUp: 'О',
    keyCode: 74,
    row: 3,
  },
  {
    code: 'KeyK',
    keyEnDown: 'k',
    keyEnUp: 'K',
    keyRuDown: 'л',
    keyRuUp: 'Л',
    keyCode: 75,
    row: 3,
  },
  {
    code: 'KeyL',
    keyEnDown: 'l',
    keyEnUp: 'L',
    keyRuDown: 'д',
    keyRuUp: 'Д',
    keyCode: 76,
    row: 3,
  },
  {
    code: 'Semicolon',
    keyEnDown: ';',
    keyEnUp: ':',
    keyRuDown: 'ж',
    keyRuUp: 'Ж',
    keyCode: 186,
    row: 3,
  },
  {
    code: 'Quote',
    keyEnDown: "'",
    keyEnUp: '"',
    keyRuDown: 'э',
    keyRuUp: 'Э',
    keyCode: 222,
    row: 3,
  },
  {
    code: 'Backslash',
    keyEnDown: '\\',
    keyEnUp: '|',
    keyRuDown: '\\',
    keyRuUp: '/',
    keyCode: 220,
    row: 3,
  },
  {
    code: 'Enter',
    keyEnDown: 'Enter',
    keyEnUp: 'Enter',
    keyRuDown: 'Enter',
    keyRuUp: 'Enter',
    keyCode: 13,
    row: 3,
  },
  {
    code: 'ShiftLeft',
    keyEnDown: 'Shift',
    keyEnUp: 'Shift',
    keyRuDown: 'Shift',
    keyRuUp: 'Shift',
    keyCode: 16,
    row: 4,
  },
  {
    code: 'KeyZ',
    keyEnDown: 'z',
    keyEnUp: 'Z',
    keyRuDown: 'я',
    keyRuUp: 'Я',
    keyCode: 90,
    row: 4,
  },
  {
    code: 'KeyX',
    keyEnDown: 'x',
    keyEnUp: 'X',
    keyRuDown: 'ч',
    keyRuUp: 'Ч',
    keyCode: 88,
    row: 4,
  },
  {
    code: 'KeyC',
    keyEnDown: 'c',
    keyEnUp: 'C',
    keyRuDown: 'с',
    keyRuUp: 'С',
    keyCode: 67,
    row: 4,
  },
  {
    code: 'KeyV',
    keyEnDown: 'v',
    keyEnUp: 'V',
    keyRuDown: 'м',
    keyRuUp: 'М',
    keyCode: 86,
    row: 4,
  },
  {
    code: 'KeyB',
    keyEnDown: 'b',
    keyEnUp: 'B',
    keyRuDown: 'и',
    keyRuUp: 'И',
    keyCode: 66,
    row: 4,
  },
  {
    code: 'KeyN',
    keyEnDown: 'n',
    keyEnUp: 'N',
    keyRuDown: 'т',
    keyRuUp: 'Т',
    keyCode: 78,
    row: 4,
  },
  {
    code: 'KeyM',
    keyEnDown: 'm',
    keyEnUp: 'M',
    keyRuDown: 'ь',
    keyRuUp: 'Ь',
    keyCode: 77,
    row: 4,
  },
  {
    code: 'Comma',
    keyEnDown: ',',
    keyEnUp: '<',
    keyRuDown: 'б',
    keyRuUp: 'Б',
    keyCode: 188,
    row: 4,
  },
  {
    code: 'Period',
    keyEnDown: '.',
    keyEnUp: '>',
    keyRuDown: 'ю',
    keyRuUp: 'Ю',
    keyCode: 190,
    row: 4,
  },
  {
    code: 'Slash',
    keyEnDown: '/',
    keyEnUp: '?',
    keyRuDown: '.',
    keyRuUp: '.',
    keyCode: 191,
    row: 4,
  },
  {
    code: 'ArrowUp',
    keyEnDown: '↑',
    keyEnUp: '↑',
    keyRuDown: '↑',
    keyRuUp: '↑',
    keyCode: 38,
    row: 4,
  },
  {
    code: 'ShiftRight',
    keyEnDown: 'Shift',
    keyEnUp: 'Shift',
    keyRuDown: 'Shift',
    keyRuUp: 'Shift',
    keyCode: 16,
    row: 4,
  },
  {
    code: 'ControlLeft',
    keyEnDown: 'Ctrl',
    keyEnUp: 'Ctrl',
    keyRuDown: 'Ctrl',
    keyRuUp: 'Ctrl',
    keyCode: 17,
    row: 5,
  },
  {
    code: 'MetaLeft',
    keyEnDown: 'Win',
    keyEnUp: 'Win',
    keyRuDown: 'Win',
    keyRuUp: 'Win',
    keyCode: 91,
    row: 5,
  },
  {
    code: 'AltLeft',
    keyEnDown: 'Alt',
    keyEnUp: 'Alt',
    keyRuDown: 'Alt',
    keyRuUp: 'Alt',
    keyCode: 18,
    row: 5,
  },
  {
    code: 'Space',
    keyEnDown: '',
    keyEnUp: '',
    keyRuDown: '',
    keyRuUp: '',
    keyCode: 32,
    row: 5,
  },
  {
    code: 'AltRight',
    keyEnDown: 'Alt',
    keyEnUp: 'Alt',
    keyRuDown: 'Alt',
    keyRuUp: 'Alt',
    keyCode: 18,
    row: 5,
  },
  {
    code: 'ControlRight',
    keyEnDown: 'Ctrl',
    keyEnUp: 'Ctrl',
    keyRuDown: 'Ctrl',
    keyRuUp: 'Ctrl',
    keyCode: 17,
    row: 5,
  },
  {
    code: 'ArrowLeft',
    keyEnDown: '←',
    keyEnUp: '←',
    keyRuDown: '←',
    keyRuUp: '←',
    keyCode: 37,
    row: 5,
  },
  {
    code: 'ArrowDown',
    keyEnDown: '↓',
    keyEnUp: '↓',
    keyRuDown: '↓',
    keyRuUp: '↓',
    keyCode: 40,
    row: 5,
  },
  {
    code: 'ArrowRight',
    keyEnDown: '→',
    keyEnUp: '→',
    keyRuDown: '→',
    keyRuUp: '→',
    keyCode: 39,
    row: 5,
  },
];
export default keysList;
