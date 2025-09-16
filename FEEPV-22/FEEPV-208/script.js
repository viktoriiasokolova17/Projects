
//1.1 Визначте результат для кожного з наступних тверджень:
//a
// console.log('JavaScript'[8]); //p
//b
// console.log("Strings are sequences of characters."[5]); //g
//c
// console.log("Wonderful".length); // 9
//d
// console.log("Do spaces count?".length); // 16


//1.2 Метод length
//a
// let num = 1001;
// let numLength = num.toString().length;
// console.log(numLength); // 4
//b
// let num = 123.45;
// let numLength = num.toString().length;
// console.log(numLength); // 6
//c
// let num = 123.45; 
// let numLength;

// if (num.toString().includes('.')) {
//     numLength = num.toString().replace('.', '').length;
// } else {
//     numLength = num.toString().length;
// }

// console.log(numLength); // 5

//2.1
// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
// //a // видалення пробілів 
// dna = dna.trim();
// console.log(dna); //TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT
// //b UpperCase
// dna = dna.toUpperCase();
// //c
// console.log(dna); // TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT

//2.2
// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// dna = dna.trim().toUpperCase(); // видаляємо пробіли і змінюємо всі літери на верхній регістр

// dna = dna.replace('GCT', 'AGG');// зміна 'GCT' на 'AGG'
// console.log(dna); // TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-AGG

// //  пошук 'CAT' і виведення  повідомлення
// console.log(dna.includes('CAT') ? 'CAT found' : 'CAT NOT found'); //CAT found

// // п’ятий набір з 3 символів (називається кодоном ) із ланцюга ДНК
// console.log(dna.slice(16, 19)); // CGT

// //  довжина ланцюга ДНК
// console.log(`The DNA strand is ${dna.length} characters long.`); //The DNA strand is 51 characters long.


// // слово 'taco cat' у зворотному порядку
// console.log('taco cat'.split('').reverse().join('')); // tac ocat

//3.1
//a
//Використовуйте конкатенацію рядків і два slice()методи друку 'JS'з 'JavaScript'
// let js = 'JavaScript'.slice(0, 1) + 'JavaScript'.slice(4, 5); //slice(0, 1) для витягування першої літери 'J' та slice(4, 5) для витягування п'ятої літери 'S'
// console.log(js); // JS

//b
//Не використовуючи slice(), використовуйте ланцюжок методів, щоб виконати те саме
// let js = 'JavaScript'.charAt(0) + 'JavaScript'.charAt(4); //метод charAt(0) витягує перший символ 'J', а charAt(4) витягує п'ятий символ 'S'. Конкатенуємо їх, щоб отримати 'JS'
// console.log(js); // JS

//c
// Використовуйте позначення в дужках і літерал шаблону для друку,"The abbreviation for 'JavaScript' is 'JS'."
// let abbreviation = `${'JavaScript'[0]}${'JavaScript'[4]}`; //позначення в дужках для доступу до окремих символів рядка, а літерал шаблону (${}) для формування остаточного повідомлення
// console.log(`The abbreviation for 'JavaScript' is '${abbreviation}'.`);
// // The abbreviation for 'JavaScript' is 'JS'.






