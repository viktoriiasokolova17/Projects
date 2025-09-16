console.log(0);


/* 3 part ***************************************************************/

// var a = 'Test1';
// var b = 'Test2';

// console.log(a);
// console.log(b);


//////////////////////////////////////

// function testVar(){
//     var a = 30;
//     if(true){
//         var a = 50;
//         console.log(a); //50
//     }
//     console.log(a); //50
// }

// testVar();



// function testLet(){
//     let a = 30;
//     if(true){
//         let a = 50;
//         console.log(a); //50
//     }
//     console.log(a);  //30
// }

// testLet();

//////////////////////////////////////

// for (var i =0; i < 10; i++){
//    // console.log(i);  
//     /*
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9 */
// }
// console.log(i);  //10


// for (let i =0; i < 10; i++){
//     console.log(i);  
//     /*
//     0
//     1
//     2
//     3
//     4
//     5
//     6
//     7
//     8
//     9 */
// }
// console.log(i); // ReferenceError: i is not defined

//////////////////////////////////////

// const colors = [];

// colors.push('red');
// colors.push('blue');

// colors = 'Green';
// console.log(colors); //TypeError: Assignment to constant variable

/* 4 part ***************************************************************/

//////////////////////////////////////

// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     static countUsers(){
//         console.log('There are 50 users');
//     }

//     register(){
//         console.log(this.username+' is not registered'); 
//     }
// }

// // let bob = new User('bob', 'bob@email.com', '12345');

// // bob.register(); //bob is not registered

// User.countUsers(); // There are 50 users

/* 5 part ***************************************************************/

// let template = '<h1>Hello</h1><p>This is a simple p</p>';

// document.getElementById('template').innerHTML = template; // in index.html Hello This is a simple p


// let template = 
// '<h1>Hello</h1>
// <p>This is a simple p</p>'; //error

// document.getElementById('template').innerHTML = template; // in index.html Hello This is a simple p


// let template = 
// '<h1>Hello</h1>'+
// '<p>This is a simple p</p>';

// document.getElementById('template').innerHTML = template; // in index.html Hello This is a simple p

//////////////////////////////////////
// let name = 'John';

// function makeUppercase(word){
//     return word.toUpperCase();
// }

// let template = `<h1>${makeUppercase('Hello')}, ${name}</h1><p>This is a simple p</p>`;

// document.getElementById('template').innerHTML = template; // in index.htm  HELLO, John This is a simple p

/* 6 part ***************************************************************/

// let theString = 'Hello, my name is Brad';

// //startWith()
// //endsWith()
// //includes

// //startWith()
// // console.log(theString.startsWith('Hello'));//true
// // console.log(theString.startsWith('ello'));//false

// //endWith()
// // console.log(theString.endsWith('Brad'));//true
// // console.log(theString.endsWith('ello'));//false

// //includes
// // console.log(theString.includes('Brad'));//true
// // console.log(theString.includes('love'));//false

//////////////////////////////////////


// //hex
// console.log(0xFF);///255

// //binary
// console.log(0b101011);///43

// //octal
// console.log(0o543);///355


//////////////////////////////////////

// //isFinite
// console.log(Number.isFinite(3));///true
// console.log(Number.isFinite(-3));///true
// console.log(Number.isFinite(aaa));///false
// console.log(Number.isFinite(NaN));///false

// //isNaN
// console.log(Number.isNaN(NaN));///true
// console.log(Number.isNaN(3));///false
// console.log(Number.isNaN('aaa'));///false

// //isInteger
// console.log(Number.isInteger(NaN));///false
// console.log(Number.isInteger(2));///true
// console.log(Number.isInteger(-2));///true
// console.log(Number.isInteger(aaaa));///false

/* 7 part ***************************************************************/

// function great($greeating){
//     console.log($greeating);
// }

// great('Hello'); //in console Hello

//////////////////////////////////////

// function great($greeating = 'Hello World'){
//     console.log($greeating);
// }

// great(); //in console Hello World

//////////////////////////////////////

// let args1 = [1,2,3];
// let args2 = [4,5,6];

// function test() {
//     console.log(args1+','+args2);
// }


// // test.apply(null, args); //[1, 2, 3]

// //test(...args); // [1, 2, 3]

// test(...args1,...args2); //1,2,3,4,5,6

/* 8 part ***************************************************************/

// let myArray = [11,22,33,44];
// let mySet = new Set(myArray);

// // mySet.add ('100'); //Set(5) {11, 22, 33, 44, '100'}
// // mySet.add ({a: 1, b: 2}); //Set(6) {11, 22, 33, 44, '100', Object}

// //mySet.delete(22); //Set(3) {11, 33, 44}

// //mySet.clear(); //Set(0) {size: 0}

// //console.log(mySet); 

// //console.log(mySet.size); //size array //5

// mySet.forEach(function(val){
//     console.log(val);
// })
// /*11
//  22 
//  33 
//  44*/

//////////////////////////////////////

// let myMap = new Map([['a1', 'hello'], ['b2', 'goodbye']]);

// console.log(myMap); ///Map(2) {'a1' => 'hello', 'b2' => 'goodbye'}

// myMap.set('c3','foo');
// console.log(myMap); //Map(3) {'a1' => 'hello', 'b2' => 'goodbye', 'c3' => 'foo'}

