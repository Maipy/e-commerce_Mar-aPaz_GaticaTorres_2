const prods = document.querySelector("h1")
prods.innerText = "Productos ";

function cartas(){
    let card = data.map((producto) => `
    <div class="card mb-3" style="width: 18rem;">
      <a href="#"><img src="${producto.img}" class="card-img-top img-fluid" style="height: 200px; object-fit: cover;" alt="${producto.id}"></a>
    <div class="card-body">
    </div>
    <h5 class="card-title">${producto.title}</h5>
    <p class="card-text">${producto.detail}</p>
    <p class="card-text">$${producto.price}</p>
    <p class="card-text">${producto.stock}</p>
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary border-0">Ver más</a>
    </div>
    </div>`);
  document.querySelector("section").innerHTML = card.join("")
}

const input = document.querySelector("input")
const filter = document.querySelector("#btnFilter")
const reset = document.querySelector("#btnReset")

const cleanInput = () => {
  input.value=""
  cartas(data)
}

const filterCategoria = (category) => {
  const filterDataCategori = data.filter((prod) =>
      prod.category.toLowerCase() === category.toLowerCase()
  );
  if (filterDataCategori.length > 0) {
      card(filterDataCategori);
  } else {
      document.querySelector('section').innerHTML = "No encontrado";
  }
};

const loadingCards = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("ok")
  }, 2000)
})
loadingCards.then(()=> cartas(data))

function filterCategory(category){
  if (category === "Todos"){
    cartas(data);
  }else if (category ==="Vestido"){
    const vestido = data.filter(prenda => prenda.category === "Vestido");
    cartas(vestido);
  }else if (category === "Falda"){
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
filter.addEventListener("click", filter)
reset.addEventListener("click", reset)