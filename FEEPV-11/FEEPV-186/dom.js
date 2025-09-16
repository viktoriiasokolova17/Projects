/*********************/
// console.dir(document); // структура DOM-документа у вигляді об'єкта JavaScript

//console.log(document.domain); //домен //127.0.0.1
//console.log(document.URL); //домен //http://127.0.0.1:5500/FEEPV-11/FEEPV-186/index.html
//console.log(document.title); //title //JS DOM

// console.log(document.doctype); // вміст doctype
// console.log(document.head); // вміст head
//console.log(document.body);  // вміст body
//console.log(document.all);  // колекція всіх елементів
// console.log(document.all[10]);  //  на 11-му місці в DOM-дереві (оскільки індексація починається з 0) // <div class="container">

// console.log(document.forms); // всі форми 
// console.log(document.links); // всі посилання
// console.log(document.images); //всі зображення


//console.log(document.getElementById('header-title')); //header
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goobbye'; 
// виведено <h1 id="header-title"> Goobbye</h1>

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
//console.log(headerTitle.textContent); // виведено Item Lister 123

// var headerTitle = document.getElementById('header-title');
// headerTitle.innerHTML = '<h3>Hello</h3>'; // додає <h3>Hello</h3>

// var header = document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000' // додано borderBottom

// var items = document.getElementsByClassName('list-group-item');
// console.log(items); //видено item
// console.log(items[1]); //1 item
// items[1].textContent = 'hello 2'; // зміна тексту
// items[1].style.fontWeight = 'bold'; //зміна стилю тексту
// items[1].style.backgroundColor = 'yellow'; // додано колір фону
// //items.style.backgroundColor ='#f4f4f4'; //error: cannot set properties of undefined (setting 'backgroundColor
// for(var i=0; i< li.lenght; i++){
//     li[i].style.backgroundColor == '#f4f4f4';
// }



// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #cccc'; // borderBottom

// var input = document.querySelector('input');
// input.value = 'Hello World'; // input Hello World

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND" // на кнопці SEND

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'; //1 item red

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'; //last item blue

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral'; //парні item coral





// var title = document.querySelector('.title');

// console.log(title);
// title.textContent = 'Hello'; // змінює текст  'title'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');


// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// } 
// змінює фон для парних та непарних елементів



