/*MIS APUNTES
(function(){}) ()= se llama a si misma para proteger el código para no mezclarlo con los todos los archivos JS que se crearán
*/
(function(){
    /*MIS APUNTES
se crea una constante/variable selecciona todos los elementos desde (la clase) [lo transforma en un array]
    */
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    /*MIS APUNTES
crea el evento/acción para el botón "NEXT", {cada click (avanza 1)}
    */
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    /*MIS APUNTES
crea el evento/acción para el botón "BEFORE", {cada click (retrocede 1)}
    */
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });
    /*MIS APUNTES
variable trae al elemento actual desde la clase (.testimony__body--show)
value = transforma a número para no concatenar (toma la posición de id)
value = id (+1/-1)
    */
    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

  /*MIS APUNTES
IF en caso de no haber más casos/es rebasado se envía al primer/último elemento
    */
        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }
  /*MIS APUNTES
[selescciona desde el primer caso (debe considerarse desde 0)]
además agrega la clase que muestra los elementos
    */
        sliders[value-1].classList.add('testimony__body--show');

    }

})();