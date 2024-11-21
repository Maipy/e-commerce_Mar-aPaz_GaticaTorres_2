const prods = document.querySelector("h1")
prods.innerText = "Productos ";

const data = [
  {
      id:1,
      title:"Pantalones acampanados Steffie",
      detail:"Pantalón de mezclilla acampanado con detalles de hilo y bolsillos.",
      detail_2:`Ajuste: acampanado.<br>Tejido: Denim reciclado (stock muerto de fábrica)<br>Largo: 40" <br>Color: Multicolor <br>Lavar a máquina a temperatura inferior a 40 °C o lavar a mano con suavidad. Secar colgado. Evita secar bajo la luz solar directa, ya que los colores pueden desteñirse. El denim reciclado puede desteñirse. Te sugerimos lavarlo por separado o con colores más oscuros.<br>Fabricado en India: Este producto se fabrica en Delhi en una fábrica con salarios justos. La fábrica se especializa en producción a pequeña escala, donde podemos reducir la generación de residuos y gestionar los residuos de la fábrica reciclando los restos para convertirlos en tela de patchwork.<br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.`,
      img:'https://doodlage.in/cdn/shop/files/1_44dd8cd1-075d-4db5-bf43-e85467dfc075.jpg?v=1713000428&width=1000',
      price: 48_898.28,
      stock:30,
      category: "Pantalones"
  },
  {
      id:2,
      title:"Caftán estampado Blair",
      detail:"Caftán estampado de gran tamaño con abertura en la espalda.",
      detail_2: `El caftán viene con una combinación.<br>También puedes combinarlo con nuestro pantalón marrón jade para la temporada festiva.<br>Material: Modal reciclado, tencel y viscosa de bambú (stock de fábrica variado)<br>Color: marrón<br>Tamaño y ajuste<br>Ajuste: extragrande.<br>Altura de la modelo: 1,72 m.<br>El producto está fabricado en talla única.<br>Largo para talla mediana: 122 cm.<br>Instrucciones de cuidado: lavar a máquina a una temperatura inferior a 40 °C o lavar a mano con agua suave. Planchar a temperatura baja y tibia.<br>Fabricado en India: este producto se fabrica en Delhi en una fábrica que cobra salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de desechos y gestionar los desechos de la fábrica reciclando los restos para fabricar telas de patchwork.<br>Nota: Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se produce hasta que la materia prima está disponible.`,
      img:'https://doodlage.in/cdn/shop/files/8_9ef2dc2d-4f07-4cf6-862a-b676f55eb769.jpg?v=1724763164&width=1000',
      price: 67_526.19,
      stock:11,
      category: "Caftán"
  },
  {
      id:3,
      title:"Falda con paneles Irene",
      detail:"Falda larga con paneles y pliegues tipo cuchillo",
      detail_2: `Bolsillo:  Bolsillo en la costura interior.<br>Ajuste : Entallado en la cintura y ensanchado.<br>Tejido: Algodón reciclado slub/flex/algodón mezclado (stock muerto de fábrica variado)<br>Largo: 42"<br>Color:  Multicolor<br>Cuidado del lavado :Lavar a máquina a temperatura inferior a 40ºC.Lavado a mano suave o a temperatura ambiente. Secar colgado. Evitar secar bajo la luz solar directa ya que los colores pueden desteñirse. <br>Fabricado en India: este producto se fabrica en Delhi en una fábrica que cobra salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de desechos y gestionar los desechos de la fábrica reciclando los restos para fabricar telas de patchwork. <br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.<br>PLAZO DE ENTREGA: Esta pieza solo está disponible para pre-pedido por el momento. La entrega puede demorar hasta 45 días.`,
      img:"https://doodlage.in/cdn/shop/files/55.jpg?v=1695381783&width=800",
      price:52_391.01,
      stock:48,
      category: "Falda"
  },
  {
      id:4,
      title:"Vestido con paneles Celia",
      detail:"Vestido plisado ajustado a la cintura con bolsillos laterales.",
      detail_2: `Abertura:  Cierre de cremallera lateral<br>Bolsillo:  Bolsillo en la entrepierna<br>Ajuste:  Regular<br>Tejido : Algodón reciclado slub/flex/algodón mezclado (stock variado de retales de fábrica)<br>Largo: 43"<br>Color : Multicolor<br>Cuidado del lavado : Lavar a máquina a temperatura inferior a 40ºC.Lavado a mano suave o a temperatura ambiente. Secar colgado. Evitar secar bajo la luz solar directa ya que los colores pueden desteñirse. <br>Fabricado en India: este producto se fabrica en Delhi en una fábrica que cobra salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de desechos y gestionar los desechos de la fábrica reciclando los restos para fabricar telas de patchwork. <br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.<br>PLAZO DE ENTREGA: Esta pieza solo está disponible para pre-pedido por el momento. La entrega puede demorar hasta 30 días.` ,
      img:"https://doodlage.in/cdn/shop/files/IMG_8432.png?v=1695706042&width=800",
      price:58_212.23,
      stock:19,
      category:"Vestido"
  },
  {
      id:5,
      title:"Vestido coral Arlene",
      detail:"Vestido batik oversize con paneles sobre residuos de tela reciclada.",
      detail_2: `Material: Fabricado a partir de diversos materiales de desecho. Obtenemos una variedad de algodón/algodón flameado. <br> Color: Coral <br> Tamaño y ajuste <br>Ajuste: Extra grande<br>Altura del modelo: 5' 6"<br>Largo para mediano: 33 pulgadas<br>Instrucciones de cuidado: lavar a máquina a una temperatura inferior a 40 °C o lavar a mano con agua suave. Planchar a temperatura baja y tibia.<br>Fabricado en India: este producto se fabrica en Delhi en una fábrica que cobra salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de desechos y gestionar los desechos de la fábrica reciclando los restos para fabricar telas de patchwork.<br>Nota: Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se produce hasta que la materia prima está disponible.`,
      img:"https://doodlage.in/cdn/shop/files/6_cdeb4314-94cc-4e70-a099-70de236c2df6.jpg?v=1724761852&width=800",
      price:67_526.19,
      stock:53,
      category:"Vestido"
  },
  {  
      id:6,
      title:"Vestido con paneles Karen",
      detail:"Vestido con paneles, cuello halter para atar y espalda elástica",
      detail_2:`Ajuste: regular<br>Tejido: algodón reciclado (remanentes de fábrica)<br>Largo: 51"<br>Color: multicolor<br>Cuidado del lavado: lavar a máquina en ciclo frío<br>Hilo: poliéster obtenido de lotes mixtos de restos de fábrica<br>Fabricado en la India: este producto se fabrica en Delhi en una fábrica con salarios justos. La fábrica se especializa en producción a pequeña escala, donde podemos reducir la generación de residuos y gestionar los residuos de fábrica reciclando los restos en tela de patchwork. No se utilizan recursos en la creación, procesamiento, teñido y acabado de los materiales. ¡Solo buenas habilidades artesanales para darle uso a los residuos!<br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.`,
      img:"https://doodlage.in/cdn/shop/products/DL23-DR-002_1.png?v=1695709421&width=800",
      price:64_033.46,
      stock:6,
      category:"Vestido"
  },
  {
      id:7,
      title:"Falda blanca de Lizzy",
      detail:"Falda deconstruida con frunces y elástico en espalda con bolsillos laterales en costura interior.",
      detail_2: `Material: Fabricado a partir de diversos materiales de stock residual. Obtenemos una variedad de popelina, lino y algodón.<br>Color: Un tono de blanco.<br>Tamaño y ajuste<br>Ajuste: Regular<br>Altura del modelo: 5'6"<br>La modelo usa talla S<br>Largo para talla mediana: 32"<br>Instrucciones de cuidado: lavar a máquina a una temperatura inferior a 40 °C o lavar a mano con agua suave. Planchar a temperatura baja y tibia.<br>Fabricado en India: este producto se fabrica en Delhi en una fábrica que cobra salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de desechos y gestionar los desechos de la fábrica reciclando los restos para fabricar telas de patchwork.<br>Nota: Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se produce hasta que la materia prima está disponible.`,
      img:"https://doodlage.in/cdn/shop/files/DL24-SK-008_1_e321e9ce-cafc-45c3-9b08-fc9563a381a1.jpg?v=1724317817&width=1000",
      price:44_439.13,
      stock:25,
      category:"Falda"
  },
  {
      id:8,
      title:"Vestido estampado de agosto",
      detail:"Vestido de tirantes con fruncido en la cintura y bolsillos laterales",
      detail_2: `Ajuste: Regular<br>Tejido: Algodón reciclado (stock remanente de fábrica)<br>Largo: 50"<br>Color: Púrpura<br>Lavar a máquina a temperatura inferior a 40 °C o lavar a mano con suavidad. Colgar para secar. Evita secar bajo la luz solar directa, ya que los colores pueden desteñirse.<br>Fabricado en India: Este producto se fabrica en Delhi en una fábrica con salarios justos. La fábrica se especializa en producción a pequeña escala, donde podemos reducir la generación de residuos y gestionar los residuos de fábrica reciclando los restos para convertirlos en tela de patchwork.<br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.`,
      img:"https://doodlage.in/cdn/shop/files/printeddress1.jpg?v=1708320975&width=800",
      price:87_318.35,
      stock:88,
      category:"Vestido"
  },
  {
      id:9,
      title:"Vestido estampado Sarah",
      detail:"Vestido estampado con detalles en la parte delantera. El vestido viene con un bolsillo lateral y una abertura lateral",
      detail_2: `Ajuste: Entallado<br>Tejido: Algodón reciclado (stock remanente de fábrica)<br>Largo: 50 "<br>Color: Verde<br>Lavar a máquina a una temperatura inferior a 40 °C o lavar a mano con suavidad. Colgar para secar. Evita secar bajo la luz solar directa, ya que los colores pueden desteñirse.<br>Fabricado en la India: Este producto se fabrica en Delhi en una fábrica que paga salarios justos. La fábrica se especializa en la producción a pequeña escala, donde podemos reducir la generación de residuos y gestionar los residuos de la fábrica reciclando los restos para convertirlos en tela de patchwork.<br>Cada pieza puede venir con un bordado o parche adicional, pero el aspecto general de la pieza no cambia. Estas piezas son parte de una colección de edición limitada, el stock se fabrica hasta que la materia prima está disponible.`,
      img:"https://doodlage.in/cdn/shop/files/22julydoodla13147-Edit.jpg?v=1692430302&width=800",
      price:83_825.62,
      stock:15,
      category:"Vestido"
  },
]
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
    <a href="producto.html?prod=${producto.id}" class="btn btn-primary bg-secondary border-0">Ver más</a>
    </div>
    </div>`);

  document.querySelector("section").innerHTML = card.join("")
}

const input = document.querySelector("input")

const resetInput = () => {
  input.value = ""
  cartas(data)
}
const filterList = () =>{
  const filterData = data.filter( (item) => item.title.toLowerCase() == input.value.toLowerCase());
  if (filterData.length == 1){
    cartas(filterData)
  } else{
    document.querySelector("section").innerText = "No encontrado"
  }
}

const buscar = document.querySelector("#filter")
buscar.addEventListener("click", filterList);

const resetImput = document.querySelector("#reset")
resetImput.addEventListener("click", resetInput);

filterList()
resetInput()

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
filterCategory(category)