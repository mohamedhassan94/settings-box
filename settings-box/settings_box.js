            // Changing color variables 

let colorsItems = Array.prototype.slice.call( document.querySelectorAll('.colors-list li') );
let currentColor = '';
let backgroundsColor = document.querySelectorAll('.bg-colorable');
let textsColor = document.querySelectorAll('.text-colorable');
let storedColor = localStorage.getItem('stored-color');
let activeColorIndex = localStorage.getItem('active-color-index');

            // Resizing text variables 
let plusIcon = document.querySelector('.option-box #plusIcon');
let minusIcon = document.querySelector('.option-box #minusIcon');
let body = document.body;
let currentSize = '';
let storedSize = localStorage.getItem('stored-size');




let resetBtn = document.querySelector('.reset-options');


            // show & hide settings box

document.querySelector('.toggle-settings').onclick = function(){
    document.querySelector('.settings-box').classList.toggle('open');
};

            // Changing text color


// checking the local storage for color

if( storedColor !== null ){
    
    currentColor = storedColor ;
    
    colorsItems[activeColorIndex].classList.add('active-color');

    textsColor.forEach( text => {
        text.style.color = currentColor;
    } );

    backgroundsColor.forEach( background => {
        background.style.backgroundColor = currentColor;
    } );

};

for(let item of colorsItems){
    item.addEventListener( 'click', function(e){
        currentColor = item.style.backgroundColor;

            // saving the color in the local storage
        localStorage.setItem('stored-color', currentColor);

            // saving the active color index in the local storage
        localStorage.setItem('active-color-index', colorsItems.indexOf(item));

            // changing the text color
        textsColor.forEach( text => {
            text.style.color = currentColor;
        } );

            // changing the background color
        backgroundsColor.forEach( background => {
            background.style.backgroundColor = currentColor;
        } );

        if( document.querySelector('.active-color') ){
                // removing the active-color class if exists
            document.querySelector('.active-color').classList.remove('active-color');

                // adding the active-color class
            item.classList.add('active-color');  
        }else{
                // adding the active-color class
            item.classList.add('active-color');
        };

    } );
};


            // Changing font size

// checking the local storage for font size

if(storedSize !== null){
    currentSize = storedSize;
    body.style.fontSize = currentSize;
};

plusIcon.onclick = function(){
    let size = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let parsedSize = parseFloat(size);  

    if( parsedSize < plusIcon.getAttribute('maxSize') ){
        currentSize = (parsedSize + 1) + 'px';
        body.style.fontSize = currentSize;
        localStorage.setItem('stored-size', currentSize);
    }else{
        return false;
    };
};

minusIcon.onclick = function(){
    let body = document.body;
    let size = window.getComputedStyle(body, null).getPropertyValue('font-size');
    let parsedSize = parseFloat(size);  
    if( parsedSize >  minusIcon.getAttribute('minSize') ){
        currentSize = (parsedSize - 1) + 'px';
        body.style.fontSize = currentSize;
        localStorage.setItem('stored-size', currentSize);
    }else{
        return false;
    }
} 

// Resetting the options

resetBtn.onclick = function(){
    
    localStorage.removeItem('stored-color');
    localStorage.removeItem('active-color-index');
    localStorage.removeItem('stored-size');

    window.location.reload();

};
