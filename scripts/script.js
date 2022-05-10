// 1

/* const firstNumbers = +prompt(" Введите первое число диапазона");
const twoNumbers = +prompt(" Введите второе число диапазона");

function range(num, num2) {
  let subNym = num;
  let subNym2 = num2;
  if (num2 - num >= 5 && num2 > num) {
    for (let i = 0; i <= num2 - num; i++) {
      console.log(subNym++);
    }
  } else if (num - num2 >= 5 && num > num2) {
    for (let i = 0; i <= num - num2; i++) {
      console.log(subNym--);
    }
  } else {
    return alert("Неверно введены данные");
  }
}

range(firstNumbers, twoNumbers); */

// 2

/* const truePinCode = "0001";
const truePukCode = "4444";

function checkCode() {
  for (let i = 1; i <= 3; i++) {
    let enterCode = prompt("Введите PIN-код:");
    if ((enterCode === truePinCode) && !isNaN(enterCode)) {
      return alert("Вы ввели правильный PIN-код");
    } else {
      alert("Введен неверный PIN-код");
    }
  }
  for (let i = 1; i <= 3; i++) {
    let enterCode = prompt("Введите PUK-код:");
    if (enterCode === truePukCode && !isNaN(enterCode)) {
      return alert("Вы ввели правильный PUK-код");
    } else {
      alert("Введен неверный PUK-код");
    }
  }
}

checkCode(); */

// 3

/* const firstNumbers = +prompt(" Введите первое число диапазона");
const twoNumbers = +prompt(" Введите второе число диапазона");

function range(num, num2) {
  let subNym = num;
  let subNym2 = num2;

  if (num2 - num >= 5 && num2 > num) {
    for (let i = 0; i <= num2 - num; i++) {
      let moreLess = (subNym > 100) ? "больше ста" : "меньше ста";
      let evenness = (subNym % 2 == 0 ) ? "чётное число" : "нечётное число";
      let positive = (subNym > 0) ? "положительное число" : "отрицательное число" ;
      console.log(`${subNym++}, ${moreLess}, ${evenness}, ${positive}.`);
    }
  } else if (num - num2 >= 5 && num > num2) {
    for (let i = 0; i <= num - num2; i++) {
      let moreLess = (subNym2 > 100) ? "больше ста" : "меньше ста";
      let evenness = (subNym2 % 2 == 0 ) ? "чётное число" : "нечётное число";
      let positive = (subNym2 > 0) ? "положительное число" : "отрицательное число" ;
      console.log(`${subNym2++}, ${moreLess}, ${evenness}, ${positive}.`);
    }
  } else {
    return alert("Неверно введены данные");
  }
}
range(firstNumbers, twoNumbers); */

// 4

/* const firstNumbers = +prompt(" Введите первое число диапазона");
const twoNumbers = +prompt(" Введите второе число диапазона");

function range(num, num2) {
  let subNym = num;
  let subNym2 = num2;


  if (num2 > num) {
    for (let i = 0; i <= num2 - num; i++) {
      if (i === 7){
        return;
      }
    }
  } else if (num > num2) {
    for (let i = 0; i <= num - num2; i++) {
      if (i === 7){
        return;
      }
    }
  } else {
    return alert("Неверно введены данные");
  }
}
range(firstNumbers, twoNumbers); */
