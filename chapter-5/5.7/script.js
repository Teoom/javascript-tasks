"use strict"

// Фильтрация уникальных элементов массива
function unique(arr) {
  return [...new Set(arr)]
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare,Krishna,:-O


// Отфильтруйте анаграммы

function aclean(arr) {
  let keys = [...new Set(arr.map(el => el.toLowerCase().split("").sort().join("")))]
  let uniq = [];
  
  for(let elem of arr) {
    let sort = elem.toLowerCase().split("").sort().join("");

    if(keys.includes(sort)) {
      uniq.push(elem)
    }

    keys = keys.filter(el => el != sort);
  }


  return uniq;
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"



// Перебираемые ключи

let map = new Map();

map.set("name", "John");

let keys = [...map.keys()];

keys.push("more");
