/************************
 FETCH (Peticiones AJAX) 
************************/

var div_listado = document.querySelector('#listado')
var div_usuario = document.querySelector('#usuarioConcreto')
var div_profesor = document.querySelector('#profesor')
var div_comidas = document.querySelector('#comidas')
var usuarios = []
fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
        usuarios = data

        usuarios.map((user,i) => {
            let usuario = document.createElement('p')
            usuario.innerHTML = `${i}. ${user.name} - ${user.email}`
            div_listado.appendChild(usuario)
        })

        document.querySelector('#cargaListado').style.display = 'none'


        // Hago otra promesa dentro de la de fuera.
        return fetch('https://jsonplaceholder.typicode.com/users/7')
    })
    .then(usu => usu.json())
    .then(usu => {
        let parrafo = document.createElement('p')
        parrafo.innerHTML = `${usu.name} - ${usu.email}`
        div_usuario.appendChild(parrafo)
        document.querySelector('#cargaUsuario').style.display = 'none'


        // Hago otra promesa creada desde cero.
        return getInfo()
    })
    .then(info => {
        let parrafo = document.createElement('p')
        parrafo.innerHTML = info
        div_profesor.appendChild(parrafo)
        document.querySelector('#cargaProfesor').style.display = 'none'
    })
    .catch(error => console.log(error))



/************************
        PROMESAS
************************/
// Cómo crear una promesa desde cero.

function getInfo(){
    var profesor = {
        'nombre': 'Kevin',
        'apellidos': 'Arcas',
        'website': 'http://kevinarcas.es'
    }
    
    return new Promise( (resolve, reject) => {
        var profesor_string = JSON.stringify(profesor)

        if(typeof(profesor_string) != 'string'){
            return reject('error')
        }
        else{
            return resolve(profesor_string)
        }
    })
}



/************************
        ASYNC-AWAIT
************************/

async function cargarComidas(){
    try{
        const respuesta = await fetch('./comidas.json');
        const comidas = await respuesta.json();
        
        comidas.map((comida,i) => {
            let tituloComida = document.createElement('h3')
            tituloComida.innerHTML = `${i+1} - ${comida.nombre}`
            div_comidas.appendChild(tituloComida)
    
            let contenidoParrafo = ''
            comida.ingredientes.forEach(element => {
                contenidoParrafo += `${element} `
            });
            let parrafo = document.createElement('p')
            parrafo.innerHTML = contenidoParrafo
            div_comidas.appendChild(parrafo)
            
        })
        document.querySelector('#cargaComidas').style.display = 'none'
    }
    catch(error){
        console.log(error)
    }
    
}

cargarComidas();