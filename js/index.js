// document - DOM
// window - BOM

// Serch element: 

//document.getElementById('products');
//document.getElementByTagName('h2');
//document.getElementByClassName('cards');
// document.querySelector('#products') - finds one element by its selector;
// document.querySelectorAA('h2') - finds an array of elements by its selector;


//Added a clock:
setInterval(function() {
    const clockContainer = document.querySelector('.clock');
    clockContainer.innerText = new Date().toLocaleTimeString();
    }, 1000);

