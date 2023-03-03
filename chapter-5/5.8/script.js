"use strict"



// Хранение отметок "не прочитано"

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];

let read = new WeakSet();

read.add(messages[0]);
read.add(messages[1]);


for(let i = 0; i < messages.length; i++) {
  let check = checkMessages(messages[i], read)
  console.log(check)
  if(check) {
    messages = messages.filter(el => el !== messages[i]);
    i--;
  }
}

function checkMessages(mes, collection) {
  let isCheked = collection.has(mes);

  return isCheked;
}



// Хранение времени прочтения

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" }
];


let date = new WeakMap();


date.set(messages[0], new Date());
date.set(messages[1], new Date());
date.set(messages[2], new Date());

console.log(date.has(messages[0]))