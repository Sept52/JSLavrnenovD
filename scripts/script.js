// 1

/* let username = prompt("Введите ваше имя");
let surname = prompt("Введите вашу фамилию");
let nickname = prompt("Введите ваш никнейм");

if (username && surname && nickname) {
  console.log(`Привет ${username} ${surname} ${nickname}`);
} else if (username.length > 0 && surname.length > 0) {
  console.log(`Привет ${username} ${surname}`);
} else if (surname.length > 0 && nickname.length > 0) {
  console.log(`Привет ${nickname}`);
} else if (username.length > 0 && nickname.length > 0) {
  console.log(`Привет ${username}`);
} else if (surname.length > 0 || nickname.length > 0) {
  console.log(`Привет Noname`);
} else {
  console.log(`Привет Noname`);
} */

// 2
/* const numbers = prompt("Введите любое число: ");
let moreLess = (numbers > 100) ? "больше ста" : "меньше ста";
let evenness = (numbers % 2 == 0 ) ? "чётное число" : "нечётное число";
let fractionality = (numbers % 1 == 0) ? "не дробное" : "дробное число" ;
let positive = (numbers > 0) ? "положительное число" : "отрицательное число" ;

if (+numbers) {
     alert(`Введённое вами число: ${moreLess}, ${evenness}, ${fractionality}, ${positive}`);
  } else alert("Вы не ввели число!"); */



// 3
//3.1
 /* const firstNumber = +prompt('Введите первое число');
    const twoNumber = +prompt('Введите второе число');
    const threeNumber = +prompt('Введите третье число');
    
    let plus = firstNumber + twoNumber + threeNumber;
    (isNaN(firstNumber) || isNaN(twoNumber) || isNaN(threeNumber)) ?  "Что-то не получилось " : console.log(plus) ;  */

//3.2
/* let name = prompt('Введите свое имя');
    let age = prompt('Введите свой возраст');
    age >= 18 ? alert(`Добро пожаловать ${name}`) :  alert(`Простите, ${name}, доступ закрыт`) */

// 4

/* const enterNumber = +prompt("Введите число");
if (typeof enterNumber === "number" && enterNumber >= 0 && enterNumber <= 9) {
  switch (enterNumber) {
    case 0: {
      alert("ноль");
      break;
    }
    case 1: {
      alert("один");
      break;
    }
    case 2: {
      alert("два");
      break;
    }
    case 3: {
      alert("три");
      break;
    }
    case 4: {
      alert("четыре");
      break;
    }
    case 5: {
      alert("пять");
      break;
    }
    case 6: {
      alert("шесть");
      break;
    }
    case 7: {
      alert("семь");
      break;
    }
    case 8: {
      alert("восемь");
      break;
    }
    case 9: {
      alert("девять");
      break;
    }
  }
} else if (enterNumber < 0 || enterNumber > 9) {
  alert("Доступный ввод цифр от 0 до 9");
} else if (isNaN(enterNumber)) {
  alert("Значение невозможно преобразовать к числу");
} */
