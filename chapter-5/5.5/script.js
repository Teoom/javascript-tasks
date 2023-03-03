"use strict"

function camelize(str) {

  return str.split('-')
    .map((word, i) => i > 0 ? word.slice(0, 1).toUpperCase() + word.slice(1) : word)
    .join("");
}

console.log(camelize("background-color"));


// Фильтрация по диапазону

function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}

let arr = [5, 3, 8, 1]
console.log(filterRange(arr, 1, 4));




// Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr > arr[i]) {
      arr.slice(i, 1);

    }
  }
}
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
alert(arr);



// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];

arr = arr.sort((a, b) => b - a);

alert(arr); // 8, 5, 2, 1, -10



// Скопировать и отсортировать массив
function copySorted(arr) {
  return arr.slice().sort();
}


let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr); // HTML, JavaScript, CSS (без изменений)


// Создать расширяемый калькулятор
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = str => {
   
    let args = str.split(' ');
    let a = +args[0];
    let b = +args[2];
    let operator = args[1];
    
    if(!(operator in this.methods)) {
      return "Оператор не найден";
    }

    return this.methods[operator](a, b);

  }

  this.addMethod = (name, func) => {
    this.methods[name] = func;
  }

}

let calc = new Calculator;

alert(calc.calculate("3 + 7"));
alert(calc.calculate("7 - 3"));

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");

alert(result); 


// Трансформировать в массив имён


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(user => user.name) 

alert( names ); // Вася, Петя, Маша



// Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => {
  return {fullName: `${user.name} ${user.surname}`, id: user.id}
})

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин




// Отсортировать пользователей по возрасту
function sortByAge(users) {
  users.sort((a, b) => {
    console.log(a, b)
    return a.age > b.age ? 1 : -1
  });
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя



// Перемешайте массив
function shuffle(array) {
  return array.sort(() => Math.random() * array.length - 1 );
}
let arr = [1, 2, 3];

console.log(shuffle(arr))    



// Получить средний возраст
function getAverageAge(users) {
  let avrg = users.reduce((acc, user) => acc + user.age, 0) / users.length;

  return avrg;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



// Оставить уникальные элементы массива
function unique(arr) {
 let uniq = [];

 for(let elem of arr) {
  if(!uniq.includes(elem)) {
    uniq.push(elem)
  }
 }

 return uniq.
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O




// Создайте объект с ключами из массива
function groupById(arr) {
  return arr.reduce((acc, el) => {
    acc[el.id] = el;
    return acc;
  }, {});
}

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},  
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);
console.log(usersById)

/*
// после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/