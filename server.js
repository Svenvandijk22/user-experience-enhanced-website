// console.log('Hier komt je server voor Sprint 10.')

// console.log('Gebruik uit Sprint 9 alleen de code die je mee wilt nemen.')
// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from "express";

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from "liquidjs";

// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express();

// Maak werken met data uit formulieren iets prettiger
app.use(express.urlencoded({ extended: true }));

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static("public"));

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine("liquid", engine.express());

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set("views", "./views");




app.get("/", async function (request, response) {
  const params = {
    fields: "name,image,id,amount",
  };

  if (request.query.sort === "hoog") {
    params.sort = "-amount";    // hoog → laag
  } else if (request.query.sort === "laag") {
    params.sort = "amount";     // laag → hoog
  }

  console.log(params)

  const productResponse = await fetch(
    "https://fdnd-agency.directus.app/items/milledoni_products/?" +
      new URLSearchParams(params),
  );

  const { data } = await productResponse.json();
  response.render("index.liquid", { products: data });
});

/*
// Zie https://expressjs.com/en/5x/api.html#app.get.method over app.get()
app.get(…, async function (request, response) {
  
  // Zie https://expressjs.com/en/5x/api.html#res.render over response.render()
  response.render(…)
})
*/

/*
// Zie https://expressjs.com/en/5x/api.html#app.post.method over app.post()
app.post(…, async function (request, response) {

  // In request.body zitten alle formuliervelden die een `name` attribuut hebben in je HTML
  console.log(request.body)

  // Via een fetch() naar Directus vullen we nieuwe gegevens in

  // Zie https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch over fetch()
  // Zie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify over JSON.stringify()
  // Zie https://docs.directus.io/reference/items.html#create-an-item over het toevoegen van gegevens in Directus
  // Zie https://docs.directus.io/reference/items.html#update-an-item over het veranderen van gegevens in Directus
  const fetchResponse = await fetch(…, {
    method: …,
    body: JSON.stringify(…),
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })

  // Als de POST niet gelukt is, kun je de response loggen. Sowieso een goede debugging strategie.
  // console.log(fetchResponse)

  // Eventueel kun je de JSON van die response nog debuggen
  // const fetchResponseJSON = await fetchResponse.json()
  // console.log(fetchResponseJSON)

  // Redirect de gebruiker daarna naar een logische volgende stap
  // Zie https://expressjs.com/en/5x/api.html#res.redirect over response.redirect()
  response.redirect(303, …)
})
*/
app.get("/likedproducts", async function (req, res) {
  const params = {
    fields:
      "liked_products.milledoni_products_id.slug," +
      "liked_products.milledoni_products_id.image," +
      "liked_products.milledoni_products_id.name," +
      "liked_products.milledoni_products_id.amount," +
      "liked_products.milledoni_products_id.id",
  };

  const productResponse = await fetch(
    "https://fdnd-agency.directus.app/items/milledoni_users/63/?" +
      new URLSearchParams(params),
  );

  const productResponseJSON = await productResponse.json();

  res.render("likedproducts.liquid", {
    likedProducts: productResponseJSON.data.liked_products,
  });
});



app.get("/likedproducts", async function (req, res) {
  const params = {
    fields:
      "liked_products.milledoni_products_id.slug," +
      "liked_products.milledoni_products_id.image," +
      "liked_products.milledoni_products_id.name," +
      "liked_products.milledoni_products_id.amount," +
      "liked_products.milledoni_products_id.id",
  };

  const productResponse = await fetch(
    "https://fdnd-agency.directus.app/items/milledoni_users/63/?" +
      new URLSearchParams(params),
  );

  const productResponseJSON = await productResponse.json();

  res.render("likedproducts.liquid", {
    likedProducts: productResponseJSON.data.liked_products,
  });
});


app.use(express.urlencoded({ extended: true }));

app.post("/opslaan", async function (request, response) {
  

  await fetch(
    "https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1",
    {
      method: "POST",
      body: JSON.stringify({
        milledoni_users_id: 63,
        milledoni_products_id: request.body.id,
      }),
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  );

  response.redirect(303, "/likedproducts");
});

app.post("/verwijder", async function (request, response) {
  const linkIDresponse = await fetch(`https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1?filter[milledoni_users_id][_eq]=63&filter[milledoni_products_id][_eq]=${request.body.id}&fields=id&limit=1`)
  const linkIDjson = await linkIDresponse.json();
  const linkID = linkIDjson.data[0].id;

  // kan dit simpeler???? 

  const deleteResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_users_milledoni_products_1/' + linkID,
    {
      method: "DELETE", 
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      }
    },
  );



  response.redirect(303, "/likedproducts");
});

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000; als deze applicatie ergens gehost wordt, waarschijnlijk poort 80
app.set("port", process.env.PORT || 8000);

// Start Express op, gebruik daarbij het zojuist ingestelde poortnummer op
app.listen(app.get("port"), function () {
  // Toon een bericht in de console
  console.log(
    `Daarna kun je via http://localhost:${app.get("port")}/ jouw interactieve website bekijken.\n\nThe Web is for Everyone. Maak mooie dingen 🙂`,
  );
});


console.log('Zet \'m op!')
