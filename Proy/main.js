const list = ['Ana', 88, 'Carlos', 76, 'Karina', 63];

let sumaCalificaciones = 0;
let aprobados = [];
let reprobados = [];
let listaTransformada = [];


for (let i = 0; i < list.length; i += 2) {
    let nombre = list[i];
    let nota = list[i + 1];
    
    
    sumaCalificaciones += nota;

    
    if (nota >= 70) {
        aprobados.push(nombre);
    } else {
        reprobados.push(nombre);
    }

    
    let letra = "";
    if (nota >= 95) { letra = "A"; }
    else if (nota >= 90) { letra = "B"; }
    else if (nota >= 80) { letra = "C"; }
    else if (nota >= 70) { letra = "D"; }
    else { letra = "F"; }


    listaTransformada.push(nombre, letra);
    console.log(`-> La calificación de ${nombre} es ${letra}`);
}


let promedio = (sumaCalificaciones / (list.length / 2)).toFixed(2);


console.log("--- RESULTADOS ---");
console.log(`-> El promedio de calificaciones es: ${promedio}`);
console.log(`-> Los estudiantes que aprobaron son: ${aprobados.join(", ")}`);
console.log(`-> Los estudiantes que no aprobaron son: ${reprobados.join(", ")}`);
console.log("-> La lista transformada es:", listaTransformada);