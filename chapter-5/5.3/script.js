"use strict"

// Сделать первый символ заглавным

function ucFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : false;
}

alert(ucFirst("вася"));


// Усечение строки
function truncate(str, maxlenght) {
  if (str.length > maxlenght) {
    return str.slice(0, maxlenght - 1) + "...";
  }

  return str;
}

alert(
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
)


alert(
  truncate("Всем привет!", 20)
)



// Выделить число
function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 ); 