const colors = ['green' , 'red', 'blue', 'orange', 'brown', 'yellow', 'cyan'  ];
const btn = document.querySelector('.btn');
const color = document.querySelector('.span-color')
const main = document.querySelector('#main');

function ramdonNumber(){
    let number = Math.random();
    const randomNumber = Math.floor((number * colors.length));
    return randomNumber;
}

btn.addEventListener('click', function(){   
    let number = ramdonNumber();
    
    main.style.backgroundColor = colors[number];
    color.textContent = colors[number];
})
