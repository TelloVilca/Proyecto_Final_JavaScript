
//* ARRAY DE OBJETOS BRUTO
let arrayProductos = new Array();
let arrayProductosProcesados = new Array();

//* PETICION AL SERVIDOR
fetch("productos.json").then(respuesta => respuesta.json()).then(objetos => {
    arrayProductos = objetos;

    //* AL FINALIZAR LA PETICION
    cargarArrayProductosProcesados();

})

//* FUNCION PARA PROCESAR LOS PRODUCTOS
function cargarArrayProductosProcesados(){

  //* INTERAR LOS PRODUCTOS
  arrayProductos.forEach(objeto => {

     //* CREAR NUEVO OBJETO DE CLASE PRODUCTO
     arrayProductosProcesados.push(new Producto(objeto));
  });

  //* TERMINADO DE INTERAR SE EMPIEZA A LLENAR EL CATALOGO
  cargarCatalogo();

}

//* PARA ARMAR EL CATALOGO
function cargarCatalogo(){

  //* INTERAR LOS OBJETOS PROCESADOS
  arrayProductosProcesados.forEach(objeto =>{

    //* CREAR UN NUEVO ELEMENTO AL ARTICULO
    let nuevoArticulo = document.createElement("article");
    nuevoArticulo.setAttribute("id","articulo");

    //* ESPECIALIZAR CONTENIDO HTML
    nuevoArticulo.innerHTML = `
        
        <div class="items">
          <img src="${objeto.image}" alt="${objeto.name}">
          <div class="descripcion">
            <p>${objeto.name}</p>
            <span class="precio_normal">Precio anterior: ${objeto.price}</span>
            <br>
            <span class="porcentaje_descuento">${objeto.offer}</span>
            <br>
            <span class="precio_descuento"> Precio ahora: ${objeto.priceEnd}</span>
          </div>
          <button>
                <a href="#">Añadir al carrito</a>
          </button>
        </div>
        `;

    //* AÑADIR EL NUEVO ARTICULO AL CATALOGO Y QUE APARESCA
    document.querySelector(".fila").append(nuevoArticulo);
    
  })
}