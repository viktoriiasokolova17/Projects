/*************************************************/

// alert('Hello World');

/*************************************************/

// console.log('Hello World');
// console.error('This is an error');
// console.warn('This is a warning');

/*************************************************/
// var, let, const
    // let age = 30;
    // age = 31;

    // console.log(age); //31

    //////////////////////////////////////

    // const age = 30;
    // age = 31;

    // console.log(age); //error

/*************************************************/

    // DATA TYPES 
    // const name = 'Brad'; //String
    // const age = 37; //Number
    // const rating = 3.5; //Number
    // const isCool = true; //Boolean
    // const x = null; //null
    // const y = undefined; //
    // let z; // undefined

    // Check type
    //console.log(typeof z);

    //console.log('My name is ' + name + ' and I am ' + age); //My name is Brad and I am 37

    // console.log(`My name is ${name} and I am ${age}`); //My name is Brad and I am 37

/*************************************************/
    // const s = 'Hello World';

    // console.log(s.length); //11
    // console.log(s.toUpperCase()); //HELLO WORLD
    // console.log(s.toLowerCase()); //hello world
    // console.log(s.substring(0, 5)); //Hello
    // console.log(s.substring(0, 5).toUpperCase()); //HELLO
    // console.log(s.split('')) /* (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
    //    0: "H",
    //    1: "e",
    //    2: "l",
    //    3: "l",
    //    4: "o",
    //    5: " ",
    //    6: "W",
    //    7: "o",
    //    8: "r",
    //    9: "l",
    //   10: "d"
    //    length: 11
    // ]*/

   ////////////////////////////////////////

//    const s = 'technology, computers, it, code';

//    console.log(s.split(',')); //(4) ['technology', ' computers', ' it', ' code']
   /*
   0 : "technology"
   1 : " computers"
   2 : " it"
   3 : " code"
   length : 4 */

/*************************************************/

// Arrays

    // const numbers = new Array (1,2,3,4,5);
    // console.log(numbers); //(5) [1, 2, 3, 4, 5]

    // const fruits = ['apples', 'oranges', 'pears'];

    // console.log(fruits); //(3) ['apples', 'oranges', 'pears']
    // console.log(fruits[1]); // oranges

    // fruits[3] = 'grapes';
    // console.log(fruits); //(4) ['apples', 'oranges', 'pears', 'grapes']

    // fruits.push('mangos');
    // console.log(fruits); //script.js:93 (4) ['apples', 'oranges', 'pears', 'mangos']

    // fruits.unshift('strawbarries');
    // console.log(fruits); // (4) ['strawbarries', 'apples', 'oranges', 'pears']
   
    // fruits.pop();
    // console.log(fruits); //(2) ['apples', 'oranges']  //видалено останнє

    //console.log(Array.isArray(fruits)); //true  // перевіряє, чи є fruits масивом

    //console.log(fruits.indexOf('oranges')); // 1  //індекс елемента

/*************************************************/

    // const person = {
    //     firstName: 'John',
    //     age: 30,
    //     hobbies: ['music', 'movies', 'sports'],
    //     address: {
    //     street: '50 Main st',
    //     city: 'Boston',
    //     state: 'MA'
    //     }
    // }
    
    // console.log(person.hobbies); //(3) ['music', 'movies', 'sports']
    // console.log(person.hobbies[1]); //movies

    // console.log(person.address.city); //Boston

    // const {firstName, lastName} = person;
    // console.log(firstName) //John

    // const {firstName, lastName, address: { city}} = person;
    // console.log(city) //Boston

    // person.email = 'jdoe@gmail.com';
    // console.log(person.email); //jdoe@gmail.com


/*************************************************/

    // const todos = [
    //     {
    //     id: 1,
    //     text: 'Take out trash',
    //     isComplete: false
    //     },
    //     {
    //     id: 2,
    //     text: 'Dinner with wife',
    //     isComplete: false
    //     },
    //     {
    //     id: 3,
    //     text: 'Meeting with boss',
    //     isComplete: true
    //     }
    // ];

  //console.log(todos[1].text); //Dinner with wife

  //console.log(JSON.stringify(todos)); /* [{"id":1,"text":"Take out trash","isComplete":false},{"id":2,"text":"Dinner with wife","isComplete":false},{"id":3,"text":"Meeting with boss","isComplete":true}]*/


/*************************************************/

    // For
//    for(let i = 0; i <= 10; i++){
//         console.log(`For Loop Number: ${i}`); 
//     }
        /*
        For Loop Number: 0
        For Loop Number: 1
        For Loop Number: 2
        For Loop Number: 3
        For Loop Number: 4
        For Loop Number: 5
        For Loop Number: 6
        For Loop Number: 7
        For Loop Number: 8
        For Loop Number: 9
        For Loop Number: 10 */
    

/*************************************************/

    // While
    // let i = 0
    // while(i <= 10) {
    // console.log(`While Loop Number: ${i}`);
    // i++;
    // }
     /*
        While Loop Number: 0
        While Loop Number: 1
        While Loop Number: 2
        While Loop Number: 3
        While Loop Number: 4
        While Loop Number: 5
        While Loop Number: 6
        While Loop Number: 7
        While Loop Number: 8
        While Loop Number: 9
        While Loop Number: 10 */

/*************************************************/

    // For 
    // for(let i = 0; i < todos.length; i++){
    //     console.log(` Todo ${i + 1}: ${todos[i].text}`);
    // } 
    /*  
    Todo 1: Take out trash
    Todo 2: Dinner with wife
    Todo 3: Meeting with boss  */

/*************************************************/

    // for(let todo of todos) {
    //     console.log(todo.text);
    // }
    /*
    Take out trash
    Dinner with wife
    Meeting with bos
    */

