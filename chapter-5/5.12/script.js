"use strict"

// Преобразуйте объект в JSON, а затем обратно в обычный объект
let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.stringify(user);
console.log(typeof json);

let obj = JSON.parse(json)
console.log(typeof obj);



// Исключить обратные ссылки
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  participants: [{name: "John"}, {name: "Alice"}],
  place: room /
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, (key, value) => {

  return key != "" && value === meetup ? undefined : value;
}, 2))


