class Producto {
  constructor(titulo,detalle,precio,stock,imagen){
      this.titulo = titulo;
      this.detalle = detalle;
      this.precio = precio;
      this.stock = stock;
      this.imagen = imagen;
  }
}

const params = new URLSearchParams(window.location.search);
const url = parseInt(params.get('prod'));

const filtrarProducto = data.find(prod => prod.id === url);

const htmlProducto = `
<div class="container text-center">
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${filtrarProducto.img}" class="img-fluid rounded-start" alt="">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h1 class="card-title" class=>${filtrarProducto.title}</h1>
          <p class="card-text">${filtrarProducto.detail}</p>
          <p class="card-text">${filtrarProducto.detail_2}</p>
          <p class="card-text">Precio: $${filtrarProducto.price}</p>
          <p class="card-text">Stock: ${filtrarProducto.stock}</p>
        </div>
      </div>
    </div>
  </div>
</div>
`;

const main = document.querySelector("main")
main.innerHTML = htmlProducto
