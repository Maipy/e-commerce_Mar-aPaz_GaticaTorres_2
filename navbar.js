
let categorias = [
    {texto: "Nosotros", href: "/Nosotros"},
    {texto: "Inicio", href: "./index.html"},
]
let item = [];

for (let menu of categorias) {
    item.push(`<li><a class="nav-link" href="${menu.href}">${menu.texto}</a></li>`);
}
document.querySelector("header").innerHTML = item.join("");
