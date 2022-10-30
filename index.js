'use strict';

/*
 * OTONDO, MARIANA
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];


// Función Cargar:
const Cargar = () => {
    // Cositas:
    let discoNuevo = {};

    do {
        discoNuevo.nombre = prompt("Ingrese el nombre del disco");
    } while (validacionesString(discoNuevo.nombre));
    
    do {
        discoNuevo.banda = prompt("Ingrese el nombre de la banda");
    } while (validacionesString(discoNuevo.banda));
    
    do {
        discoNuevo.codigoNumerico = parseInt(prompt("Ingrese el código numérico del disco"));
    } while (validacionCodigo(discoNuevo.codigoNumerico));
    
    discoNuevo.pistas = [];

    do {
        let pistasDisco = {};

        do {
            pistasDisco.nombreCancion = prompt("Ingrese el nombre de la canción");
        } while (validacionesString(pistasDisco.nombreCancion));
        
        do {
            pistasDisco.duracion = parseInt(prompt("Ingrese la duración de la canción en segundos"));
        } while (validacionDuracion(pistasDisco.duracion));
        
        discoNuevo.pistas.push(pistasDisco);
    } while (confirm("¿Quiere cargar más canciones?"));

    discos.push(discoNuevo);
    
};


// Función Mostrar:

const Mostrar = () => {
    console.log(discos);
    let contenedor = document.getElementById("info")

    for(let disco of discos) {
        let html = '<div id="info">';
        html += `\n   <div class="disco"><h2 class="nombre-disco"> ${disco.nombre} </h2>`;
        html += `\n   <h3 class="nombre-banda"> ${disco.banda}</h3>`;
        html += `\n   <p class="codigo">Código numérico del disco: ${disco.codigoNumerico}</p>`;

        let pistas = disco.pistas;
        html += `\n   <h4>Canciones:</h4>`;
        for(let pistaDisco of pistas){
            
            html += `\n   <p class="cancion-nombre"> - ${pistaDisco.nombreCancion}</p>`;
            
            if (pistaDisco.duracion > 180) {
                html += `\n    <span class="rojo duracion">(Duración: ${pistaDisco.duracion} segundos)</span>`;
            } else {html += `\n    <span class="duracion">(Duración: ${pistaDisco.duracion} segundos)</span></div>`;}
        }

        html += '\n</div>';
        contenedor.innerHTML += html;
    }
}

// Todas las funciones que necesites:
function validacionesString(cadena) {
    if (cadena != null){
        cadena = cadena.trim();
    }

    cadena = cadena.trim();
    if (cadena == "" || cadena == null || cadena == undefined){
        alert("Algo salió mal");
        return true;
    }
    return false;
}

function validacionCodigo(numero){
    let flag = false;
    if(discos.length > 0){
        
        for (let disco of discos) {
            
            if(disco.codigoNumerico == numero){
                alert("Código numérico ya existe");
                flag = true;
            }
        }
    }
    
    if(numero <= 0 || numero > 999 || isNaN(numero) || numero =="") {
        alert("Código numérico inválido");
        flag = true;
    }

    return flag;
}

function validacionDuracion(tiempo){
    let flag = false;
    if(tiempo < 0 || tiempo > 7200 || isNaN(tiempo)) {
        alert("Duración de canción inválida");
        flag = true;
    }
    return flag;
}

