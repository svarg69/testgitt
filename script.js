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

