"use strict"


// Операции с массивами

let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.floor(styles.length / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift("Рэп", "Регги");


// Сумма введённых чисел

function sumInput() {
  let numbers = [];
  let flag = true;


  while (flag) {
    let a = prompt("Введите число", "");


    if (a === "" || a === null || !isFinite(a)) flag = false;
    else numbers.push(+a);

  }


  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }

  return sum;
}

console.log(sumInput())



// Подмассив наибольшей суммы
function getMaxSubSum(arr) {
  let maxSum = 0;
  let intermediate = 0;

  for(let num of arr) {
    if(intermediate < 0) {
      intermediate = 0;
    }

    intermediate += num;
    maxSum = Math.max(maxSum, intermediate)
    
  }

  return maxSum;
}


