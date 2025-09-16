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



//querySelector

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

//part 2
//travesting the DOM


//var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode); //div#main.card.card-body
// console.log(itemList.parentElement);  //div#main.card.card-body
// itemList.parentElement.style.backgroundcolor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);//body

//childNodes
//console.log(itemList.childNodes); //NodeList(9) [text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text, li.list-group-item, text]

// console.log(itemList.children); //HTMLCollection(4) [li.list-group-item, li.list-group-item, li.list-group-item, li.list-group-item]
// console.log(itemList.children[1]); //li.list-group-item
// itemList.children[1].style.background = 'yellow'; // 2 item став yellow

//firstChild
// console.log(itemList.firstChild); //#text

// firstElementChild
// console.log(itemList.firstElementChild); //li.list-group-item 1
// itemList.firstElementChild.textContent = 'Hello 1'; // item 1 став Hello 1

//lastChild
// console.log(itemList.lastChild); //#text
// //lastElementChild
// console.log(itemList.lastElementChild); //li.list-group-item 1
// itemList.lastElementChild.textContent = 'Hello 4'; // item 4 став Hello 4

//nextSibling
// console.log(itemList.nextSibling); //#text
// //nextElementSibling
// console.log(itemList.nextElementSibling); //null

//previousSibling
//console.log(itemList.previousSibling); //#text
//previousElementSibling
// console.log(itemList.previousElementSibling); 
// itemList.previousElementSibling.computedStyleMap.color = 'green'; //title



//CreateElement

// //create a div
// var newDiv = document.createElement('div');

// //add class
// newDiv.className = 'hello';

// //add id
// newDiv.id = 'hello1';

// //add attr
// newDiv.setAttribute('title', 'hello div');

// console.log(newDiv); //<div class="hello" id="hello1" title="hello div"></div>

// //create text node
// var newDivText =  document.createTextNode('hello world');

// //add text to div
// newDiv.appendChild(newDivText);

// console.log(newDiv); //<div class="hello" id="hello1" title="hello div">hello world</div>

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv); 

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1); //<div class="hello" id="hello1" title="hello div" style="font-size: 30px;">hello world</div>



//part 3

//events ///////////////////////////////////////////////////////////////////
// var button = document.getElementById('button').addEventListener('click', buttonClick);


// function buttonClick(){
//     console.log('Button clicked');
// } //Button is clicked

// function buttonClick(){
//    document.getElementById('header-title').textContent = 'Changed';
//    document.querySelector('#main').computedStyleMap.backgroundColor = '#f4f4f4';
// } //change main to Changed

// function buttonClick(e){
//     console.log(e);// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

//     // console.log(e.target); //<button class="btn btn-dark" id="button">
//     // console.log(e.target.id); //button
//     // console.log(e.target.className); //btn btn-dark
//     // console.log(e.target.classList); /*{
//     //     "0": "btn",
//     //     "1": "btn-dark"
//     // }*/

//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>' + e.target.id + '</h3>';


//     // console.log(e.type); //click

//     //console.log(e.clientX); //44 - горизонтальна координата події відносно області видимої частини вікна браузера
//     //console.log(e.clientY); //336 - вертикальна координата події відносно області видимої частини вікна браузера

//     //console.log(e.offsetX); //44 - горизонтальна координата  події відносно самого елемента, на якому відбулася подія
//     //console.log(e.offsetY); //12- вертикальна координата  події відносно самого елемента, на якому відбулася подія

//     console.log(e.altKey); //true or false
//     console.log(e.ctrlKey); //true or false
//     console.log(e.shiftKey); //true or false
// } 
//////////////////////////////////////////////////////////////////////////

// var button = document.getElementById('button').addEventListener('click', runEvent);

// function runEvent(e){
//     console.log('event type:'+e.type); // event type:click
// }

// var button = document.getElementById('button');
//     // button.addEventListener('click', runEvent); // event type:click
//     // button.addEventListener('dblclick', runEvent); //event type:dblclick
//     // button.addEventListener('mousedown', runEvent); //event type:mousedown
//     // button.addEventListener('mouseup', runEvent); // event type:mouseup (after mousedown)




// function runEvent(e){
//     console.log('event type:'+e.type); // event type:click
// }




var button = document.getElementById('button');
var box = document.getElementById('box');

//box.addEventListener('mouseenter', runEvent); // event type:mouseenter
//box.addEventListener('mouseleave', runEvent);  // event type:mouseleave

//box.addEventListener('mouseover', runEvent); // event type:mouseover
//box.addEventListener('mouseout', runEvent); //event type:mouseout

//box.addEventListener('mousemove', runEvent)

// function runEvent(e){
//     console.log('event type:'+e.type); // event type ...

//     // output.innerHTML = '<h3> MouseX: ' +e.offsetX+ '</h3><h3> MouseY: ' +e.offsetY+ '</h3>'; //MouseX: 121 MouseY: 100

//     //document.box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"; //зміна кольру, в залежності від положення миші у box
//     //document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ", 40)"; //зміна кольру body, в залежності від положення миші у box


// }






// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// // itemInput.addEventListener('keydown',runEvent);

// // itemInput.addEventListener('keyup',runEvent); //event type:keyup
// // itemInput.addEventListener('keypress',runEvent); //event type:keypress

// // itemInput.addEventListener('focus',runEvent); //event type:focus
// // itemInput.addEventListener('blur',runEvent);  //event type:blur

// // itemInput.addEventListener('cut',runEvent); // event type:cut
// // itemInput.addEventListener('paste',runEvent); //event type:paste

// //itemInput.addEventListener('input',runEvent); //event type:input

// // select.addEventListener('change', runEvent); //event type:change
// // select.addEventListener('input', runEvent); //event type:input

// form.addEventListener('submit', runEvent); //event type:submit

// function runEvent(e){
//     e.preventDefault();
//     console.log('event type:'+e.type); // event type:keydown

//     // console.log(e.target.value); //event type:keydown //aaaa

//     // document.getElementById('output').innerHTML = '<h3>'+e.target.value+ '</h3>' // add h3 value

//     //document.body.style.display = 'none';

// }


//4 part

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem);

//filter event
filter.addEventListener('keyup', filterItems);

// function add item
function addItem(e){
    e.preventDefault();


//get input value
    var newItem = document.getElementById('item').value;

    //create new li element
    var li = document.createElement('li');
    //add class
    li.className = 'list-group-item';
    console.log(li);  //<li class="list-group-item"></li>

    //add text node
    li.appendChild(document.createTextNode(newItem));
    // itemList.appendChild(li); // add new(after submit) [object HTMLInputElement]

    //create del button
    var deleteBtn = document.createElement('button');

    //add class del button
    deleteBtn.className = 'btn btn-danger btn-x'

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn);

    itemList.appendChild(li); //  add red button

}

//remove item
function removeItem(e){

    if(e.target.classList.contains('delete')){
       if(confirm("Are You Sure?")){
        var li = e.target.parentElement;
        itemList.removeChild(li); //delete item, after click and confirm
       }
    }
}

//filter items
function filterItems(e){
    //covert text to lowercase
    var text = e.target.value.toLowerCase();
    //get list
    var items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
         if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
         } else {
            item.style.display = 'none';
         }
    });

}