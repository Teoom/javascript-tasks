alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1, 2
alert(1 && null && 2);  // null
alert(alert(1) && alert(2)); // 1, underfined
alert(null || 2 && 3 || 4); // 3



if (age >= 14 && age <= 90) {
  alert('age в диапозоне');
} else {
  alert('age не в диапозоне');
}



if (!(age >= 14 && age <= 90)) {
  alert('age не в диапозоне');
} else {
  alert('age в диапозоне');
}


if (age < 14 || age > 90) {
  alert('age не в диапозоне');
} else {
  alert('age в диапозоне');
}



if (-1 || 0) alert( 'first' ); // Выполнится
if (-1 && 0) alert( 'second' ); // Не выполнится
if (null || -1 && 1) alert( 'third' ); // Не выполнится




let login = prompt("Введите логин: ", "");

if(login === "admin") {
  let password = prompt("Введите пароль:", "");

  if(password === "Я главный") {
    alert("Здравствуйте!");
  } else if(password === "" ||password === null ) {
    alert("Отменено")
  } else {
    alert("Неверный пароль")
  }

} else if(login === "" || login === null) {
  alert("Отмемено");
} else {
  alert("Я вас не знаю")
}

