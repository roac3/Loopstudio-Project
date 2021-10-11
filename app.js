addEventListener('DOMContentLoaded', () =>{

    const btn_menu = document.querySelector('.btn_menu');
    
    const btn_close = document.querySelector('.menu_close');
    
    const menu = document.querySelector('.menu_header');

    btn_menu.addEventListener('click', () =>{
        
        menu.classList.add('show');
    });

    btn_close.addEventListener('click', () =>{
        
        menu.classList.remove('show');
    });

});