const BASE_PATH = window.location.hostname.includes("github.io")
    ? "/figuras_planas"
    : "";

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();

  // Lógica del Service Worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${BASE_PATH}/sw.js`)
      .then((registration) => {
        console.log("ServiceWorker registrado con scope:", registration.scope);
      })
      .catch((err) => {
        console.error("Fallo al registrar ServiceWorker:", err);
      });
  }

  console.log("Módulo cargado correctamente");
});

// 🔹 Cargar Sidebar
export async function loadHeader() {
  const header = document.getElementById("sideBar");
  const response = await fetch(`${BASE_PATH}/partials/sideBar.html`);
  header.innerHTML = await response.text();
}

// 🔹 Cargar Footer
export async function loadFooter() {
  const footer = document.getElementById("footer");
  const response = await fetch(`${BASE_PATH}/partials/footer.html`);
  footer.innerHTML = await response.text();
}

/*document.addEventListener("DOMContentLoaded", () => {
  // tu lógica nueva
  loadSideBar();
  loadFooter();
  //Lógica del service worker
  const BASE_PATH = window.location.hostname.includes("github.io")
    ? //? "/PWA" // nombre exacto del repositorio
      "/PWA" // nombre exacto del repositorio
    : ""; // en local (XAMPP)

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${BASE_PATH}/sw.js`)
      .then((registration) => {
        console.log("ServiceWorker registrado con scope:", registration.scope);
      })
      .catch((err) => {
        console.error("Fallo al registrar ServiceWorker:", err);
      });
  }
  console.log("Módulo cargado correctamente");
});

export async function loadSideBar() {
  const header = document.getElementById("sideBar");
  const response = await fetch(`${BASE_PATH}/partials/sideBar.html`);
  header.innerHTML = await response.text();
}

export async function loadFooter() {
  const footer = document.getElementById("footer");
  const response = await fetch(`${BASE_PATH}/partials/footer.html`);
  footer.innerHTML = await response.text();
}*/
