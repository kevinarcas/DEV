var lista = new Array();

lista[0] = 'uno';
lista[1] = 'dos';
lista[2] = 'tres';

/* Mostrar array entero y cada elemento */
console.log(lista);
for(elem of lista){
    console.log(elem);
}

/* Mostrar longitud */
console.log('----------------------')
console.log('La longitud es:' + lista.length)
for(let i=0; i<lista.length; i++){
    console.log(lista[i]);
}

/* Añadir elemento al final */
console.log('----------------------')
console.log(lista);
lista.push('cuatro');
console.log(lista);

/* Eliminar elemento del final */
console.log('----------------------')
console.log(lista);
lista.pop();
console.log(lista);


/* Array map */
console.log('----------------------')
var nombres = ['Kevin', 'Ahmed', 'Alex'];
nombres.map((name,i)=>{
    return console.log (i +': '+name)
})


console.log('----------------------')
function cuadrado(num){
    return num*num;
}

const numeros = [1,2,3];
const numCuadrados = numeros.map((num) => {
    console.log(cuadrado(num))
});


/* Spread operator */
console.log('----------------------')
const user = {
    name: 'Kevin',
    lastname: 'Arcas'
}

const adress = {
    street: 'calle 123',
    city: 'Madrid'
}

const userInfo = {
    ...user,
    ...adress
}

console.log(userInfo);