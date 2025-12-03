// ===============================
// Controller: Área del Círculo
// ===============================
import { SistemaEjercicios } from "../SistemaEjercicios.js";

export class AreaCirculoController {
  constructor() {
    this.sistema = new SistemaEjercicios();
  }

  mostrarEjercicio() {
    // Usar el método de SistemaEjercicios
    const ej = this.sistema.generarEjercicioEspecifico("circulo");
    if (!ej) return console.error("Error: ejercicio no generado");

    const cont = document.getElementById("ejercicio-container");
    cont.innerHTML = `
      <div class="ejercicio-card">
        <h3>Ejercicio: Área del Círculo</h3>
        <p class="instruccion"><strong>${ej.instruccion}</strong></p>

        <ul class="datos-ejercicio">
          <li>Radio = <b>${ej.datos.radio}</b></li>
        </ul>

        <div class="ejercicio-input">
          <label for="respuestaUsuario">Tu respuesta:</label>
          <input id="respuestaUsuario" type="number" step="any" placeholder="Escribe tu respuesta (2 decimales)">
          <button id="btnVerificar">Verificar</button>
        </div>

        <p id="mensajeResultado" class="mensaje-resultado"></p>
      </div>
    `;

    document.getElementById("btnVerificar").onclick = () => {
      const resp = parseFloat(document.getElementById("respuestaUsuario").value);
      const msg = document.getElementById("mensajeResultado");

      if (this.sistema.verificarRespuesta(resp, ej.resultadoCorrecto)) {
        msg.textContent = "¡Correcto! 🎉";
        msg.style.color = "green";
      } else {
        msg.textContent = `Incorrecto. La respuesta correcta es: ${ej.resultadoCorrecto}`;
        msg.style.color = "red";
      }
    };
  }
}
