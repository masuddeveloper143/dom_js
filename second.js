console.log('this is the second js files');

let secondList = document.getElementById('second-list');

let li = document.createElement('li');
li.innerText = 'my dynamic item'

secondList.appendChild(li);