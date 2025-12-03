// ========================================
// Controller: Área de Polígonos Regulares
// ========================================

import { SistemaEjercicios } from "../SistemaEjercicios.js";

export class AreaPoligonosController {
  constructor() {
    this.sistema = new SistemaEjercicios();
  }

  mostrarEjercicio() {
    const ej = this.sistema.generarEjercicioEspecifico("poligono_regular");
    if (!ej) return console.error("Error: ejercicio no generado");

    const cont = document.getElementById("ejercicio-container");
    cont.innerHTML = `
      <div class="ejercicio-card">
        <h3>Área de Polígonos Regulares</h3>
        <p class="instruccion"><strong>${ej.instruccion}</strong></p>

        <ul class="datos-ejercicio">
          <li>n = <b>${ej.datos.n}</b></li>
          <li>Lado = <b>${ej.datos.lado}</b></li>
          <li>Apotema ≈ <b>${ej.datos.apotema}</b></li>
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
