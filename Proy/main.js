const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];

let sumaCalificaciones = 0;
let aprobados = [];
let reprobados = [];
let listaTransformada = [];

// Recorremos la lista de 2 en 2 (i += 2)
for (let i = 0; i < list.length; i += 2) {
    let nombre = list[i];
    let nota = list[i + 1];
    
    // 1. Sumar para el promedio
    sumaCalificaciones += nota;

    // 2 y 3. Clasificar aprobados y reprobados (aprueban con 70)
    if (nota >= 70) {
        aprobados.push(nombre);
    } else {
        reprobados.push(nombre);
    }

    // 4. Convertir nota a letra
    let letra = "";
    if (nota >= 95) { letra = "A"; }
    else if (nota >= 90) { letra = "B"; }
    else if (nota >= 80) { letra = "C"; }
    else if (nota >= 70) { letra = "D"; }
    else { letra = "F"; }

    // Guardar en la nueva lista y mostrar log individual
    listaTransformada.push(nombre, letra);
    console.log(`-> La calificación de ${nombre} es ${letra}`);
}

// Cálculos finales
let promedio = (sumaCalificaciones / (list.length / 2)).toFixed(2);

// Outputs finales
console.log("--- RESULTADOS ---");
console.log(`-> El promedio de calificaciones es: ${promedio}`);
console.log(`-> Los estudiantes que aprobaron son: ${aprobados.join(", ")}`);
console.log(`-> Los estudiantes que no aprobaron son: ${reprobados.join(", ")}`);
console.log("-> La lista transformada es:", listaTransformada);