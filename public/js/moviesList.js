window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    const logo = document.querySelector('body figure')

    /* let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
     */
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    
    logo.addEventListener("mouseover",()=>{
        body.style.backgroundColor="#b3d5e2" /* #7f7f7f esto pide el ejercicio pero le pongo otro para que quede mejor */
    })
}
