function suma(n1,n2){
    console.log(n1 +'+' +n2 +'='+ (n1+n2));
    return n1+n2;
}

var res=suma(5,3);


/* Argumentos variables */

function sumaVarios(...numeros){
    var resultado=0;
    var cadena='';
    for(let i=0; i<numeros.length; i++){
        if(i!=0){
            cadena+='+'
        }
        cadena+=numeros[i];
        resultado+=numeros[i];
    }

    console.log(cadena+'='+resultado);
    return resultado;
}

sumaVarios(1,2,3,4);


/* Argumentos variables 2 */

function sumaVarios2(num1,...numeros){
    var resultado=num1;
    var cadena=num1;

    for(let i=0; i<numeros.length; i++){
        resultado+= numeros[i];
        cadena+='+'+numeros[i];
    }

    console.log(cadena+'='+resultado);
    return resultado;
}

sumaVarios2(1,2,3,4,5);


/* Función anónima */

const boton = document.createElement('button');
boton.innerText = 'Click me';
boton.addEventListener('click', function(){
    console.log('Hola mundo');
} 
);
document.body.append(boton);


/* Arrow function */

const resta = () => {
    return 10-4;
}
console.log(resta());


/* Arrow function parámetros */

const restaDos = (n1,n2) => {
    return n1-n2;
}
console.log(restaDos(10,4));


/* Arrow function una línea: hace return de lo que esté dentro */

const restaDosMejor = (n1,n2) => n1-n2;
console.log(restaDosMejor(10,4));


/* Arrow function una línea OBJETOS
Si queremos devolver un objeto, se ponen paréntesis. */

const showObjetct = () => ({name: 'Kevin', edad:29});
console.log(showObjetct());





/****************************************/
/* Callback */
console.log('----------------------------');
function calculadora(n1, n2, callback){
    console.log('Callback devuelve: '+callback(n1,n2));
}

function sumar(n1, n2){
    return n1+n2;
}

function restar(n1, n2){
    return n1-n2;
}

calculadora(5,2,sumar);
calculadora(5,2,restar);

/* Async / await */
console.log('----------------------------');
let data1 = fetch('./comidas.json');
console.log(data1); /* Me muestra una Promise, porque no da tiempo a cargarlo. */

console.log('----------------------------');
console.log('----------------------------');

const ul=document.createElement('ul');
let data2 = fetch('./comidas.json')
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log("Respuesta2:",data);
        data.forEach(function (post){
            const li=document.createElement('li');
            li.innerText = post.nombre;
            ul.append(li);
        })
        document.body.append(ul);
    })

console.log('linea 2');

console.log('----------------------------');
console.log('----------------------------');

async function cargarComidas(){
    const response3 = await fetch('./comidas.json');
    const data3 = await response3.json();
    console.log("Respuesta3:",data3);
}
cargarComidas();
console.log('linea 3');