/*************************************************/

    // forEach(), map, filter

    const todos = [
            {
            id: 1,
            text: 'Take out trash',
            isComplete: false
            },
            {
            id: 2,
            text: 'Dinner with wife',
            isComplete: false
            },
            {
            id: 3,
            text: 'Meeting with boss',
            isComplete: true
            }
        ];

        // forEach() 
        // todos.forEach(function(todo, i, myTodos) {
        //     console.log(`${i + 1}: ${todo.text}`);
        //     console.log(myTodos);
        //   }); 
          /*
        1: Take out trash
        (3) [{…}, {…}, {…}]
        2: Dinner with wife
        (3) [{…}, {…}, {…}]
        3: Meeting with boss
        (3) [{…}, {…}, {…}]
           */   //виводить індекс та текст кожного завдання, а також весь масив todos на кожній ітерації

        // map()
        // const todoTextArray = todos.map(function(todo) {
        //     return todo.text;
        //   });
        //   console.log(todoTextArray); 
          /*(3) ['Take out trash', 'Dinner with wife', 'Meeting with boss' */  //тільки текст

        // filter() 
        // const todo1 = todos.filter(function(todo) {
        //     return todo.id === 1; 
        // });
        // console.log(todo1); 
        /*
        0: {id: 1, text: 'Take out trash', isComplete: false}
        length: 1
        [[Prototype]]: Array(0) 
        */
        
        // const todoCompleted = todos.filter(function(todo) {
        //     return todo.isCompleted === true; 
        // });
        // console.log(todoCompleted); 
        /*[] length: 0 */

/*************************************************/
    //if else
    // const x = 30;

    // if(x === 10) {
    // console.log('x is 10');
    // } else if(x > 10) {
    // console.log('x is greater than 10');
    // } else {
    // console.log('x is less than 10')
    // } //x is greater than 10

/*************************************************/

    // const x = 6;
    // const y = 11;

    // if (x > 5 && y >10 ){
    //     console.log('x is more than 5 or y is more than 10')
    // }  
    //x is more than 5 or y is more than 10
    /* if(x > 5){
        if(y > 10){
          ......  
        }
    }*/

/*************************************************/

    // Switch

    // const x = 9;
    // const color = x > 10 ? 'red' : 'blue';

    // switch(color) {
    // case 'red':
    //     console.log('color is red');
    //     break;
    // case 'blue':
    //     console.log('color is blue');
    //     break;
    // default:  
    //     console.log('color is not red or blue');
    //     break;
    // }
    /*color is blue*/

/*************************************************/

    // function addNums(num1, num2){
    //     console.log(num1 + num2);
    // }
    // addNums(); //NaN
    // addNums(4,5); //9

    // const  addNums = (num1 = 1, num2 = 1) => num1 + num2;
    // console.log(addNums(5,5)) //10

/*************************************************/

    // Constructor
    // function Person(firstName, lastName, dob) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.dob = new Date(dob); 
    // }
    // const person1 = new Person('John', 'Doe', '4-3-1980');
    // const person2 = new Person('Mary', 'Smith', '3-6-1970');

    // console.log(person2.dob); //Fri Mar 06 1970 00:00:00 GMT+0300 (за східноєвропейським стандартним часом)

    // Person.prototype.getBirthYear = function () {
    //     return this.dob.getFullYear();
    //   }
      
    //   Person.prototype.getFullName = function() {
    //     return `${this.firstName} ${this.lastName}`
    //   }

    //   console.log(person1); //Person {firstName: 'John', lastName: 'Doe', dob: Thu Apr 03 1980 00:00:00 GMT+0300 (за східноєвропейським стандартним часом)}
    //   console.log(person2.getFullName());  // Mary Smith

/*************************************************/

    // function Person(firstName, lastName, dob) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.dob = new Date(dob); 
    //     }
       
    /////////////
            
    // class Person {
    //     constructor(firstName, lastName, dob) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.dob = new Date(dob);
    //     }
    
    //     getBirthYear() {
    //         return this.dob.getFullYear();
    //       }
        
    //       getFullName() {
    //         return `${this.firstName} ${this.lastName}`;
    //       }
    //     }

/*************************************************/

    //console.log(window);

    // Single Element Selectors
    // console.log(document.getElementById('my-form'));
    // console.log(document.querySelector('.container'));

    // // Multiple Element Selectors
    // console.log(document.querySelectorAll('.item'));
    // console.log(document.getElementsByTagName('li'));
    // console.log(document.getElementsByClassName('item'));

    // const items = document.querySelectorAll('.item');
    // items.forEach((item) => console.log(item));

    // const ul = document.querySelector('.items');
    // // ul.remove();
    // // ul.lastElementChild.remove();
    // ul.firstElementChild.textContent = 'Hello';
    // ul.children[1].innerText = 'Brad';
    // ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

    //     const btn = document.querySelector('.btn');
    //     btn.style.background = 'red';


    //     // EVENTS

    //     // Mouse Event
    //     btn.addEventListener('click', e => {
    //     e.preventDefault();
    //     console.log(e.target.className);
    //     document.getElementById('my-form').style.background = '#ccc';
    //     document.querySelector('body').classList.add('bg-dark');
    //     ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
    //     });

/*************************************************/

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();
    
//     if (nameInput.value === '' || emailInput.value === '') {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

//         setTimeout(() => {
//             msg.classList.remove('error');
//             msg.innerHTML = '';
//         }, 3000); 
//     } else {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//         userList.appendChild(li);

//         nameInput.value = '';
//         emailInput.value = '';
//     }
// }

/*************************************************/

