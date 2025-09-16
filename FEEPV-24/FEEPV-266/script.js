// Створіть масив practiceFileіз таким записом: 273.15. Використовуйте pushметод, щ
// об додати наступні елементи до масиву. Додайте елементи a і b по черзі, а потім скористайтеся одним,
//  push щоб додати елементи в частині c. Друкуйте масив після кожного кроку, щоб підтвердити зміни.

// a. 42
// b. "привіт"
// c. false, -4,6, "87"

let practiceFile = [273.15];
console.log(practiceFile); // 273.15

practiceFile.push(42);
console.log(practiceFile); // 273.15, 42

practiceFile.push("привіт");
console.log(practiceFile); // 273.15, 42, "привіт"

practiceFile.push(false, -4, 6, "87");
console.log(practiceFile); // 273.15, 42, "привіт", false, -4, 6, "87"

/////////////////////////////////////////////////////////////////////////////////////////
// push, pop, shiftта unshiftвикористовуються для додавання/видалення елементів із початку/кінца масиву. 
// Дужки можна використовувати для зміни будь-якого елемента в масиві. Починаючи з cargoHoldмасиву , 
// напишіть оператори, щоб зробити наступне:['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 
//     'meal packs', 'slinky', 'security blanket']

//a. Використовуйте дужки, щоб замінити 'slinky'в масиві на . Роздрукуйте масив, щоб підтвердити зміну.'space tether'
//b. Видаліть останній елемент із масиву за допомогою pop. Надрукуйте видалений елемент і оновлений масив.
//c. Видаліть перший елемент із масиву за допомогою shift. Надрукуйте видалений елемент і оновлений масив.
//d. На відміну від popі shift, pushі unshiftвимагають аргументів усередині (). Додайте до масиву елементи 1138 і «20 метрів» — число на початку та рядок у кінці. Роздрукуйте оновлений масив, щоб підтвердити зміни.
//e. Використовуйте літерал шаблону, щоб надрукувати остаточний масив і його довжину.

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

cargoHold[5] = 'space tether';
console.log(cargoHold); // 'oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', 'security blanket'

let removedLastElement = cargoHold.pop();
console.log(removedLastElement); // 'security blanket'
console.log(cargoHold); // 'oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether'

let removedFirstElement = cargoHold.shift();
console.log(removedFirstElement); // 'oxygen tanks'
console.log(cargoHold); // 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether'

cargoHold.unshift(1138);
cargoHold.push('20 meters');
console.log(cargoHold); // 1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'

console.log(`Остаточний масив: [${cargoHold}] і його довжина: ${cargoHold.length}`); // Остаточний масив: [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'] і його довжина: 7

/////////////////////////////////////////////////////////////////////////////////////////
// Метод spliceможна використовувати для додавання чи видалення елементів із масиву. Він також може виконувати обидва завдання одночасно. Перегляньте додаток до з’єднання, якщо вам потрібне нагадування про синтаксис. Використовуйте spliceдля внесення наступних змін до остаточного cargoHoldмасиву з вправи 2. Обов’язково друкуйте масив після кожного кроку, щоб підтвердити свої оновлення.

// Вставте рядок 'keys'під індексом 3, не замінюючи жодних інших записів.
// Видаліть «інструкцію з експлуатації» з масиву. (Підказка: indexOfкорисно уникнути підрахунку індексу вручну).
// Замініть елементи з індексами 2-4 елементами 'cat', 'fob', і .'string cheese'
// Закодуйте його на repl.it

// Початковий масив cargoHold з вправи 2
let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

cargoHold.splice(3, 0, 'keys');
console.log(cargoHold); // 1138, 'space suits', 'parrot', 'keys', 'instruction manual', 'meal packs', 'space tether', '20 meters'

let indexToRemove = cargoHold.indexOf('instruction manual');
if (indexToRemove !== -1) {
    cargoHold.splice(indexToRemove, 1);
}
console.log(cargoHold); // 1138, 'space suits', 'parrot', 'keys', 'meal packs', 'space tether', '20 meters'

cargoHold.splice(2, 3, 'cat', 'fob', 'string cheese');
console.log(cargoHold); // 1138, 'space suits', 'cat', 'fob', 'string cheese', 'space tether', '20 meters'

/////////////////////////////////////////////////////////////////////////////////////////
// Деякі методи ---подобаються splice та push---змінюють вихідний масив, тоді як інші ні. Використовуйте масиви

// holdCabinet1 ['duct tape', 'gum', 3.14, false, 6.022e23]
// і
// holdCabinet2 ['orange drink', 'nerf toys', 'camera', 42, 'parsnip']

// вивчити такі методи: concat, slice, reverse, sort

// a. Вивести результат використання concatна двох масивах. Чи concat змінює вихідні масиви? Перевірте це, роздрукувавши holdCabinet1 після використання методу.
// b. Вивести a sliceз двох елементів з кожного масиву. Чи sliceзмінює вихідні масиви?
// c. reverseперший масив, а sortдругий. У чому різниця між цими двома методами? Чи змінюють методи вихідні масиви?


