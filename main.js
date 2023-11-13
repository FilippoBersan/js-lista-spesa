'use strict';

const lista = document.querySelector('.list');

const spesa = [
  'Pane',
  'Insalata',
  'Riso',
  'Pizza',
  'Uova',
  'Patate',
  'Farina',
  'Kiwi',
  'Vino',
];

let i = 0;
let text = '';
while (spesa[i]) {
  text += spesa[i];
  i++;

  const prodotto = document.createElement('li');
  prodotto.classList.add('prodotto');
  prodotto.textContent = spesa[i];
  lista.append(prodotto);
}
