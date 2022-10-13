const boxElm =  document.querySelector('#box');
let y =0;
let up = false;

let x =0;
const startY = (innerHeight / 2 - boxElm.offsetHeight) / 2 ;

setInterval(() => {
    // const y = ((innerHeight -80)/2) + Math.sin(x++ / 180)* ((innerHeight -80)/ 2);
    //const y = startY + Math.sin(x++ / 180) * 70;
    //boxElm.style.top = `${y}px`;
    //boxElm.style.left = `${x}px`;

}, 5);