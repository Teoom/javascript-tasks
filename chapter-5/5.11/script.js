"use strict"

// Создайте дату

let date = new Date(2012, 1, 20, 3, 12);
alert(date);


// Покажите день недели

function getWeekDay(date) {
  let dayOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return dayOfWeek[date.getDay()];

}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert(getWeekDay(date));



// День недели в европейской нумерации

let date = new Date(2012, 0, 3);  // 3 января 2012 года

function getLocalDay(date) {
  return date.getDay() == 0 ? 7 : date.getDay();
}
alert(getLocalDay(date));       // вторник, нужно показать 2



// Какой день месяца был много дней назад

function getDateAgo(date, days) {
  let copyDate = new Date(date);

  return copyDate.getDate(copyDate.setDate(copyDate.getDate() - days));

}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
alert(getDateAgo(date, 365)); // 2, (2 Jan 2014)



// Последнее число месяца?

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)

  return date.getDate();
}

getLastDayOfMonth(2012, 1);


// Сколько сегодня прошло секунд?
function getSecondsToday() {

  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() * 60;
}

alert(getSecondsToday());


// Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
  let today = new Date();
  let tommorow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1)


  return Math.round((tommorow.getTime() - today.getTime()) / 1000);
}

console.log(getSecondsToTomorrow())


// Форматирование относительной даты

function formatDate(date) {
  let currentDate = new Date();
  let diff = (currentDate.getTime() / 1000) - (date.getTime() / 1000);

  if(diff < 1) {
    return 'прямо сейчас';
  } else if( diff >=  1 && diff <= 59) {
    return `${String(diff).split(".")[0]} сек. назад`
  } else if (diff >= 60 && diff <= 3540) {
    return `${diff / 60} мин. назад`
  }  else {
    let day = correct(date.getDate());
    let month = correct(date.getMonth());
    let year = String(date.getFullYear()).slice(2)
    let hour = correct(date.getHours());
    let minutes = correct(date.getMinutes());

    return `${day}.${month}.${year}, ${hour}:${minutes}`
  }

}

function correct(value) {
  return value > 10 ? value : "0" + value;
}


alert( formatDate(new Date(new Date - 1)) ); 

alert( formatDate(new Date(new Date - 30 * 1000)) );

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 


alert( formatDate(new Date(new Date - 86400 * 1000)) );