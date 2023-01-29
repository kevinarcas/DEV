var uno = 1;
let dos = 2;
const tres = 3;
cuatro = 4;

/**********************************
1- Modificar variables globalmente:

CONST no puede cambiar su valor.
**********************************/
console.log(uno,dos,tres,cuatro);
uno*=10;
dos*=10;
cuatro*=10;

console.log('Modificando globalmente... var let const global');
console.log(uno,dos,tres,cuatro);
console.log('-----------------------------------------------');
uno=1; dos=2; cuatro=4;

/**********************************
2- Redeclarar variables en global:

let y const NO SE PUEDE REDECLARAR.
**********************************/
console.log(uno,dos,tres,cuatro);
var uno = 10;
cuatro = 40;

console.log('Redeclarando globalmente... var let const global');
console.log(uno,dos,tres,cuatro);
console.log('-----------------------------------------------');
uno = 1;cuatro = 4;

/**********************************
3- Modificar variables dentro de un bloque (función en este caso):

CONST no puede modificar en bloque ni fuera de bloque.
Salen modificadas.
**********************************/

function modificar(){
    uno*=10;
    dos*=10;
    cuatro*=10;

    console.log('Modificando valores dentro de un bloque... var let const global')
    console.log(uno,dos,tres,cuatro);
}

console.log(uno,dos,tres,cuatro);
modificar();
console.log('Fuera de función modificar... var let const global');
console.log(uno,dos,tres,cuatro);
console.log('-----------------------------------------------');
uno=1;dos=2;cuatro = 4;

/**********************************
4- Redeclarar variables dentro de un bloque (función en este caso):

TODAS se pueden modificar, pero
var let y const SALEN SIN MODIFICAR
**********************************/

function redeclarar(){
    var uno = 10;
    let dos = 20;
    const tres = 30;
    cuatro = 40;

    console.log('Redeclarando valores dentro de un bloque... var let const global')
    console.log(uno,dos,tres,cuatro);
}

console.log(uno,dos,tres,cuatro);
redeclarar();
console.log('Fuera de función redeclarar... var let const global');
console.log(uno,dos,tres,cuatro);
console.log('-----------------------------------------------');




/**********************************
                    VAR     LET     CONST    GLOBAL

GLOBAL MODIFICAR     1       1        0         1

GLOBAL REDECLARAR    1       0        0         1

BLOQUE MODIFICAR     1       1        0         1
sale modificado      1       1        0         1

BLOQUE REDECLARAR    1       1        1         1
sale modificado      0       0        0         1

*/