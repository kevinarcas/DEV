var nombre = 'Kevin Arcas';
var edad = 29;
var datos = document.getElementById('datos');

datos.innerHTML =  `<h2>Me llamo ${nombre}</h2>
                    <h3>Tengo ${edad} años</h3>`;
/* datos.innerHTML += '<h3>Tengo '+edad+' años</h3>'; */


var nombres = ['Kevin', 'Maria Isabel', 'Catia'];

document.write('<p>Recorro nombres con for</p>')
for(let i=0; i<nombres.length; i++){
    document.write(nombres[i] +'<br />');
}

document.write('<p>Recorro nombres en forEach con función callback anónima</p>')
nombres.forEach(function(elem) {
    document.write(elem +'<br />');
});

document.write('<p>Recorro nombres en forEach con arrow function</p>')
nombres.forEach((elem) => {
    document.write(elem +'<br />');
});


/*************** OBJETOS ***********************/

var coche = {
    marca: 'Mercedes',
    modelo: 'Clase A',
    year: 2020,
    cambio: 'Automático',

    mostrarDatos(){
        document.write(`<h4>Mostrando mi coche con método</h4>
                        <p>${this.marca}<br />
                        ${this.modelo}<br />
                        ${this.year}<br />
                        ${this.cambio}</p>`);
        console.log(this.marca, this.modelo, this.year, this.cambio);
        console.log(coche);
    }
};

document.write(`<h4>Mostrando mi coche con document.write</h4>
                <p>${coche.marca}<br />
                ${coche.modelo}<br />
                ${coche.year}<br />
                ${coche.cambio}</p>`);

coche.mostrarDatos();


/***************** PROMESAS ********************/


var saludar = new Promise((resolve, reject) => {
    setTimeout( () => {
        let saludo = 'Hola muy buenas';
        /* saludo = false; */

        if(saludo){
            resolve(saludo);
        }
        else{
            reject('No existe saludo');
        }
    },3000);
});

/* Esto se ejecuta cuando me llegue el resultado de la promesa. */
saludar.then(resultado => {
    console.log(resultado);
})
.catch(err => {
    console.log(err);
})