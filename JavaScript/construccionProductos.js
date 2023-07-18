//* DEFINIR LOS PRODUCTOS
class Producto {

    //* PROPIEDADES
    
    _name = "Default";
    _price = 0;
    _priceEnd = 0;
    _offer = 0;
    _image = "productoDefault.jpg"

    //* EL CONSTRUCTOR DE LA CLASE 
    constructor(objProduct) { //* SON PARAMETROS QUE AL MOMENTO DE INGRESAR UN PRODUCTO

        //* EL THIS ES PARA OBTENER UN DATO DE ARRIBA DE PROPEIDADES 
        
        this._name = objProduct.name;
        this._price = +objProduct.price;
        this._priceEnd = +objProduct.priceEnd;
        this._offer = +objProduct.offer;

        //* VALIDAR SI SE INGRESO UNA IMAGEN
        if (objProduct.image != undefined) {
            this._image = objProduct.image;
        }
    }

    //* OBTENER Y ESTABLECER ATRIBUTOS

    get name() {
        return this._name.trim().toUpperCase();
    }

    get price() {
        return this._price.toFixed(2);
    }

    get offer() {
        return ((this._offer * 100) + "%");
    }

    get priceEnd() {
        return this._priceEnd.toFixed(2);
    }

    get image() {
        return ("" + this._image);
    }

}
