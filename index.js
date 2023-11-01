const body = document.querySelector('body');
const btn = document.querySelector('button');
const span = document.querySelector('span');

const arr = ['red', 'blue', 'yellow', 'green', 'purple', 'orange', 'cornflowerblue', 'coral','#afaf26', '#26adaf'];

 function generateRandomColor(){
    let randomColor = Math.floor(Math.random() * arr.length);
    body.style.backgroundColor = arr[randomColor];
    span.textContent = arr[randomColor].toUpperCase();
    span.style.color = arr[randomColor];
 }
 
 btn.addEventListener('click', generateRandomColor);
