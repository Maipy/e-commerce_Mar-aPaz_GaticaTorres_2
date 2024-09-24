
let categorias = [
    {texto: "Materiales", href: "/Materiales"},
    {texto: "Nosotros", href: "/Nosotros"},
    {texto: "Inicio", href: "/Inicio"},
]
let item = [];

for (let menu of categorias) {
    item.push(`<li><a class="nav-link" href="${menu.href}">${menu.texto}</a></li>`);
}
document.querySelector("header").innerHTML = item.join("");
