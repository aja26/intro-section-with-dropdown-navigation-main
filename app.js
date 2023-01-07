const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const icon = document.getElementById('menu-icon');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    body.classList.toggle('active');
  
    if( icon.src = 'images/icon-menu.svg'){
        icon.src = 'images/icon-close-menu.svg'
    } else{
        icon.src =  'images/icon-menu.svg';
    }
})