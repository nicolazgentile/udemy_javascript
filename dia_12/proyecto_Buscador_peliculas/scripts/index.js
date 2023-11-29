let elmtSelector = document.querySelector('#selector');
let elmtTextoBusqueda = document.querySelector('#textoBusqueda');
let elmtBuscar = document.querySelector('#buscar');
let elmtListado = document.querySelector('#listado');
let objJson;

elmtSelector.addEventListener('change', cargarArchivo)

function cargarArchivo() {
    let nombreArchivo = '';
    if(elmtSelector.value == 'series') { nombreArchivo = 'series.json'; }
    else { nombreArchivo = 'peliculas.json'; }

    fetch('json_docs/xxx'.replace('xxx', nombreArchivo))
    .then(resp => resp.json())
    .then(result => {
        objJson = result;
        let miEvento = new CustomEvent('archivoCargado');
        elmtTextoBusqueda.dispatchEvent(miEvento);
    }).catch(function(error){
        alert("Error: |||" + error);
    });
}

elmtTextoBusqueda.addEventListener('archivoCargado', function(){
    alert("El archivo se ha cargado correctamente.")
});
elmtTextoBusqueda.addEventListener('keydown', restringirEntradas);
elmtTextoBusqueda.addEventListener('keyup', listarFilms);
elmtBuscar.addEventListener('click', listarFilms);

function restringirEntradas(event) {
    if (![32, 8, 46].includes(Number(event.keyCode )) && event.keyCode < 65) {
        event.preventDefault();
    }
    // alert(event.keyCode);
}

function listarFilms() {
    elmtListado.innerHTML = "";
    for(let film of objJson.data) {
        if(film.nombre.toLowerCase().includes(elmtTextoBusqueda.value.toLowerCase())) {
            let itemList = document.createElement('li');
            itemList.textContent = film.nombre;
            let itemListDescrip = document.createElement('p');
            itemListDescrip.textContent = film.sinopsis;
            itemListDescrip.style.display = 'none';

            itemList.addEventListener('mouseover', function() {
                itemList.firstElementChild.style.display = 'block';
            });
            itemList.addEventListener('mouseout', function() {
                itemList.firstElementChild.style.display = 'none';
            });
            itemList.appendChild(itemListDescrip);
            elmtListado.appendChild(itemList);
        }
    }
}