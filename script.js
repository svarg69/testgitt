// const radius = +prompt('Введите радиус окружности', '');
// const square = 3.14 * radius ** 2;
// alert('Площать вашей окружности ' + square);


// операторы сранвения
// x y

// console.log (1 === '1');  строгое сравнение по типу данных

// console.log(!false); возвращает обратное значение введенному

// console.log(1 && 2);

// console.log(1>= 0);

// console.log(1 != "1");


// if(2 < 0){
//     alert('its true!');
// } else {
//     alert('its a lie!!!');
// }

// const x = +prompt('vvedite num');

// if (x > 5){
//     alert('bolshe 5');
// } else if (x == 0){
//     alert('ravno 0')
// } else {
//     alert('menshe 5 i ne ravno 0')
// }

// const x = +prompt('vvedite num');
// if (x > 5 || x == 0){
//     alert('on bolshe i ne raven 0');
// } else {
//     alert('libo menshe libo 0');
// }

// if (true && false){
//     console.log(true);
// }

// if(true || false){
//     console.log(true);
// }

// const x = +prompt('vvedite num');
// let y = (x > 5) ? 10 : 0;
// alert (y);
// если икс больше пяти игрик 10, если нет то 0


// const userAge = +prompt('vvedite age');

// if (userAge > 0 && userAge <= 120){
//     alert ('otlichno');
// } else {
//     alert ('u are false')
// }


// const x = +prompt('vvedite num');

// if (x > 0) {
//     alert(`мудаль числа ${x}`);
// } else {
//     alert(`модуль числа ${-x}`);
// }


// const hrs = +prompt('vvedite часы');
// const min = +prompt('vvedite минуты');
// const sec = +prompt('vvedite секунды');

// if ((hrs >= 0 && hrs <= 23) && (min >= 0 && min <= 59) && (sec >= 0 && sec <= 59)){
//     alert (`Московское время ${hrs} часов ${min} минут ${sec} секунд`);
// } else {
//     alert('Вы не в Москве');
// }


// const month = +prompt ('vvedi');

// switch (month) {
//     case 1:
//         alert ('январь');
//         break;
//     case 2:
//         alert ('февраль');
//         break; 
//     case 3:
//         alert ('март');
//         break;
//     case 4:

//         alert ('апрель');
//             break;

//     default:
//         alert('Учи времена года!!')
//         break;
// }


// const x = +prompt ('vvedi num');
// const y = +prompt ('vvedi num');
// const sign = prompt ('vvedi znak');

// switch (sign) {
//     case '+':
//         alert (`${ x + y}`);
//         break;
//     case '-':
//         alert (`${ x- y}`);
//         break; 

// }
// например свич кейс применяется при входе юзера на сайт через свитч определяем кто он - админ, пользователь или еще ктото

// Циклы

// for (let i = 0; i <10; i++) {
//     console.log(i);
//     if (i === 2 ){
//         continue;
//     }
//     console.log(i);
//     if (i === 5){
//         break;
//     }
    
// }



// let x = 0;
// while (x < 10) {
//     console.log(x);
//     x++;
// }

//  Функции

// function sayHello() {
//     console.log('/ПриветМир!!');
//     console.log('/Привет<hjlzuf!!');
// }
// sayHello();

// for (let index = 0; index < 10; index++) {
//     sayHello();
    
// }

// function compareValues(a,b){
//     if (a > b){
//         console.log('a > b')
//     } else {
//         console.log('a < b')
//     }

// }

// compareValues (10, 20);
// compareValues (10, 230);
// compareValues (1000, 20);


// function sum(a,b) {
//     let funcValue = 'выведи меня из себя!';
//     // тут сработает - она в зоне видимости внутри функции
//     console.log(funcValue);
//     return a + b;
    
// }

// console.log(funcValue); тут не сработает - она вне зоны выдимости, 
// console.log(sum(10, 10));


// 2 способ вызова функции 

// const sum = function(a, b) {
//     return a + b;
// }

// console.log(sum (10, 10));

// 3 способ  стрелочные функции

// const sum = (a, b) => a + b;

// console.log (sum(10, 15));







//    Анонимная функция она выполняется 1 раз, нужно когда вначале загрузки страницы нужно что то подгрузить.


// фигурные скобки - область видимости

