"use strict"

let i = 3;

while (i) {
  alert(i--);  // Последнее выведенное значение 1 
}


let i = 0;
while (++i < 5) alert(i); // 1 2 3 4

let i = 0;
while (i++ < 5) alert(i); //  1 2 3 4 5




for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);   // 2 4 6 8 10
  }
}


// Переписать на while
for (let i = 0; i < 3; i++) {
  alert(`number ${i}!`);
}

while (i < 3) {
  alert(`number ${i}`);
  i++;
}



let number;

do {
  number = +prompt("Введите число больше 100:", "");
} while (number <= 100);




let n = 20;

for (let i = 2; i <= n; i++) {
  let count = 0;

  for (let j = 0; j <= i; j++) {
    if (i % j == 0) {
      count += 1;
    }
  }

  if (count <= 2) {
    alert(i)
  }
}