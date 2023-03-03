"use strict"
//// 1
let user = {};
user.name = "John";
user["surname"] = "Smith";
user.name = "Pete";
delete user.name;


//// 2

function isEmpty(obj) {
  for(let key of obj) {
    return false;
  }

  return true;
}


//// 3

const user = {
  name: "John"
};

// это будет работать? 
user.name = "Pete";

// Сама переменная-объект защищена, а свойства внутри могут быть изменены. 


//// 4 Сумма свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;

for(let key in salaries) {
  sum += salaries[key];
}

console.log(sum);


//// 5
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for(let key in obj) {
    if(typeof (obj[key]) == 'number') {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);







