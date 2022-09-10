/*MIS APUNTES
función se llama a sí mismo(autoinvocada) para no mezclarse con las otras funciones
*/
(function(){
/*MIS APUNTES
traigo las clases (menu-link-close)
*/
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
/*MIS APUNTES
1. elemento hamburguesa--al darle click traiga la clase (nav__link--show)
*/
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
/*MIS APUNTES
cierre al menú (al darle click)
*/
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();