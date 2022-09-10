/*MIS APUNTES
función se llama a sí mismo para no mezclarse con las otras funciones
*/
(function(){
/*MIS APUNTES
constante [que genera un arreglo con toda la clase questions__tittle]
*/

    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

/*MIS APUNTES
iteración/ciclo por cada pregunta el evento/click desplegará el elemento "invsible" individualmente
1.altura
2.trae al hermano/pareja de "questions"

addPADDING llamo a el elemento/clases/herencias de toda la clase
*/
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;
/*MIS APUNTES
PADDING/QUESTION llamo a (funcion en css) y obtengo un[arreglo de sus hijos/subclases]
*/
            addPadding.classList.toggle('questions__padding--add');
            question.children[0].classList.toggle('questions__arrow--rotate');
/*MIS APUNTES
IF la variable es igual a 0 es porque se le quitó la altura
            HEIGHT muestra la altura mínima
            ANSWER muestra la altura ***ATENCIÓN comillas inversas y unidad en pixeles***
*/
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();