/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log('Happy hacking :) ---')


const baseUrl= "https://platzi-avo.vercel.app/"

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

            // crear titulo
            const title = document.createElement('h2');
            title.textContent = item.name;
            //document.body.appendChild(title);
            // Crear precio
            const price = document.createElement('div');
            //document.body.appendChild(price);
            price.textContent = item.price;
            
            const container = document.createElement('div')
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });
        document.body.append( ...todosLosItems);
})

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
