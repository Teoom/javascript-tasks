"use strict"

// Создайте калькулятор при помощи конструктора, new Calculator

function Calculator() {

  this.read = () => {
    this.a = +prompt("Введите первое значени: ", "");
    this.b = +prompt("Введите второе значени: ", "");
  }

  this.sum = () => {
    return this.a + this.b;
  }
  this.mul = () => {
    return this.a * this.b;
  }
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


// Создайте new Accumulator

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = () => {
    this.value += +prompt("Введите число:", "");
  }

}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
alert(accumulator.value);