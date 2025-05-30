const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

const sectionCenter = document.querySelector('.section-center'); //Seleccionando el contenedor de los items individuales
const filterButtons = document.querySelectorAll('.filter-btn'); //Retorna una nodeList con todos los botones

/* Load Items */
window.addEventListener("DOMContentLoaded", () =>{ // Agregamos un listener a la ventana, el evento que lo activa es cuando carga la pag
    displayMenuItems(menu);
});


/* Filter Items */

filterButtons.forEach((button)=>{ //Recorremos toda la nodeList
  button.addEventListener('click', (e) =>{ //Ponemos a escuchar todos los botones
    let category = e.currentTarget.dataset.id; //Obtengo el id del boton que se esta presionando
    console.log(category) //imprimo el id del boton que vendria siendo la categoria
    filterContent(category);
  });
});

function filterContent (category){//Recibe la categoria identificada por el listener del boton
  console.log(`recibi la categoria ${category}`)
  
  if (category==="all") {
    displayMenuItems(menu);
  } else {
    const menuFiltrado = menu.filter((actual)=>{ //se crea una copia de menu llamada menuFiltrado y filter recorre todos los elementos
      return actual.category === category; //Retorna solo el elemento actual que tenga la misma categoria que la recibida
    })
    displayMenuItems(menuFiltrado); //Imprime el menu filtrado
    console.log(menuFiltrado);
  }
 
}



function displayMenuItems(menuItems){
  let displayMenu = menuItems.map(function(item){ // Hacemos una copia de nuestro array de objetos con map para convertirlo en cadenas de texto (strings) que representan html
    /* Usamos template literals para incrustar el string en el html */
    return `<article class="menu-item">
            <img src=${item.img} class="photo"
            alt=${item.title}>
            <div class="item-info">
                <header> 
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                </header>
               <p class= "item-text">${item.desc}</p>
            </div>
        </article>`;
    
});

displayMenu = displayMenu.join(""); // Convierto el array de strings en un solo string largo y le indico que todo lo una sin comas ni espacios para que se respete la sintaxis de html
sectionCenter.innerHTML = displayMenu; //Con la sintaxis correcta y todo en un mismo string gigante lo inserto dentro del contenedor sectionCenter con innerHTML
}
