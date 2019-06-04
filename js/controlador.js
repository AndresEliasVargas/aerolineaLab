'use strict';

//datos de entrada y otros datos
let nRutas = 0;
let nCantVuelos = 0;
let nDistancia = 0;
let sCiudadDestino = '';
let sCiudadSalida ='';
let nCapacidad = 0;
let nCantTotalPasajeros = 0;
let nCantCombustible = 0;
let nCantTripulacion = 0;
let sTipoTiquete = '';
let nMontoPreferencial = 0;
let nMontoMenorDeEdad = 0;
let nMontoPrimeraClase = 0;
let nMontoRegular = 0;
let sMontoRuta = '';

//Intermedios
let nTotalPasajerosVuelo = 0;
let nPreferencial = 0;
let nMenorDeEdad = 0;
let nPrimeraClase = 0;
let nRegular = 0;

// Datos de salida
let nTotalLineaPasajeros = 0;
let nRutaMasVuelos = 0;
let nIngresoTotalPreferencial = 0;
let nIngresoTotalMenor = 0;
let nIngresoTotalPrimeraClase = 0;
let nIngresoTotalRegular = 0;
let nIngresoTotalVuelo = 0;
let nIngresoTotalRuta = 0;
let nTotalKilometros = 0;
let nTiquetesPeferencial = 0;
let nTiquetesMenor = 0;
let nTiquetesPrimera = 0;
let nTiquetesRegular = 0;
let sPreferencial = '';
let sMenor = '';
let sPrimeraClase = '';
let sRegular = '';

let btnCalcular = document.querySelector('#btnBoton');
btnCalcular.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    let sMontoRuta = '';
    nRutas = Number(document.querySelector('#txtRutas').value);
    nMontoPreferencial = Number(document.querySelector('#txtPreferencial').value);
    nMontoMenorDeEdad = Number(document.querySelector('#txtMenorEdad').value);
    nMontoPrimeraClase = Number(document.querySelector('#txtPrimeraClase').value);
    nMontoRegular = Number(document.querySelector('#txtRegular').value);

    if(nRutas<=5){

        for(let i = 0; i < nRutas; i++){

            nCantVuelos = Number(prompt('Indicar el número de vuelos de la Ruta ' + ( i + 1 )));

            for(let j = 0; j < nCantVuelos; j++){


                nDistancia = Number(prompt('Indicar la distancia recorrida en Kilometros del Vuelo ' + (j + 1)));
                sCiudadDestino = prompt('Indicar la Ciudad de Destino del Vuelo ' + (j + 1));
                sCiudadSalida = prompt('Indicar la Ciudad de Salida del Vuelo ' + (j + 1));
                nCapacidad = Number(prompt('Indicar la Capacidad del Vuelo ' + (j + 1)));
                nCantTotalPasajeros = Number(prompt('Indicar la cantidad total de pasajeros del Vuelo ' + (j + 1)));
                nPreferencial = Number(prompt('Indique la cantidad de tiquetes preferenciales del Vuelo ' + (j + 1)));
                nMenorDeEdad = Number(prompt('Indique la cantidad de tiquetes menor de edad del Vuelo ' + (j + 1)));
                nPrimeraClase = Number(prompt('Indique la cantidad de tiquetes primera clase del Vuelo ' + (j + 1)));
                nRegular = Number(prompt('Indique la cantidad de tiquetes regulares del Vuelo ' + (j + 1)));
                nCantCombustible = Number(prompt('Indicar la cantidad de combustible del Vuelo ' + (j + 1)));
                nCantTripulacion = Number(prompt('Indicar la cantidad de la tripulación del Vuelo ' + (j + 1)));

                //Total de pasajeros de la linea aerea
                nTotalLineaPasajeros = determinarTotalPasajeros(nTotalLineaPasajeros, nCantTotalPasajeros);

                //Monto total por tiquetes vendidos
                nIngresoTotalPreferencial = determinarTotalPreferencial(nIngresoTotalPreferencial, nPreferencial, nMontoPreferencial);
                nIngresoTotalMenor = determinarTotalMenor(nIngresoTotalMenor, nMenorDeEdad, nMontoMenorDeEdad);
                nIngresoTotalPrimeraClase = determinarTotalPrimeraClase(nIngresoTotalPrimeraClase, nPrimeraClase, nMontoPrimeraClase);
                nIngresoTotalRegular = determinarTotalRegular(nIngresoTotalRegular, nRegular, nMontoRegular);
                nIngresoTotalVuelo = determinarMontoTotalVuelo(nIngresoTotalPreferencial, nIngresoTotalMenor, nIngresoTotalPrimeraClase, nIngresoTotalRegular, i);
                nIngresoTotalRuta = determinarTotalRuta(nIngresoTotalRuta, nIngresoTotalVuelo);


                //Total de pasajeros por Ruta por tiquete
                nTiquetesPeferencial = determinarTiquetesPreferenciales(nTiquetesPeferencial, nPreferencial);
                nTiquetesMenor = determinarTiquetesPreferenciales(nTiquetesMenor, nMenorDeEdad);
                nTiquetesPrimera = determinarTiquetesPreferenciales(nTiquetesPrimera, nPrimeraClase);
                nTiquetesRegular = determinarTiquetesPreferenciales(nTiquetesRegular, nRegular);


                //Total de Kilometros
                nTotalKilometros = determinarKilometros(nTotalKilometros, nDistancia);
            };

            //Imprime el mensaje de cada Ruta - Interacción con el usuario
            sMontoRuta += ('Ruta ' + (i + 1) + ': ' + nIngresoTotalRuta + '\n');

            //Total tiquetes por ruta - Puse las lineas || porque el <br> no funciona ni \n no se por que motivo.
            sPreferencial += ('Ruta ' + (i + 1) + ' Preferencial: ' + nTiquetesPeferencial + ' || ');
            sMenor += ('Ruta ' + (i + 1) + ' Menor de Edad: ' + nTiquetesMenor + ' || ');
            sPrimeraClase += ('Ruta ' + (i + 1) + ' Primera Clase: ' + nTiquetesPrimera + ' || ');
            sRegular += ('Ruta ' + (i + 1) + ' Regular: ' + nTiquetesRegular + ' || ');

            //Reseteos de valores
            nIngresoTotalRuta = 0;
            nTiquetesPeferencial = 0;
            nTiquetesMenor = 0;
            nTiquetesPrimera = 0;
            nTiquetesRegular = 0;

            //Ruta que más vuelos realizó.
            nRutaMasVuelos = determinarRutaMasVuelos(nRutaMasVuelos, nCantVuelos);

        };

        document.querySelector('#txtCantTotalPasajeros').value = nTotalLineaPasajeros;
        document.querySelector('#txtRutaMasVuelos').value = nRutaMasVuelos;
        document.querySelector('#txtMontoPorRuta').value = sMontoRuta;

        document.querySelector('#txtTiquetePreferencial').value = sPreferencial;
        document.querySelector('#txtTiqueteMenor').value = sMenor;
        document.querySelector('#txtTiquetePrimeraClase').value = sPrimeraClase;
        document.querySelector('#txtTiqueteRegular').value = sRegular;

        document.querySelector('#txtTotalKilometros').value = nTotalKilometros;

    } else {
        alert('Error, el numero de rutas supera el registrado en el sistema. Favor intentarlo de nuevo.');
    };

};