// myMap.delete('a1');
// console.log(myMap); //Map(2) {'b2' => 'goodbye', 'c3' => 'foo'}
// console.log(myMap.size); //2

//////////////////////////////////////

// let carWeeakSet = new WeakSet();

// let car1 = {
//     make: 'Honda',
//     model: 'Civic'
// }
// //console.log(carWeeakSet); //WeakSet {}

// carWeeakSet.add(car1);

// //console.log(carWeeakSet); // WeakSet {make: 'Honda', model: 'Civic'}

// let car2 = {
//     make: 'Toyota',
//     model: 'Camry'
// }
// //console.log(carWeeakSet); //WeakSet {}

// carWeeakSet.add(car2);

// //console.log(carWeeakSet); // WeakSet {make: 'Honda', model: 'Civic' make: 'Toyota', model: 'Camry'}

// carWeeakSet.delete(car1);
// console.log(carWeeakSet);// WeakSet {make: 'Toyota', model: 'Camry'}

//////////////////////////////////////

// let carWeeakmap = new WeakMap();

// let key1 = {
//     id: '1'
// }

// let car1 = {
//         make: 'Honda',
//         model: 'Civic'
// }


// carWeeakmap.set(key1,car1);

// //console.log(carWeeakmap); // {id: "1",make: "Honda",model: "Civic"}

// let key2 = {
//     id: '2'
// }

// let car2 = {
//         make: 'Toyota',
//         model: 'Camry'
// }


// carWeeakmap.set(key2,car2);

// console.log(carWeeakmap);// {id: "1",make: "Honda",model: "Civic", id: "2",make: "Toyota", model: "Camry"}


// carWeeakmap.delete(key2);
// console.log(carWeeakmap);// {id: "1",make: "Honda",model: "Civic", make: "Toyota", model: "Camry"}


/* 9 part ***************************************************************/

// Arrow Functions

// function Prefixer(prefix){
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr){
//     let that = this;
//     return arr.map(function(x){
//         console.log(that.prefix + x);
//     });
// }

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);  //Hello Brad  Hello Jeff

//////////////////////////////////////

// function Prefixer(prefix){
//     this.prefix = prefix;
// }

// Prefixer.prototype.prefixArray = function(arr){
//     return arr.map((x) => {
//         console.log(this.prefix + x);
//     });
// }

// let pre = new Prefixer('Hello ');
// pre.prefixArray(['Brad', 'Jeff']);  //Hello Brad  Hello Jeff

//////////////////////////////////////

// let add = function(a,b){
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

// add(2,2); //4

//////////////////////////////////////

// let add = (a,b) => {
//     let sum = a+b;
//     console.log(sum);
//     return false;
// }

// add(3,3); //6

/* 10 part ***************************************************************/
//promises

// var myPromise = Promise.resolve('Foo');

// myPromise.then((res) => console.log(res)); //Foo

//////////////////////////////////////

// var myPromise = new Promise(function(resolve, reject){
//     setTimeout(() => resolve(4),2000);
// });

// myPromise.then((res) => {
//     res +=3;
//     console.log(res); //7
// });


//////////////////////////////////////

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//         var xhr = new XmlHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(xhr.response);
//             }else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         };
//         xhr.onerror = function(){
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         xhr.send();
//     });
// }

// getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// });  //ReferenceError: XmlHttpRequest is not defined


//////////////////////////////////////

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(xhr.response);
//             }else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         };
//         xhr.onerror = function(){
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         xhr.send();
//     });
// }

// getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// }); //all json(todo)

//////////////////////////////////////

// function getData(method, url){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = function(){
//             if(this.status >= 200 && this.status < 300){
//                 resolve(xhr.response);
//             }else {
//                 reject({
//                     status: this.status,
//                     statusText: xhr.statusText
//                 });
//             }
//         };
//         xhr.onerror = function(){
//             reject({
//                 status: this.status,
//                 statusText: xhr.statusText
//             });
//         };
//         xhr.send();
//     });
// }

// getData('GET', 'https://jsonplaceholder.typicode.com/todos').then(function(data){
//    let todos = JSON.parse(data);
//    let output = '';
//    for(let todo of todos){
//     output += `
//     <li>
//         <h3>${todo.title}</h3>
//         <p>Completed: ${todo.completed} </p>
//     </li>
//     `;
//    }

//    document.getElementById('template').innerHTML = output;
// }).catch(function(err){
//     console.log(err);
// }); //add to index.html li

/* 11 part ***************************************************************/
//generators

// function *g1(){
//     console.log('Hello');
//     yield 'Yield Ran...';
//     console.log('World');
//     yield 'Yield 2 Ran...';
// }

// var g = g1();

// //console.log(g.next());  //Hello {value: 'Yield Ran...', done: false}
// // console.log(g.next().value);// Hello  Yield Ran...
// // console.log(g.next().value);// World  Yield 2 Ran...

//////////////////////////////////////

// function *g1(){
//     console.log('Hello');
//     yield 'Yield Ran...';
//     console.log('World');
//     yield 'Yield 2 Ran...';
//     return 'Returned...';
// }

// var g = g1();

// // console.log(g.next().value);  //Hello Yield Ran
// // console.log(g.next().value);// World Yield 2 Ran
// // console.log(g.next().value); //Returned...

// for(let val of g){
//     console.log(val); /*
//    Hello
//    Yield Ran...
//    World
//    Yield 2 Ran...*/
// }

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////




