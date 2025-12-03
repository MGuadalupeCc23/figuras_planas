// ===============================
// Controller: Figura Plana (Aleatoria)
// ===============================

import { SistemaEjercicios } from "../SistemaEjercicios.js";

export class AreaFiguraPlanaController {
  constructor() {
    this.sistema = new SistemaEjercicios();
  }

  mostrarEjercicio() {
    // Genera un ejercicio aleatorio de figura plana (cuadrado, rectángulo, triángulo)
    const figurasPlanas = [
      "circulo",
      "rectangulo",
      "cuadrado",
      "triangulo",
      "rombo",
      "romboide",
    ];
    const figuraAleatoria =
      figurasPlanas[Math.floor(Math.random() * figurasPlanas.length)];

    const ej = this.sistema.generarEjercicioEspecifico(figuraAleatoria);
    if (!ej) return console.error("Error: ejercicio no generado");

    const cont = document.getElementById("ejercicio-container");
    cont.innerHTML = `
      <div class="ejercicio-card">
        <h3>Ejercicio de Área de Figura Plana</h3>
        <p class="instruccion"><strong>${ej.instruccion}</strong></p>

        <ul class="datos-ejercicio">
          ${Object.entries(ej.datos)
            .map(
              ([key, value]) =>
                `<li>${
                  key.charAt(0).toUpperCase() + key.slice(1)
                } = <b>${value}</b></li>`
            )
            .join("")}
        </ul>

        <div class="ejercicio-input">
          <label for="respuestaUsuario">Tu respuesta:</label>
          <input id="respuestaUsuario" type="number" step="any" placeholder="Escribe tu respuesta">
          <button id="btnVerificar">Verificar</button>
        </div>

        <p id="mensajeResultado" class="mensaje-resultado"></p>
      </div>
    `;

    document.getElementById("btnVerificar").onclick = () => {
      const resp = parseFloat(
        document.getElementById("respuestaUsuario").value
      );
      const msg = document.getElementById("mensajeResultado");

      if (this.sistema.verificarRespuesta(resp, ej.resultadoCorrecto)) {
        msg.textContent = "¡Correcto!";
        msg.style.color = "green";
      } else {
        msg.textContent = `Incorrecto. La respuesta correcta era: ${ej.resultadoCorrecto}`;
        msg.style.color = "red";
      }
    };
  }
}
