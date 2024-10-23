const productos = "Productos";
document.querySelector("h1").innerText = productos;

function cartas(data){
    let card = data.map((producto) => `
    <div class="card mb-3" style="width: 18rem;">
      <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
    <div class="card-body">
    </div>
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.detail}</p>
    <p class="card-text">$${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
    </div>
    </div>`);

  document.querySelector("section").innerHTML = card.join("")
}
cartas(data);

function filterList() {
  const input = document.querySelector("#search").value.toLowerCase();
  const filterData = data.filter((prod) => prod.title.toLowerCase().includes(input)
)
  if(filterData.length > 0){
    cartas(filterData)
  } else{
    document.querySelector("section").innerText = "El producto buscado no existe"
  }
};
function resetInput() {
  document.querySelector("#search").value = "";
  cartas(data);
}
document
    .querySelector("#filter")
    .addEventListener("click", filterList);
document.querySelector("#reset").addEventListener("click", resetInput);
document.addEventListener("DOMContentLoaded", () => {
    dataCards(data);
  })
filterList()
resetInput()
function filterCategory(category){
  if (category === "Todos"){
    cartas(data);
  }else if (category ==="Vestido"){
    const vestido = data.filter(prenda => prenda.category === "Vestido");
    cartas(vestido);
  }else if (category ==="Falda"){
    const falda = data.filter(prenda => prenda.category === "Falda");
    cartas(falda);
  }else if (category ==="Caftán"){
    const caftan = data.filter(prenda => prenda.category === "Caftán");
    cartas(caftan);
  }else if (category === "Pantalones"){
    const pantalones = data.filter(prenda => prenda.category === "Pantalones")
    cartas(pantalones);
  }
}
