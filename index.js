const productos = "Productos"
const verMas = "Ver más información"
document.querySelector("h1").innerText = productos;
  
function cartas(){
    const data = [{"id":1,"title":"Cosmos","detail":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","img":"http://dummyimage.com/450x300.png/5fa2dd/ffffff","price":13,"stock":48},
    {"id":2,"title":"Sexy Baby","detail":"Phasellus in felis. Donec semper sapien a libero. Nam dui.","img":"http://dummyimage.com/450x300.png/dddddd/000000","price":43,"stock":86},
    {"id":3,"title":"Starting Over","detail":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","img":"http://dummyimage.com/450x300.png/dddddd/000000","price":8,"stock":31},
    {"id":4,"title":"One-Way Ticket to Mombasa (Menolippu Mombasaan)","detail":"In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","img":"http://dummyimage.com/450x300.png/5fa2dd/ffffff","price":36,"stock":63},
    {"id":5,"title":"Lady on a Train","detail":"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.","img":"http://dummyimage.com/450x300.png/dddddd/000000","price":42,"stock":74},
    {"id":6,"title":"Battles Without Honor & Humanity (Jingi naki tatakai)","detail":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","img":"http://dummyimage.com/450x300.png/cc0000/ffffff","price":52,"stock":44},
    {"id":7,"title":"Fall of the Republic: The Presidency of Barack H. Obama","detail":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","img":"http://dummyimage.com/450x300.png/dddddd/000000","price":84,"stock":9},
    {"id":8,"title":"Ed Wood","detail":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.","img":"http://dummyimage.com/450x300.png/5fa2dd/ffffff","price":62,"stock":87},
    {"id":9, "title":"Choke","detail":"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","img":"http://dummyimage.com/450x300.png/dddddd/000000","price":35,"stock":3}]
    
    let card = data.map((producto) => `<div class="card mb-3" style="width: 18rem;">
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

  document.querySelector("section").innerHTML = card.join().replaceAll(",", "");
}
cartas();
