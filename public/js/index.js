 //Add Click functionality for pics
 let imagesContainer = document.querySelector(".imagesContainer");
 imagesContainer.addEventListener("click", adjustClass);


 //Click functionality for pics
 function adjustClass(e) {
   e.preventDefault();

   if( (e.target.classList.contains("round-thumbs")) && (!e.target.classList.contains("round-thumbs-clicked")) ) {
     Array.from(document.querySelectorAll(".round-thumbs")).forEach(element => {
       element.classList.remove("round-thumbs-clicked");
     });
     e.target.classList.add("round-thumbs-clicked");

   } else {
     e.target.classList.remove("round-thumbs-clicked");
   }
   console.log("Clicked", e.target, e.currentTarget); //DEBUG
   
 }


 //Routing
 class Routes {
   constructor(name,routesObjArr) {
     this.name = name,
     this.routes = routesObjArr
   }
 }

 let myRoutes = new Routes("a",[
   { 
     name: "index",
     path: "/index.html",
     data: {}
   },
   {
     name: "peter",
     path: "/peter.html",
     data: {name: "Peter"}
   },
   {
     name: "ray",
     path: "/ray.html",
     data: {name: "Ray"}
   },
   {
     name: "egon",
     path: "/egon.html",
     data: {name: "Egon"}
   },
   {
     name: "winston",
     path: "/winston.html",
     data: {name: "Winston"}
   }
 ]);

//Fetch Data
async function getData(url) {
  //Data at: 'data/data.json'

  try {
    await fetch(url)
    .then( (res) => {
      return res.json();
    })
    .then( (data) => {
      console.log(data);
    })
    .catch( (err) => {
      console.log("Something went wrong", err);
    });
    
  } catch (error) {
    console.log("Catch from getData: Error: ", error);    
  }
  
}
