/*********************
POO Objetos y clases.
**********************/

/* INTERFACES */
interface CamisetaBase{
    setPrecio(precio:number):void
    getPrecio():number
}

class Camiseta implements CamisetaBase{
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number){
        this.color = color
        this.modelo = modelo
        this.marca = marca
        this.talla = talla
        this.precio = precio
    }

    private color:string
    private modelo:string
    private marca:string
    private talla:string
    private precio:number

    public setPrecio(precio:number):void{
        this.precio = precio
    }

    public getPrecio():number{
        return this.precio
    }
}

var cami = new Camiseta('Rojo','Manga corta','Nike','XXL',20)
console.log(cami)
cami.setPrecio(15)
console.log(cami)
console.log(cami.getPrecio())


/* HERENCIA */
class Sudadera extends Camiseta{
    constructor(color:string,modelo:string,marca:string,talla:string,precio:number,capucha:boolean){
        super(color,modelo,marca,talla,precio)
        this.capucha = capucha
    }

    private capucha:boolean

    public setCapucha(capucha:boolean):void{
        this.capucha = capucha
    }

    public getCapucha():boolean{
        return this.capucha
    }
}

var suda = new Sudadera('Negro','Gorda','Adidas','M',35,true)
console.log(suda)
console.log(suda.getCapucha())
suda.setCapucha(false)
console.log(suda)
console.log(suda.getCapucha())
suda.setPrecio(30)
console.log(suda)
console.log(suda.getPrecio())