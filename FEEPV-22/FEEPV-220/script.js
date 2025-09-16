//Сумувати два числа
// function myFunction(a, b) {
//     return a + b;
// }

// let result = myFunction(2, 3);
// console.log(result); // 5

/////////////////////////////////////////////////////////////////////////
//Оператори порівняння, сувора рівність

// function myFunction(a, b) {
//     return a === b;
// }

// console.log(myFunction(2, 3));      // false
// console.log(myFunction(3, 3));      //  true
// console.log(myFunction(1, '1'));    // false
// console.log(myFunction('10', '10')); // true

/////////////////////////////////////////////////////////////////////////
//Отримати тип

// function myFunction(a) {
//     return typeof a;
// }

// console.log(myFunction(1));           // 'number'
// console.log(myFunction(false));       // 'boolean'
// console.log(myFunction({}));          //  'object'
// console.log(myFunction(null));        //  'object'
// console.log(myFunction('string'));    // 'string'
// console.log(myFunction(['array']));   //  'object'


/////////////////////////////////////////////////////////////////////////
//Видалити перші n символів рядка

// function myFunction(a) {
//     return a.slice(3);
// }

// console.log(myFunction('abcdefg')); //  'defg'
// console.log(myFunction('1234'));    //  '4'
// console.log(myFunction('fgedcba')); // 'dcba'

/////////////////////////////////////////////////////////////////////////
//Отримати останні n символів рядка

// function myFunction(str) {
//     return str.slice(-3);
// }

// console.log(myFunction('abcdefg')); //  'efg'
// console.log(myFunction('1234'));    //  '234'
// console.log(myFunction('fgedcba')); //  'cba'

/////////////////////////////////////////////////////////////////////////
//Отримати перші n символів рядка

// function myFunction(a) {
//     return a.slice(0, 3);
// }

// // Тестові випадки
// console.log(myFunction('abcdefg')); // 'abc'
// console.log(myFunction('1234'));    //  '123'
// console.log(myFunction('fgedcba')); // 'fge'


/////////////////////////////////////////////////////////////////////////
//Знайдіть положення одного рядка в іншому

// function myFunction(a) {
//     return a.indexOf('is');
// }

// console.log(myFunction('praise')); //  3
// console.log(myFunction('risky'));  //  1
// console.log(myFunction('paris'));  //  3

/////////////////////////////////////////////////////////////////////////
//Витягніть першу половину рядка

// function myFunction(a) {
//     //  індекс середини рядка
//     const halfLength = Math.floor(a.length / 2);
//     //  перша половина рядка
//     return a.slice(0, halfLength);
// }

// console.log(myFunction('abcdefgh')); //  'abcd'
// console.log(myFunction('1234'));     //  '12'
// console.log(myFunction('gedcba'));   //  'ged'

/////////////////////////////////////////////////////////////////////////
//Видалити останні n символів рядка

// function myFunction(a) {
//     return a.slice(0, -3);
// }

// console.log(myFunction('abcdefg')); //  'abcd'
// console.log(myFunction('1234'));    //  '1'
// console.log(myFunction('fgedcba')); //   'fged'


/////////////////////////////////////////////////////////////////////////
//Повертає відсоток від числа

// function myFunction(a, b) {
//     //  b відсотків від a
//     return (a * b) / 100;
// }

// console.log(myFunction(100, 50)); //  50
// console.log(myFunction(10, 1));   // 0.1
console.log(myFunction(500, 25)); // 125

/////////////////////////////////////////////////////////////////////////
//Основні математичні оператори JavaScript

// function myFunction(a, b, c, d, e, f) {
//     return Math.pow(((a + b - c) * d) / e, f);
// }


// console.log(myFunction(6, 5, 4, 3, 2, 1)); // 10.5
// console.log(myFunction(6, 2, 1, 4, 2, 3)); // 2744
// console.log(myFunction(2, 3, 6, 4, 2, 3)); //  -8

/////////////////////////////////////////////////////////////////////////
//Перевірте, чи містить рядок інший рядок, і з’єднайте

// function myFunction(a, b) {
//     // чи містить рядок a рядок b
//     if (a.includes(b)) {
//         // якщо містить, додаємо b до початку a
//         return b + a;
//     } else {
//         // якщо не містить, додаємо b до кінця a
//         return a + b;
//     }
// }

// console.log(myFunction('cheese', 'cake')); //  'cheesecake'
// console.log(myFunction('lips', 's'));      //  'slips'
// console.log(myFunction('Java', 'script')); //  'Javascript'
// console.log(myFunction(' think, therefore I am', 'I')); //  'I think, therefore I am'

/////////////////////////////////////////////////////////////////////////
//Перевірте, чи число парне

// function myFunction(a) {
//     return a % 2 === 0;
// }

// console.log(myFunction(10));   // true
// console.log(myFunction(-4));   // true
// console.log(myFunction(5));    //  false
// console.log(myFunction(-111));  // false


/////////////////////////////////////////////////////////////////////////
//Скільки разів зустрічається символ

// function myFunction(a, b) {
//     // кількість раз, коли символ a зустрічається в рядку b
//     return b.split(a).length - 1;
// }

// console.log(myFunction('m', 'how many times does the character occur in this sentence?')); //  2
// console.log(myFunction('h', 'how many times does the character occur in this sentence?')); //  4
// console.log(myFunction('?', 'how many times does the character occur in this sentence?')); //  1
// console.log(myFunction('z', 'how many times does the character occur in this sentence?')); //  0

/////////////////////////////////////////////////////////////////////////
//Перевірте, чи є число цілим

// function myFunction(a) {
//     //чи число ціле
//     return Number.isInteger(a);
// }

// console.log(myFunction(4));     // true
// console.log(myFunction(1.123)); // false
// console.log(myFunction(1048));  //  true
// console.log(myFunction(10.48)); //  false

/////////////////////////////////////////////////////////////////////////
//Оператори множення, ділення та порівняння

// function myFunction(a, b) {

//     if (a < b) {
//         return a / b;
//     } else {
//         return a * b;
//     }
// }


// console.log(myFunction(10, 100)); //  0.1
// console.log(myFunction(90, 45));  // 4050
// console.log(myFunction(8, 20));   //  0.4
// console.log(myFunction(2, 0.5));  //  1

/////////////////////////////////////////////////////////////////////////
//Округліть число до 2 знаків після коми

// function myFunction(a) {
//     return parseFloat(a.toFixed(2));
// }

// console.log(myFunction(2.12397));  //  2.12
// console.log(myFunction(3.136));    //  3.14
// console.log(myFunction(1.12397));  //  1.12
// console.log(myFunction(26.1379));  // 26.14


/////////////////////////////////////////////////////////////////////////
//Розбити число на цифри
// function myFunction(a) {
//     // число в рядок, потім масив символів, і перетворюємо кожен символ назад у число
//     return a.toString().split('').map(Number);
// }

// console.log(myFunction(10));      // 1, 0
// console.log(myFunction(931));     // 9, 3, 1
// console.log(myFunction(193278));  // 1, 9, 3, 2, 7, 8
