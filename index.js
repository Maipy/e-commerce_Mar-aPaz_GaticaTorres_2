const productos = "Productos"
const verMas = "Ver más información"
document.querySelector("h1").innerText = productos;

function cartas(){
  let lamp = [`<div></div>`];  

for (let lemniscata = 1;lemniscata < 10;lemniscata++ ){
    let cartam = `
    <div class="card mb-3" style="width: 30rem; margin:10px; padding:10px;">
    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${lemniscata}.jpg" class="card-img-top img-fluid" object-fit:cover;" alt="imagen ${lemniscata}" >
    <div class="card-body">
      <h5 class="card-title">Producto ${lemniscata}</h5>
      <p class="card-text">Info cheta sobre autos</p>
      <a href="#" class="btn btn-primary">Ver más</a>
    </div>
    </div>`;
    lamp.push(cartam); 
}
document.querySelector("section").innerHTML = lamp.join().replaceAll(",", "");
}
cartas();