const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const btn = document.querySelector('.btn');
const color = document.querySelector('.span-color')
const main = document.querySelector('#main');

function ramdonNumber(){
    let number = Math.random();
    const randomNumber = Math.floor((number * hexa.length));
    return randomNumber;
}

btn.addEventListener('click', function(){  
    
    let hexColor = '#';
    for (let index = 0; index < 6; index++) {
        hexColor += hexa[ramdonNumber()];        
    }

    console.log(hexColor);
    
    main.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})