/*********************
POO Objetos y clases.
**********************/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Camiseta = /** @class */ (function () {
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
var cami = new Camiseta('Rojo', 'Manga corta', 'Nike', 'XXL', 20);
console.log(cami);
cami.setPrecio(15);
console.log(cami);
console.log(cami.getPrecio());
/* HERENCIA */
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera(color, modelo, marca, talla, precio, capucha) {
        var _this = _super.call(this, color, modelo, marca, talla, precio) || this;
        _this.capucha = capucha;
        return _this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Camiseta));
var suda = new Sudadera('Negro', 'Gorda', 'Adidas', 'M', 35, true);
console.log(suda);
console.log(suda.getCapucha());
suda.setCapucha(false);
console.log(suda);
console.log(suda.getCapucha());
suda.setPrecio(30);
console.log(suda);
console.log(suda.getPrecio());
