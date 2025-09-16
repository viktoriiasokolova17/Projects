//1
// Створіть змінну під назвою carName, присвойте їй значення Volvo

// let carName = "Volvo";

//2
// Створіть змінну з назвою x, присвойте їй значення 50

// let x = 50;

//3
// Відображення суми 5 + 10, використовуючи дві змінні: x і y


// let x = 5;
// let y = 10;
// document.getElementById("demo").innerHTML = x + y;

//4
// Створіть змінну з назвою z, призначте їй x + y і відобразіть результат у вікні сповіщення


// let x = 5;
// let y = 10;
// let z = x + y;
// alert(z);

//5
// В одному рядку оголосити три змінні з такими іменами та значеннями:

// firstName = "John"
// lastName = "Doe"
// age = 35


// let firstName = "John", lastName = "Doe", age = 35;

//6
// Помножте 10 на 5 та повідомте результат:

// alert(10 *5);

//7
// Розділіть 10 на 2 та повідомте результат:

// alert (10 / 2);

//8
// Знайти залишок, коли 15 ділиться на 9

// alert(1 5% 9);

//9
// Використовуйте оператор присвоєння , який призведе до x( 15 те саме, що x = x + y)

// x = 10;
// y = 5;
// x += y;

//10
// Використовуйте  оператор присвоєння , який призведе до x( 50 те саме, що x = x * y)

// x = 10;
// y = 5;
// x *= y;

//11
// Використовуйте коментарі, щоб описати правильний тип даних наступних змінних:

// let length = 16;          // Number

// let lastName = "Johnson"; // String

// const x = {
//   firstName: "John",
//   lastName: "Doe"
// };                        // Object

//12
// Виконайте функцію з назвою myFunction

// function myFunction() {
//   alert("Hello World!");
// }
// myFunction();

//13
// Створіть функцію під назвою "myFunction"

// function myFunction() {
//   alert("Hello World!");
// }

//14
// return повертати «Hello»

// function myFunction() {
//   return "Hello";
// }
// document.getElementById("demo").innerHTML = myFunction();

//15
// Зробіть так, щоб функція відображала «Hello» у внутрішньому HTML елемента з ідентифікатором «demo»


// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello";
// }

//16
// alert "Джона", витягнувши інформацію з об'єкта людини

// const person = {
//   firstName: "John",
//   lastName: "Doe"
// };

// alert(person.firstName);

//17
// Додайте таку властивість і значення до об’єкта person: країна: Норвегія

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   country: "Norway"
// };

//18
// Створіть об’єкт під назвою person з ім’ям = John, віком = 50.
// Потім перейдіть до об’єкта для сповіщення («John is 50»)

// const person = {
//   name: "John", age: 50
// };
// alert(person.name + " is " + person.age);

//19
// Елемент <button> має щось робити, коли хтось натискає на нього

// <button onclick ="alert('Hello')">Click me.</button>

//20
// Після натискання кнопки має бути виконана функція "myFunction"

// <button onclick ="myFunction()">Click me.</button>

//21
// Елемент <div> має стати червоним, коли хтось наводить на нього мишу

// <div onmouseover ="this.style.backgroundColor='red'">myDIV.</div>

//22
// Використовуйте властивість length, щоб повідомити про довжину txt

// let txt = "Hello World!";
// let x = txt.length;
// alert(x);

//23
// Використовуйте символи екранування для сповіщення We are "Vikings"

// let txt = "We are \"Vikings\"";
// alert(txt);

//24
// З’єднайте два рядки, щоб сповістити «Hello World!»

// let str1 = "Hello ";
// let str2 = "World!";
// alert( str1 + str2 );

//25
// Перетворіть текст на ВЕРХНИЙ РЕГІСТ:

// let txt = "Hello World!";
// txt = txt.toUpperCase();

//26
// Використовуйте метод зрізу, щоб повернути слово "банани"

// let txt = "I can eat bananas all day";
// let x = txt.slice( 10, 17);

//27
// Використовуйте правильний метод String, щоб замінити слово «Привіт» на слово «Ласкаво просимо»

// let txt = "Hello World";
// txt = txt.replace ("Hello", "Welcome");

//28
// Перетворіть значення txtу верхній регістр

// let txt = "Hello World";
// txt = txt.toUpperCase();

//29
// Перетворіть значення txtна нижній регістр

// let txt = "Hello World";
// txt = txt.toLowerCase();

//30
// Отримайте значення "Volvo" з cars масиву

// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1];

//31
// Поміняти першу позицію автомобілів на "Форд"

// const cars = ["Volvo", "Jeep", "Mercedes"];
// cars[0] = "Ford";

