/* SistemaEjercicios.js
Clase principal (ligera) que expone métodos para generar ejercicios
y para integrarlos en las páginas. Usa generadorAreas.js. */
import { generarEjercicioArea } from "./generadorAreas.js"; // importa la función del generador

export class SistemaEjercicios {

  constructor() {
    this.ejercicios = [];
  }

  // Genera n ejercicios mixtos (opcional)
  generarEjerciciosAreas(n = 10) {
    this.ejercicios = [];
    for (let i = 0; i < n; i++) {
      this.ejercicios.push(generarEjercicioArea());
    }
    return this.ejercicios;
  }

  // Genera 1 ejercicio específico de figura
  generarEjercicioEspecifico(figura) {
    return generarEjercicioArea(figura);
  }
  
  verificarRespuesta(respuestaUsuario, respuestaCorrecta) {
    return parseFloat(respuestaUsuario) === parseFloat(respuestaCorrecta);
  }

}
