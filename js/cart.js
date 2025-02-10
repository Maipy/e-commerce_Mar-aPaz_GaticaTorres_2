const cardsSection = document.querySelector("#cart #cards")

function getCart(data){
    const list = data.map(
      card => `
        <div class="card border shadow-none">
          <div class="card-body">
            <div class="d-flex align-items-start border-bottom pb-3">
              <div class="me-4">
                <img src="${card.product.img}" alt="${card.product.title}" class="avatar-lg rounded" />
              </div>
              <div class="flex-grow-1 overflow-hidden">
                <h5 class="text-truncate font-size-18">${card.product.title}</h5>
                <div class="row">
                  <div class="col-md-3">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Precio</p>
                      <h5 class="mb-0 mt-2">$${card.product.price}</h5>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Cantidad</p>
                      <h5 class="mb-0 mt-2">${card.quantity}</h5>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="mt-3">
                      <p class="text-muted mb-2">Total</p>
                      <h5>${card.product.price * card.quantity}</h5>
                    </div>
                  </div>
                  <div class="col-md-2">
                    <div class="mt-3">
                      <p class="text-muted mb-2" onclick="removeItem(${card.product.id})">Eliminar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
    )
    cardsSection.innerHTML = list.join("")
}
getCart(JSON.parse(localStorage.getItem("cart")))

function total(data){
  let cartTotal = document.querySelector("#cart-total")
  let total = data.length > 0
      ? data.reduce(
        (acumulado, actual) => acumulado + actual.product.price * actual.quantity, 0
      )
    : 0
  cartTotal.innerText = "$" + total
}
total(JSON.parse(localStorage.getItem("cart")))

function removeItem(id){
  const cards = JSON.parse(localStorage.getItem("cart"))
  const newCards = cards.filter(card => card.product.id !== id)
  localStorage.setItem("cart", JSON.stringify(newCards))
  getCart(newCards)
  total(newCards)
  let quantity = newCards.reduce((acumulado, actual) => acumulado + actual.quantity, 0)
  localStorage.setItem("quantity", quantity)
  const quantityTag = document.querySelector("#quantity")
  quantityTag.innerText = quantity
}

function cleanCart(){
  localStorage.setItem("cart", JSON.stringify([]));
    localStorage.setItem("quantity", "0");
    getCart([]);
    total([]);
    const quantityTag = document.querySelector("#quantity");
    quantityTag.innerText = "0";
}

function moreClothes(){
  location.href = "./index.html"
}
function checkout() {
  const quantity = parseInt(localStorage.getItem("quantity")) || 0;
  if (quantity == 0) {
      Toastify({
          text: "¡No hay productos en el carrito!",
          style: {
              background: "#3E5916",
          },
          offset: {
              y: 10,
          },
      }).showToast();
    }else{
      Swal.fire({
      text: "¿Estás seguro/a de que quieres realizar la compra?",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: "#88A61C",
      cancelButtonColor: "red",
  }).then((result) => {
      if (result.isConfirmed) {
          const datos = {
            user: localStorage.getItem("email"),
            items: JSON.parse(localStorage.getItem("cart")) || [],
        };
          fetch("https://673f8e51a9bc276ec4b8f25d.mockapi.io/orders", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(datos),
          })
              .then((response) => response.json())
              .then((order) => {
                Swal.fire({
                  text: `Gracias por tu compra ${order.user}. Numero de orden: ${order.id}`,
                  confirmButtonText: "OK",
                  confirmButtonColor: "#88A61C",
              }); 
                  cleanCart();
              })
              .catch((error) => {
                  console.error("No se puede procesar la solicitud:", error);
                  Swal.fire({
                    text: "Lo siento, no pudimos procesar la solicitud...",
                    confirmButtonText: "OK",
                    confirmButtonColor: "#88A61C",
                })

              });
      }
  });
}}