//32
// Повідомлення про кількість елементів у масиві, використовуючи правильну властивість Array

// const cars = ["Volvo", "Jeep", "Mercedes"];
// alert(cars.length);

//33
// Використовуйте правильний метод масиву, щоб видалити останній елемент масиву fruits

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();

//34
// Використовуйте правильний метод Array, щоб додати «Kiwi» до fruitsмасиву

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kiwi");

//35
// Використовуйте splice()метод, щоб видалити "Апельсин" і "Яблуко" з fruits

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.splice(1, 2);

//36
// Використовуйте правильний метод масиву, щоб відсортувати fruits масив за алфавітом

// const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// fruits.sort();

//37
// Створіть об’єкт Date і повідомте про поточну дату й час

// const d = new Date();
// alert(d);

//38
// Використовуйте правильний метод Date, щоб отримати рік (чотири цифри) з об’єкта date

// const d = new Date();
// year = d.getFullYear();

//39
// Використовуйте правильний метод Date, щоб отримати місяць (0-11) з об’єкта date

// const d = new Date();
// month = d.getMonth();

//40
// Використовуйте правильний метод Date, щоб встановити 2020 рік об’єкта date

// const d = new Date();
// d.setFullYear(2020);

//41
// Використовуйте правильний математичний метод, щоб створити випадкове число

// let r = Math.random();

//42
// Використовуйте правильний математичний метод, щоб повернути найбільше число 10 і 20

// let x = Math.max(10, 20);

//43
// Використовуйте правильний математичний метод, щоб округлити число до найближчого цілого

// let x = Math.round (5.3);

//44
// Використовуйте правильний математичний метод, щоб отримати квадратний корінь з 9

// let x = Math.sqrt(9);

//45
// Виберіть правильний оператор порівняння, щоб сповіщати true, коли xбільше ніж y

// x = 10;
// y = 5;
// alert(x > y);

//46
// Виберіть правильний оператор порівняння для попередження true, коли x дорівнює y

// x = 10;
// y = 10;
// alert(x == y);

//47
// Виберіть правильний оператор порівняння для сповіщення true, коли xНЕ дорівнює y

// x = 10;
// y = 5;
// alert(x != y);

//48
// Виберіть правильний умовний (трійковий) оператор, щоб сповістити «Занадто молодий», якщо вік менше 18 років, інакше сповістити «Досить старий»

// var age = n;
// var voteable = (age < 18) ? "Too young" : "Old enough";
// alert(voteable);

//49
// Виправте інструкцію if, щоб сповіщати "Hello World", якщо x більше ніж y

// if (x > y) {
//   alert("Hello World");
// }

//50
// Виправте оператор if, щоб сповіщати «Hello World», якщо x більше ніж y, інакше сповіщати «Goodbye»

// if (x > y) {
//   alert("Hello World");
// } else {
//   alert("Goodbye");
// }

//51
// Створіть switchоператор, який попереджатиме «Привіт», якщо fruitsце «банан», і «Ласкаво просимо», якщо fruitsце «яблуко»

// switch (fruits) {
// case "Banana":
//     alert("Hello")
//     break;
// case "Apple":
//     alert("Welcome")
//     break;    
// }

//52
// Додайте розділ, який сповіщатиме ("Ні"), якщо fruitsне є ні "банан", ні "яблуко"

// switch(fruits) {
//   case "Banana":
//     alert("Hello")
//     break;
//   case "Apple":
//     alert("Welcome")
//     break;
  
// default:
//     alert("Neither");
// }

//53
// Створіть цикл від 0 до 9

// let i;
// for (i = 0; i < 10; i++) {
//   console.log(i);
// }

//54
// Створіть цикл, який проходить через кожен елемент у fruitsмасиві

// const fruits = ["Apple", "Banana", "Orange"];
// for (x of fruits) {
//   console.log(x);
// }

//55
// Створіть цикл, який працюватиме до тих пір, поки i менше 10

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++
// }

//56
// Створіть цикл, який працюватиме до тих пір, поки iменше 10, але iщоразу збільшуйте на 2

// let i = 0;
// while (i < 10) {
//   console.log(i);
// i = i + 2;
// }

//57
// Припиніть цикл, коли i буде 5

// for (i = 0; i < 10; i++) {
//   console.log(i);
//   if (i == 5) {
   
// break;
//     }
// }

//58
// Зробіть цикл переходом до наступної ітерації, коли i дорівнює 5

// for (i = 0; i < 10; i++) {
//   if (i == 5) {
    
// continue;
//   }
//   console.log(i);
// }

