/* 1 **************************************************************************/

let a1 = 'JavaScript'[8];
console.log(a1);  // i

let a2 = "Strings are sequences of characters."[5]; 
console.log(a2); // g

let length1 = "Wonderful".length; 
console.log(length1); // 9

let length2 = "Do spaces count?".length;
console.log(length2); // 16

/* 2 **************************************************************************/
let num = 12345; 

let numStr = String(num); // перетворення числа на рядок

// перевірка ціле число, або десяткове
if (String(num).includes('.')){
    console.log(String(num).length-1);
    } else {
    console.log(String(num).length);
}

/* 3 **************************************************************************/
// let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// // видаляння пробілів
// dna = dna.trim();
// console.log(`Рядок ДНК без пробілів: ${dna}`);

// //  ВЕРХНІЙ регістр
// dna = dna.toUpperCase();
// console.log(`Рядок ДНК у ВЕРХНЬОМУ регістрі: ${dna}`);

/* 4 **************************************************************************/
let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";


dna = dna.trim().toUpperCase();

// заміна 'GCT' на 'AGG'
dna = dna.replace('GCT', 'AGG');
console.log(`Змінене ДНК: ${dna}`);

// пошук 'CAT' за допомогою indexOf()
if (dna.indexOf('CAT') !== -1) {
    console.log('CAT found');
} else {
    console.log('CAT NOT found');
}

// набір з 3 символів (16-19)
let codon = dna.slice(16, 19);
console.log(`П'ятий кодон: ${codon}`);

// довжина ланцюга ДНК
console.log(`The DNA strand is ${dna.length} characters long.`);


/* 5 **************************************************************************/
let language = 'JavaScript';

// slice() для отримання 'JS'
let abbreviation1 = language.slice(0, 1) + language.slice(4, 5);
console.log(`Результат через slice(): ${abbreviation1}`);

//  без slice()
let abbreviation2 = language.charAt(0) + language.charAt(4);
console.log(`Результат через charAt(): ${abbreviation2}`);

// позначення в дужках і літерал шаблону
console.log(`The abbreviation for '${language}' is '${abbreviation2}'.`);

