/*PROFESORES-B
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne el porcentaje de profesores de un sexo y una categoría dada.
- Función: porcProfesSexoEnCategoria.
- Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una letra).
- Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
- Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior. 
*/


let profesores = [
    { categoría: 6, nombre: 'Lola', sexo: 'F' },
    { categoría: 2, nombre: 'Patricia', sexo: 'F' },
    { categoría: 2, nombre: 'Eva', sexo: 'F' },
    { categoría: 2, nombre: 'Ricardo', sexo: 'M' },
    { categoría: 7, nombre: 'Lalo', sexo: 'M' },
    { categoría: 5, nombre: 'Leopoldo', sexo: 'M' },
    { categoría: 1, nombre: 'Juan', sexo: 'M' },
];

let profesoresCategoria = (profesores, cat) => {
    let profesfilt = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoría === cat) {profesfilt.push(profesores[i]);}
    }
    return profesfilt;
};


let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let profesoresDeCategoria = profesoresCategoria(profesores, categoria);
    let countSexo = profesoresDeCategoria.filter(profesor => profesor.sexo === sexo).length;
    let porcentaje = (countSexo / profesoresDeCategoria.length) * 100;
    return porcentaje.toFixed(2);
};



let salida = document.getElementById("salida");
let porcentaje = porcProfesSexoEnCategoria(profesores, 2, 'F');

salida.innerHTML = `Porcentaje de profesores sexo femenino en categoría 2: ${porcentaje}%`;