const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const subItem = document.querySelectorAll('#sub-item');
const subMenu = document.querySelector('#sub');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active')
    body.classList.toggle('active');
    toggle.classList.toggle('active')
    
})

subItem.forEach(item => {
    item.addEventListener('click', (e) => {
        let li = e.target.closest('li');
        console.log(li.classList);
        li.classList.toggle('active')
    })    
})
