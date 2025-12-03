const cacheAlmacen = "v2";

const files = [
  "./",
  "./index.html",
  "./assets/css/style.css",
  "./assets/css/areas.css",

  "./assets/img/circulo.png",
  "./assets/img/figurasPlanas.png",
  "./assets/img/poligonsRegulares.png",
  "./assets/img/rectangulo.jpg",
  "./assets/img/rombo.jpg",
  "./assets/img/romboide.jpg",
  "./assets/img/triangulo.jpg",
  "./assets/img/cuadrado.png",

  "./manifest.json",

  "./assets/js/generadorAreas.js",
  "./assets/js/main.js",
  "./assets/js/SistemaEjercicios.js",

  "./assets/js/controllers/areaCirculoController.js",
  "./assets/js/controllers/areaCuadradoController.js",
  "./assets/js/controllers/areaFiguraPlanaController.js",
  "./assets/js/controllers/areaPoligonosController.js",
  "./assets/js/controllers/areaRectanguloController.js",
  "./assets/js/controllers/areaRomboController.js",
  "./assets/js/controllers/areaRomboideController.js",
  "./assets/js/controllers/areaTrianguloController.js",

  "./sources/aRectanguloCuadrado.html",
  "./sources/aRombo.html",
  "./sources/aRomboide.html",
  "./sources/aTriangulo.html",
  "./sources/aPoligonosRegulares.html",
  "./sources/aCirculo.html",
  "./sources/aFiguraPlana.html",
  "./sources/aCuadrado.html",
  "./sources/aRectangulo.html",

  "./partials/footer.html",
  "./partials/sideBar.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheAlmacen).then((cache) => {
      return cache.addAll(files);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      Promise.all(
        keys.filter((k) => k !== cacheAlmacen).map((k) => caches.delete)
      );
    })
  );
});
