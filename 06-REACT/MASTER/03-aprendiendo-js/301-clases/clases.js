class Coche{
    constructor(marca, modelo, velocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }

    aumentarVelocidad(){
        this.velocidad += 5;
    }

    reducirVelocidad(){
        this.velocidad -= 5;
    }
}

class Autobus extends Coche{
    constructor(marca, modelo, velocidad, pasajeros){
        super(marca, modelo, velocidad);
        this.pasajeros = pasajeros;
    }

    mostrarPasajeros(){
        return `El bus tiene ${this.pasajeros} pasajeros`;
    }
}

var coche1 = new Coche('Mercedes', 'Clase A', 230);
var coche2 = new Coche('Ford', 'Fiesta', 160);

console.log(coche1);
coche1.aumentarVelocidad();
console.log(coche1);


var autobus1 = new Autobus('Volvo', 'F19', 130, 45);

console.log(autobus1);
autobus1.aumentarVelocidad();
console.log(autobus1);
console.log(autobus1.mostrarPasajeros());