/*************
INSTALACIÓN TS
**************/
/*
1- Descargar e instalar node desde la web.
2- Abrir terminal bash en VSCode y ejecutar:
    npm install -g typescript
3- Incluir en el html un script con el mismo nombre que el .ts pero .js
4- Cuando haga cambios, poner en la terminal:
    tsc nombrefichero.ts
5- Para no tener que estar ejecutando el comando anterior, se puede poner en modo escucha:
    tsc -w *.ts
*/
/*************
TIPOS DE DATOS
**************/
var cadena = 'Kevin Arcas';
var numero = 29;
var siono = true;
var cualquiera = 'Hola';
cualquiera = 77;
/**************
    ARRAYS
***************/
var lenguajes1 = ['PHP', 'JS', 9];
var lenguajes2 = ['PHP', 'JS', 'Java'];
/* Otra forma de definir un array. */
var edades = [18, 23, 45, 77];
/*************
MÚLTIPLES TIPOS
**************/
var hombre = 'Francisco';
var mujer = 1561651;
var personalizado = 'ABCDE';
var customizado = 12345;
/******************
FUNCIONES: Puedo o no usar el tipado fuerte en las funciones
*******************/
/* Le indico cada tipo de parametro, y lo que devuelve la función. */
function pintaNumero(numero) {
    return 'El número es: ' + numero;
}
console.log(cadena, numero, siono, cualquiera);
console.log(lenguajes1, lenguajes2, edades);
console.log(hombre, mujer);
console.log(personalizado, customizado);
console.log(pintaNumero(15));
