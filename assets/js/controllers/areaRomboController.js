// ===============================
// Controller: Área del Rombo
// ===============================

import { SistemaEjercicios } from "../SistemaEjercicios.js";

export class AreaRomboController {
  constructor() {
    this.sistema = new SistemaEjercicios();
  }

  mostrarEjercicio() {
    const ej = this.sistema.generarEjercicioEspecifico("rombo");
    if (!ej) return console.error("Error: ejercicio no generado");

    const cont = document.getElementById("ejercicio-container");
    cont.innerHTML = `
      <div class="ejercicio-card">
        <h3>Ejercicio: Área del Rombo</h3>
        <p class="instruccion"><strong>${ej.instruccion}</strong></p>

        <ul class="datos-ejercicio">
          <li>D mayor = <b>${ej.datos.dMayor}</b></li>
          <li>d menor = <b>${ej.datos.dMenor}</b></li>
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
        msg.textContent = `Incorrecto. La respuesta correcta es: ${ej.resultadoCorrecto}`;
        msg.style.color = "red";
      }
    };
  }
}
