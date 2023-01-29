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

let cadena: string = 'Kevin Arcas'
let numero: number = 29
let siono: boolean = true
let cualquiera: any = 'Hola'
cualquiera = 77


/**************
    ARRAYS
***************/
let lenguajes1: Array<any> = ['PHP', 'JS', 9]
let lenguajes2: Array<string> = ['PHP', 'JS', 'Java']
/* Otra forma de definir un array. */
let edades:number[] = [18,23,45,77]


/*************
MÚLTIPLES TIPOS
**************/
let hombre:string | number = 'Francisco'
let mujer:string | number = 1561651


/******************
TIPO PERSONALIZADO
*******************/
type letrasonumeros = string | number
let personalizado:letrasonumeros = 'ABCDE'
let customizado:letrasonumeros = 12345


/******************
FUNCIONES: Puedo o no usar el tipado fuerte en las funciones
*******************/

/* Le indico cada tipo de parametro, y lo que devuelve la función. */
function pintaNumero(numero:number):string{
    return 'El número es: '+numero
}


console.log(cadena, numero, siono, cualquiera)
console.log(lenguajes1, lenguajes2, edades)
console.log(hombre, mujer)
console.log(personalizado, customizado)
console.log(pintaNumero(15))