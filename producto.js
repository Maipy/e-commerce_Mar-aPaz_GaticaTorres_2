let tituloVestido = document.querySelector("card-title");
let detalleVestido = document.querySelector("card-text");
let precioVestido = document.querySelector("info2");
let stockVestido = document.querySelector("info3");
let imgVestido = document.querySelector ("card-img-top img-fluid");

class Producto {
    constructor(titulo,detalle, precio, stock, imagen){
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}
const vestido = new Producto("Vestido", "vestido corto confeccionado con plastico reciclado obtenido mediante campañas de recolección de botellas durante los meses de febrero y marzo en Las Toninas", 10000, 24, src="../Colección Otoño-Verano/look 1.2 b.jpg");

tituloVestido.innerHTML = `${Producto.titulo}`;
detalleVestido.innerHTML = `${Producto.detalle}`;
precioVestido.innerHTML = `${Producto.precio}`;
stockVestido.innerHTML = `${Producto.stock}`;
imgVestido.innerHTML = `${Producto.imagen}`;
