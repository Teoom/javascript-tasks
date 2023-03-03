"use strict"


// Деструктурирующее присваивание

let user = {
  name: "John",
  years: 30
};

let {name, years, isAdmin = false} = user;


// Максимальная зарплата

let salaries = {
  John: 100,
  Pete: 300,
  Peter: 300,
  Mary: 250
};

function topSalary(salaries) {
  let nameWorker = null;
  let maxSalary = 0;

  for(let [name, salary] of Object.entries(salaries)) 
  if(salary > maxSalary) {
    maxSalary = salary;
    nameWorker = name;
  }

  return nameWorker;
}

console.log(topSalary(salaries));

