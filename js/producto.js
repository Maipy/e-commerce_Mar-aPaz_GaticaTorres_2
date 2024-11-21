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
const id = parseInt(params.get('prod'));

const filtrarProducto = data.find(prod => prod.id === id);

const mainContent = `
<div class="container text-center" id="ProductoX">
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
          ${localStorage.getItem("email") ?`
            <div>
              <div class="input-group">
                <button class="btn btn-secondary" type="button" onclick="increaseItem()">+</button>
                <input type="number" class="form-control" value="1" style="width: 50px; text-align: center;">
                <button class="btn btn-secondary" type="button" onclick="decreaseItem()">-</button>
              </div>
            </div>
                <a class="btn btn-secondary col-12 m-3" onclick="addItems()">Agregar al carrito</a>
                `   
              :`<a href="../login.html" class="btn btn-secondary col-12">Iniciar sesión para comprar</a>`
          }
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
const main = document.querySelector("main")
main.innerHTML = mainContent
const idProduct = Number(window.location.search.split("=")[1])
const contador = document.querySelector(".input-group input")

function decreaseItem(){
  if(Number(contador.value) > 1){
    contador.value = Number(contador.value)-1
  }
}
function increaseItem(){
  const product = data.find(card => card.id === idProduct)
  if(product.stock > contador.value){
      contador.value = Number(contador.value) + 1
  }
}

function addItems(){
  function add(){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const idProduct = Number(window.location.search.split("=")[1]);
    const product = data.find(item => item.id === idProduct);
    const existeIdEnCart = cart.some(item => item.product.id === idProduct);
  
  if(existeIdEnCart){
    cart = cart.map(item => {
      if(item.product.id === idProduct){
        return { ...item,quantity: item.quantity + Number(contador.value)}
      }else{
        return item
      }
    })
  }else{
    cart.push({product:product, quantity: Number(contador.value)})
  }
  localStorage.setItem("cart", JSON.stringify(cart))
  let quantity = cart.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity",quantity)
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity 
  contador.value = "1"
  Toastify({
    text: "Se añadió un artículo al carrito de compras",
    style: {
      background: "linear-gradient(to right, #3E5916, #88A61C)",
      
    }
  }).showToast()
  }
  Swal.fire({
    text: "Está segura/o de querer añadir este artículo al carrito de compras?",
    confirmButtonText: "Claro que sí!",
    cancelButtonText: "No!",
    showCancelButton:true,
    showCloseButton: true,
    confirmButtonColor: "#88A61C",
    cancelButtonColor: "#e50000",
  }).then(result => {
    if(result.isConfirmed){
      add()
    }
  })
}
function moreClothes(){
  location.href = "./index.html"
}