// выведите числа от 1 до 10, можно меньше 11 поставить или меньше или равно 10
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
  
// }
// выведите числа четные от 1 до 20   конструкция += равносильна  i+2
// for (let i = 2; i <= 20; i += 2) {
    

//     console.log(i);

// }

// числа от 10 до 1 в обратном порядке

// for (let x = 10; x >= 1; x--){
//     console.log(x);
// }

// найти сумму чисел от 1 до 100

// sum = 0
// for (let i = 1; 1 <= 100; i++) {
//      sum += i;
 
// }

// console.log(sum);


// Таблица умножения дл числа которое вводит пользователь

// let value = +prompt('Введите число!');

// for (let i = 1; i <= 10; i++){
//     console.log(value*i);
// }


// Числа от одного до ста которые являются Фиббоначи

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);

// while (true) {
//     let ab = a + b;
//     if (ab > 100) {
//         break;
//     }
//     console.log(ab);
//     a = b;
//     b = ab;
// }


// 1 задача
// const square = function(width, lenght) {
//     return lenght * width;
// }

// console.log (square (5,7));

// const perimeter = function(width, lenght) {
//     return (lenght + width) * 2;
// }
// console.log (perimeter (5,7));


// Задача 2 квадратное уравнение

// function solveQuadratic(a, b, c) {
//     let discriminant = b * b - 4 * a * c;
//     if (discriminant < 0) {
//         return 'Уравнение не имеет  корней';
//     } else if (discriminant === 0) {
//         return 'Уравнение имеет один корень: ' + (-b / (2 * a));
//     } else {
//         let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
//         let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
//         return 'Уравнение имеет два корня: ' + root1 + ' и ' + root2;
//     }
// }
// console.log()


// // 3 задача НОД

// const nod = function(a, b) {
//     if (b === 0){
//         return a;
//     }
//     return nod (b, a % b);
// }

// console.log (nod (144,300));



// Задача 4 Факториал числа

// function factorial(n) {
//     if (n === 0){
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
   
//   }
  
//   console.log( factorial(8) ); 


// Задача 5 Число четное или нечетное

// function chetkoe (num){
//         a = 'четкое'
//         b = 'нечеткое'
//         if (num % 2 === 0 ) {
//           return a } else {
//             return b
//           }
//       }
// console.log (chetkoe (1022));



// задача 6 Определение наибольшего из чисел


// function compareValues(a,b){
//     if (a > b){
//         console.log(a)
//     } else {
//         console.log(b)
//     }

// }
// compareValues (1011, 230);


// задача 7 введите число и определите является ли оно положительным отрицательным или нулем



// function num(x){
//     if (x > 0){
//         console.log('число положительное')
//     } else if (x <0){
//         console.log('число отрицательное')
//     } else {
//         console.log('это ноль')
// }

// }

// console.log (num(-10))


// Задача 8 Введите балл и выведите оценку
// A (Excellent)	90-99%
// B (Good)	80-90%
// C (Satisfactory)	70-80%
// D (Bad)	60-70%
// F (Unsatisfactory)	0-59%

// 
// function grade(n) {
//     switch (true) {
//         case ( n <= 100 && n >= 90):
//                 grade = "A";
//             break;
//         case ( n <= 89 && n >= 80):
//                 grade = "B";
//             break;
//         case ( n <= 79 && n >= 70):
//                 grade = "C";
//             break;
//         case ( n <= 69 && n >= 60):
//                 grade = "D";
//             break;
//         case ( n <= 59 && n >= 0):
//                 grade = "F";
//             break;            
    
//         default:
//             break;
//     }
//     return grade;

// }

// console.log (grade (n=70));

// Задача 9 конвертация 24 часового формата в 12 часовой


// function format12Hour(datetime) {
//     let hours = datetime.getHours();
//     let minutes = datetime.getMinutes();
//     let ampm = hours >= 12 ? 'PM' : 'AM';
//     hours = hours % 12 || 12;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     let strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
// console.log (format12Hour (new Date));


// Задача 10 цельсии в фаренгейты

// function convert (deg) {
//     return ((deg * 9 / 5) + 32);
// }
// console.log (convert (11))



// задача 11

// const del = function(a, b) {
//     if (b == 0){
//         alert ('это ноль тышо!!!')
//     } else {
//         return a / b;
//     }
    
    
// }
// console.log (del (10,5));