// 1. where to add 
let placeList = document.getElementById('places-list');
// 2. what to be added 
let li = document.createElement('li');
li.innerText = 'you know who I am i';

// 3. add the child 
placeList.appendChild(li);


// 1. where to add 
let maincontainer = document.getElementById('maincontainer');
// console.log(maincontainer);
// --------------------------------------------------------------------------------------
// 2. what to be added 
let section = document.createElement('section');
let h1 = document.createElement('h1');
h1.innerText = 'section';
section.appendChild(h1);

// --------------------------------------------------------------------------------------

let ul = document.createElement('ul');
let li1 = document.createElement('li');
li1.innerText = 'i am from in bangladesh';
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.innerText = 'but i am live in malaysia';
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.innerText = 'right now im working in a resturen in malaysia';
ul.appendChild(li3);

let li4 = document.createElement('li');
li4.innerText = 'my company name is kyochon991';
ul.appendChild(li4);

section.appendChild(ul);

maincontainer.appendChild(section);

// --------------------------------------------------------------------------------------------------------



