
let categorias = [
    {texto: "Future mode", href: "./index.html"}
]
let item = [];
for (let menu of categorias) {
    item.push(`
<nav id="nav" class="navbar navbar-expand-lg " >
  <div class="container-fluid">
    <a id="titleNav"class="navbar-brand" href="${menu.href}">${menu.texto}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul id="lloginNav" class="navbar-nav me-auto mb-2 mb-lg-0">      
        </li>
        <li class="nav-item" style="aling-items:right;">
        ${localStorage.getItem("email") ?
          `<span>Hola, ${localStorage.getItem("email")}!</span> 
            <span style="margin-left: 10px; margin-right: 10px;">|</span> 
            <li class="nav-item">
              <a href="cart.html" style="color: inherit; text-decoration: none;">
              <img id="imgCart" src="./img/imgCart.png" height="25"><b id="quantity">${localStorage.getItem("quantity")}</b>
            </a></li><span> | </span>
            <span class="nav-item" onClick="Logout()">Cerrar sesión</span>`
            : `<li class="nav-item"><a href='./login.html'>Iniciar sesión</a></li>`
        }
        </li>
      </ul>
    </div>
  </div>
</nav>`);
}
document.querySelector("header").innerHTML = item.join("");

function Logout(){
    localStorage.clear()
    location.href = "../index.html"
}
