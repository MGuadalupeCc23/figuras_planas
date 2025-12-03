const BASE_PATH = window.location.hostname.includes("github.io")
  ? "/figuras_planas"
  : "";

document.addEventListener("DOMContentLoaded", () => {
  loadSideBar();
  loadFooter();

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
}
