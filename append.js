// 1. where to add 
let placeList = document.getElementById('places-list');
// 2. what to be added 
let li = document.createElement('li');
li.innerText = 'you know who I am i';

// 3. add the child 
placeList.appendChild(li);