let combinedCabinets = holdCabinet1.concat(holdCabinet2);
console.log(combinedCabinets); // 'duct tape', 'gum', 3.14, false, 6.022e23, 'orange drink', 'nerf toys', 'camera', 42, 'parsnip'

console.log(holdCabinet1); // 'duct tape', 'gum', 3.14, false, 6.022e23

let sliceCabinet1 = holdCabinet1.slice(0, 2);
let sliceCabinet2 = holdCabinet2.slice(1, 3);
console.log(sliceCabinet1); // 'duct tape', 'gum'
console.log(sliceCabinet2); // 'nerf toys', 'camera'

console.log(holdCabinet1); // 'duct tape', 'gum', 3.14, false, 6.022e23

holdCabinet1.reverse();
console.log(holdCabinet1); // 6.022e23, false, 3.14, 'gum', 'duct tape'

holdCabinet2.sort();
console.log(holdCabinet2); // 42, 'camera', 'nerf toys', 'orange drink', 'parsnip'

// concat і slice не змінюють вихідні масиви.
// reverse і sort змінюють вихідні масиви.

/////////////////////////////////////////////////////////////////////////////////////////
// Метод split перетворює рядок на масив, тоді як join метод робить навпаки.

//a.  Спробуйте! Враховуючи рядок , подивіться, що станеться, коли ви надрукуєте vs. vs. vs. Яке призначення параметра всередині ?str = 'In space, no one can hear you code.'str.split()str.split('e')str.split(' ')str.split('')()
// b.  Маючи масив , подивіться, що станеться, коли ви надрукуєте vs. vs. vs. Яке призначення параметра всередині ?arr = ['B', 'n', 'n', 5]arr.join()arr.join('a')arr.join(' ')arr.join('')()
//c.  Виконати splitабо joinзмінити вихідний рядок/масив?
//d. Перевага, курсант, полягає в тому, що ми можемо взяти рядок із роздільниками (наприклад, комами) і перетворити його на змінюваний масив. Спробуйте! Розташуйте цей вміст за алфавітом: «вода, скафандри, їжа, плазмовий меч, батареї», а потім об’єднайте їх у новий рядок.

let str = 'In space, no one can hear you code.';

console.log(str.split()); // "In space, no one can hear you code."

console.log(str.split('e'));// "In spac", ", no on", " can h", "ar you cod", "."

console.log(str.split(' ')); // "In", "space,", "no", "one", "can", "hear", "you", "code."

console.log(str.split('')); // "I", "n", " ", "s", "p", "a", "c", "e", ",", " ", "n", "o", " ", "o", "n", "e", " ", "c", "a", "n", " ", "h", "e", "a", "r", " ", "y", "o", "u", " ", "c", "o", "d", "e", "."

let arr = ['B', 'n', 'n', 5];
console.log(arr.join()); // "B,n,n,5"

console.log(arr.join('a')); // "Banan5"

console.log(arr.join(' ')); // "B n n 5"

console.log(arr.join('')); // "Bnn5"


let holdContents = "water,space suits,food,plasma sword,batteries";
let holdArray = holdContents.split(',');

holdArray.sort();

let sortedHoldContents = holdArray.join(',');

console.log(sortedHoldContents);//  batteries,food,plasma sword,space suits,water


// split: Не змінює оригінальний рядок — він повертає новий масив.
// join: Не змінює оригінальний масив — він повертає новий рядок.

/////////////////////////////////////////////////////////////////////////////////////////
// Масиви можуть містити різні типи даних, навіть інші масиви! Багатовимірний масив – це масив із записами, які самі є масивами.

// a. Визначте та ініціалізуйте такі масиви, які містять назву, хімічний символ і масу для різних елементів:
// element1 = ['hydrogen', 'H', 1.008]
// element2 = ['helium', 'He', 4.003]
// element26 = ['iron', 'Fe', 55.85]
// b. Визначте масив tableі використовуйте push(arrayName)для додавання до нього кожного з масивів елементів. Роздрукуйте, tableщоб побачити його структуру.
// c.  Використовуйте дужки, щоб перевірити різницю між друком table[1]і table[1][1]. Не просто кивайте головою! Я хочу почути, як ви описуєте цю різницю. Давайте, розмовляйте зі своїм екраном.
// d. Використовуючи дужки та tableмасив, виведіть масу елемента1, назву елемента 2 та символ елемента26.
// e. tableє прикладом 2-вимірного масиву . Перший «рівень» містить масиви елементів, а другий рівень містить значення імені/символу/маси. Експериментуйте! Створіть тривимірний масив і роздрукуйте по одному запису з кожного рівня в масиві.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];

let table = [];
table.push(element1);
table.push(element2);
table.push(element26);

console.log(table); //'hydrogen', 'H', 1.008], ['helium', 'He', 4.003], ['iron', 'Fe', 55.85]
