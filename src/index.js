/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const URL_API = "https://platzi-avo.vercel.app/";
const URL_API_AVO = `${URL_API}api/avo`;

const $aguacatesContainer = document.getElementById("app");

//utils
function formatPrice(price) {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

async function getData() {
  const response = await fetch(URL_API_AVO);
  const data = await response.json();
  return [ ...data.data];
}

function createCard({ name, image, price, attributes }) {
  //Creamos imagen
  const $image = document.createElement("img");
  $image.src = `${URL_API}${image}`;
  $image.className = "rounded-full mx-auto card__avatar";

  const $banner = document.createElement("div");
  $banner.className = "card__banner";

  //Creamos titulo
  const $title = document.createElement("h2");
  $title.innerText = name;
  $title.className = "card__name";

  const $description = document.createElement("span");
  $description.innerText = attributes.taste;
  $description.className = "card__description";

  const $price = document.createElement("span");
  $price.innerText = formatPrice(price);
  $price.className = "card__level";

  const $body = document.createElement("div");
  $body.className = "card__body";
  $body.append($title, $description, $price);

  //Creamos contenedor de la card
  const $container = document.createElement("article");
  $container.className = "card";
  $container.append($image, $banner, $body);

  return $container;
}

function renderElements(list) {
  const $listElements = [];
  list.forEach((item) => {
    $listElements.push(createCard(item));
  });

  $aguacatesContainer.append(...$listElements);
}

async function init() {
  const data = await getData();
  console.log(data);
  renderElements(data);
}

init();
/*
console.log('Happy hacking :) ---')


const baseUrl= "https://platzi-avo.vercel.app/"

const appNode = document.querySelector('#app');

// Intl (Formato de internacionalizacion)
// 1- dar format a fechas 
// 2- dar formato a monedas

const formatPrice = price => {

    const newPrice = new window.Intl.NumberFormat("es-Co", {
        style: "currency",
        currency: "Cop"
    }).format(price)

    return newPrice;
 }

//web api
//conectarnos al server
window
    .fetch(`${baseUrl}api/avo`)
    // Procesar la respuesta y convertirla a json
    .then(respuesta => respuesta.json())

    // Json -> Data -> renderizar en el browser
    .then( responseJson =>  {
        const todosLosItems = []

        responseJson.data.forEach((item) => {
            //console.log(item.name);
            // Crear imagen
            const imagen = document.createElement('img');
            //document.body.appendChild(imagen);
            imagen.src = `${baseUrl}${item.image}`;
            imagen.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

            // crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            title.className="text-lg text-green-500"
            //title.style.fontSize= '2rem'
            
            //document.body.appendChild(title);
            // Crear precio
            const price = document.createElement('div');
            //document.body.appendChild(price);
            price.className = "text-gray-600";
            price.textContent = formatPrice(item.price);

            const priceAndTitle = document.createElement("div")
            priceAndTitle.className = "text-center md:text-left";
            priceAndTitle.appendChild(title);
            priceAndTitle.appendChild(price);

            const card = document.createElement("div");
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300";
            card.append(imagen, priceAndTitle);
            
            const container = document.createElement('div')
            container.appendChild(card);

            todosLosItems.push(container);
        });
        //document.body.append( ...todosLosItems);
        appNode.append( ...todosLosItems);
})
*/
/* Realizar la consulta con async await
//web api
async function fetchData() {
    const response = await fetch(url),
    data = await response.json(),
    allItems = [];
  
    data.data.forEach((item) => {
      // create image
      const image = document.createElement("img");
      // create title
      const title = document.createElement("h2");
      // create price
      const price = document.createElement("div");
  
      const container = document.createElement("div");
      container.append(image, title, price);
  
      allItems.push(container);
    });
  
    document.body.append(...allItems)
  }
  
  fetchData();

*/
