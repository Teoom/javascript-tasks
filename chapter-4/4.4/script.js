"use strict"
////// 1
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
// Результатом будет ошибка


///// 2
let calculator = {
  read: () => {
    this.a = +prompt('Введите первое значение: ', "");
    this.b = +prompt('Введите второе значение: ', "");
  },

  sum: () => {
    return this.a + this.b;
  },

  mul: () => {
    return this.a * this.b;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


///// 3

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0
