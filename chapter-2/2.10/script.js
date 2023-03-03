"use strict"


//////////// 1

if ("0") {
  alert('Привет');
}
// код сработает и выведет "Привет"




//////////// 2

let officialName = prompt("Какое «официальное» название JavaScript?", "");

if (officialName === "ECMAScript") {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}



//////////// 3

let num = prompt("Введите число: ");
if (num > 0) {
  alert(1);
} else if (num < 0) {
  alert(-1);
} else {
  alert(0);
}



//////////// 4

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let a = 5;
let b = 5;

let result = (a + b < 4) ? 'Мало' : 'Много'; 

// result = Много





//////////// 5

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login = '';

let message = login == 'Сотрудник' ? "Привет" : login == "Директор" ? "Здравствуйте" : login == '' ? "Нет логина" : '';


// message = "Нет логина"