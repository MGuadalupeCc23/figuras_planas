/* generadorAreas.js
Generador de ejercicios de área por figura. Devuelve objeto con:
{ figura, datos, formula, resultadoCorrecto, instruccion }
*/
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generarEjercicioArea(figuraSolicitada = null) {
  const figuras = [
    "circulo",
    "rectangulo",
    "cuadrado",
    "triangulo",
    "rombo",
    "romboide",
    "poligono_regular",
  ];

  const figura =
    figuraSolicitada || figuras[Math.floor(Math.random() * figuras.length)];

  const ejercicio = {
    figura,
    datos: {},
    formula: "",
    resultadoCorrecto: 0,
    instruccion: "",
  };

  switch (figura) {
    case "circulo": {
      const radio = randomInt(2, 10);
      ejercicio.datos = { radio };
      ejercicio.formula = "A = π · r²";
      ejercicio.resultadoCorrecto = parseFloat(
        (Math.PI * radio * radio).toFixed(2)
      );
      ejercicio.instruccion = `Calcula el área de un círculo con radio = ${radio} unidades.`;
      break;
    }
    case "rectangulo": {
      const base = randomInt(3, 18);
      const altura = randomInt(3, 18);
      ejercicio.datos = { base, altura };
      ejercicio.formula = "A = base · altura";
      ejercicio.resultadoCorrecto = base * altura;
      ejercicio.instruccion = `Calcula el área de un rectángulo con base = ${base} y altura = ${altura}.`;
      break;
    }
    case "cuadrado": {
      const lado = randomInt(2, 14);
      ejercicio.datos = { lado };
      ejercicio.formula = "A = lado²";
      ejercicio.resultadoCorrecto = lado * lado;
      ejercicio.instruccion = `Calcula el área de un cuadrado con un lado = ${lado}.`;
      break;
    }
    case "triangulo": {
      const base = randomInt(3, 18);
      const altura = randomInt(3, 18);
      ejercicio.datos = { base, altura };
      ejercicio.formula = "A = (base · altura) / 2";
      ejercicio.resultadoCorrecto = (base * altura) / 2;
      ejercicio.instruccion = `Calcula el área de un triángulo con base = ${base} y altura = ${altura}.`;
      break;
    }
    case "poligono_regular": {
      const n = randomInt(3, 10); // número de lados (triángulo mínimo)
      const lado = randomInt(2, 10); // longitud de cada lado
      const apotema = parseFloat((randomInt(2, 10) + Math.random()).toFixed(2)); // apotema aproximada
      ejercicio.datos = { n, lado, apotema };
      ejercicio.formula = "A = (Perímetro × Apotema) / 2";
      ejercicio.resultadoCorrecto = parseFloat(
        ((n * lado * apotema) / 2).toFixed(2)
      );
      ejercicio.instruccion = `Calcula el área de un polígono regular con ${n} lados, lado = ${lado} y apotema ≈ ${apotema}.`;
      break;
    }
    case "rombo": {
      const dMayor = randomInt(4, 14);
      const dMenor = randomInt(2, dMayor - 1); // aseguramos que dMenor < dMayor
      ejercicio.datos = { dMayor, dMenor };
      ejercicio.formula = "A = (D mayor × D menor) / 2";
      ejercicio.resultadoCorrecto = parseFloat(
        ((dMayor * dMenor) / 2).toFixed(2)
      );
      ejercicio.instruccion = `Calcula el área de un rombo con diagonal mayor = ${dMayor} y diagonal menor = ${dMenor}.`;
      break;
    }

    case "romboide": {
      const base = randomInt(3, 15);
      const altura = randomInt(2, 10);
      ejercicio.datos = { base, altura };
      ejercicio.formula = "A = base × altura";
      ejercicio.resultadoCorrecto = base * altura;
      ejercicio.instruccion = `Calcula el área de un romboide con base = ${base} y altura = ${altura}.`;
      break;
    }

    default: {
      // Para otras figuras aún no definidas
      ejercicio.instruccion = `Figura ${figura} no implementada aún`;
      ejercicio.resultadoCorrecto = 0;
      ejercicio.formula = "";
    }
  }

  return ejercicio; // ✅ Devuelve siempre un objeto
}
