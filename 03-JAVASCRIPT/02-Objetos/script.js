var kev = {
    nombre: 'Kevin',
    edad: 29,
    familiares: ['Isa', 'Cati'],
    idiomas: {
        español: 'nativo',
        portugués: 'nativo',
        inglés: 'intermedio'
    }
}

console.log(kev);
console.log('-----------');
console.log(kev.nombre);
console.log(kev.edad);
console.log(kev.familiares);

for(familiar of kev.familiares){
    console.log(familiar);
}

console.log(kev.idiomas);

for(idioma in kev.idiomas){
    console.log(idioma + ' --> nivel ' +kev.idiomas[idioma]);
}


/* CREAR OBJETOS CON CONSTRUCTOR */

function Persona(nombre,edad){
    this.nombre=nombre;
    this.edad=edad;
    this.mostrar = () =>{
        return console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad}`);
    }
}

console.log('-----------');
const p1 = new Persona('Isabel', 57);
const p2 = new Persona('Cati', 38);
console.log('Esta es mi madre:');
p1.mostrar();
console.log('Esta es mi hermana:');
p2.mostrar();