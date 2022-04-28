// 1

/* let username = prompt("Введите ваше имя");
let surname = prompt("Введите вашу фамилию");
let nickname = prompt("Введите ваш никнейм");

if (username.length > 0 && surname.length > 0 && nickname.length > 0) {
  console.log(`Привет ${username} ${surname} ${nickname}`);
} else if (username.length > 0 && surname.length > 0) {
  console.log(`Привет ${username} ${surname}`);
} else if (surname.length > 0 && nickname.length > 0) {
  console.log(`Привет ${nickname}`);
} else if (username.length > 0 && nickname.length > 0) {
  console.log(`Привет ${username}`);
} else if (surname.length > 0 || nickname.length > 0) {
  console.log(`Привет Noname`);
} */

// 2
/* let number = +prompt("Введите любое число");
if (number >= 100) {
  if (number % 2 === 0) {
    if (Number.isInteger(number)) {
      if (number >= 0) {
        console.log(
          "Введенное вами число больше ста, четное, положительное, не дробное"
        );
      } else {
        console.log(
          "Введенное вами число больше ста, четное, отрицательное, не дробное"
        );
      }
    } else {
      if (number >= 0) {
        console.log(
          "Введенное вами число больше ста, четное, положительное, дробное"
        );
      } else {
        console.log(
          "Введенное вами число больше ста, четное, отрицательное, дробное"
        );
      }
    }
  } else {
    if (Number.isInteger(number)) {
      if (number >= 0) {
        console.log(
          "Введенное вами число больше ста, нечетное, положительное, не дробное"
        );
      } else {
        console.log(
          "Введенное вами число больше ста, нечетное, отрицательное, не дробное"
        );
      }
    } else {
      if (number >= 0) {
        console.log(
          "Введенное вами число больше ста, нечетное, положительное, дробное"
        );
      } else {
        console.log(
          "Введенное вами число больше ста, нечетное, отрицательное, дробное"
        );
      }
    }
  }
} else {
  if (number % 2 === 0) {
    if (Number.isInteger(number)) {
      if (number >= 0) {
        console.log(
          "Введенное вами число меньше ста, четное, положительное, не дробное"
        );
      } else {
        console.log(
          "Введенное вами число меньше ста, четное, отрицательное, не дробное"
        );
      }
    } else {
      if (number >= 0) {
        console.log(
          "Введенное вами число меньше ста, четное, положительное, дробное"
        );
      } else {
        console.log(
          "Введенное вами число меньше ста, четное, отрицательное, дробное"
        );
      }
    }
  } else {
    if (Number.isInteger(number)) {
      if (number >= 0) {
        console.log(
          "Введенное вами число меньше ста, нечетное, положительное, не дробное"
        );
      } else {
        console.log(
          "Введенное вами число меньше ста, нечетное, отрицательное, не дробное"
        );
      }
    } else {
      if (number >= 0) {
        console.log(
          "Введенное вами число меньше ста, нечетное, положительное, дробное"
        );
      } else {
        console.log(
          "Введенное вами число меньше ста, нечетное, отрицательное, дробное"
        );
      }
    }
  }
} */

// 3
//3.1
/* let firstNumber = +prompt('Введите первое число');
    let twoNumber = +prompt('Введите второе число');
    let threeNumber = +prompt('Введите третье число');
    
    let plus = firstNumber + twoNumber + threeNumber;
    (typeof firstNumber === 'number') && (typeof twoNumber === 'number') && (typeof threeNumber === 'number') ? console.log(plus) : "Что-то не получилось " ; */

//3.2
/* let name = prompt('Введите свое имя');
    let age = prompt('Введите свой возраст');
    age >= 18 ? alert(`Добро пожаловать ${name}`) :  alert(`Простите, ${name}, доступ закрыт`) */

// 4

/* let vvod = +prompt("Введите число");
if (typeof vvod === "number" && vvod >= 0 && vvod <= 9) {
  switch (vvod) {
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
} else if (vvod < 0 || vvod > 9) {
  alert("Доступный ввод цифр от 0 до 9");
} else if (isNaN(vvod)) {
  alert("Значение невозможно преобразовать к числу");
} */
