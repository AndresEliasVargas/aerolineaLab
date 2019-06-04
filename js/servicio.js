'use strict';

//Determinar Total Pasajeros
function determinarTotalPasajeros(pnTotalLineaPasajeros, pnCantTotalPasajeros){

    pnTotalLineaPasajeros += pnCantTotalPasajeros;
    return pnTotalLineaPasajeros;

};

//Ruta con más vuelos
function determinarRutaMasVuelos(pnRutaMasVuelos, pnCantVuelos){

    if( pnCantVuelos >= pnRutaMasVuelos){

        pnRutaMasVuelos = pnCantVuelos;
        return pnRutaMasVuelos;

    } else {

        return pnRutaMasVuelos;

    }

};

//Monto total por tiquetes vendidos
function determinarTotalPreferencial(pnIngresoTotalPreferencial, pnPreferencial, pnMontoPreferencial){
    pnIngresoTotalPreferencial = pnMontoPreferencial * pnPreferencial;
    return pnIngresoTotalPreferencial;
};

function determinarTotalMenor(pnIngresoTotalMenor, pnMenorDeEdad, pnMontoMenorDeEdad){
    pnIngresoTotalMenor = pnMontoMenorDeEdad * pnMenorDeEdad;
    return pnIngresoTotalMenor;
};

function determinarTotalPrimeraClase(pnIngresoTotalPrimeraClase, pnPrimeraClase, pnMontoPrimeraClase){
    pnIngresoTotalPrimeraClase = pnMontoPrimeraClase * pnPrimeraClase;
    return pnIngresoTotalPrimeraClase;
};

function determinarTotalRegular(pnIngresoTotalRegular, pnRegular, pnMontoRegular){
    pnIngresoTotalRegular = pnMontoRegular * pnRegular;
    return pnIngresoTotalRegular;
};

function determinarMontoTotalVuelo(pnIngresoTotalPreferencial, pnIngresoTotalMenor, pnIngresoTotalPrimeraClase, pnIngresoTotalRegular){
    let nTotal = 0;
    nTotal = pnIngresoTotalPreferencial + pnIngresoTotalMenor + pnIngresoTotalPrimeraClase + pnIngresoTotalRegular;
    return nTotal;
};

function determinarTotalRuta(pnIngresoTotalRuta, pnIngresoTotalVuelo){
    pnIngresoTotalRuta += pnIngresoTotalVuelo;
    return pnIngresoTotalRuta;
};

//Determinar total de tiquetes por ruta
function determinarTiquetesPreferenciales(pnTiquetesPeferencial, pnPreferencial){
    pnTiquetesPeferencial += pnPreferencial;
    return pnTiquetesPeferencial;
};

function determinarTiquetesPreferenciales(pnTiquetesMenor, pnMenorDeEdad){
    pnTiquetesMenor += pnMenorDeEdad;
    return pnTiquetesMenor;
};

function determinarTiquetesPreferenciales(pnTiquetesPrimera, pnPrimeraClase){
    pnTiquetesPrimera += pnPrimeraClase;
    return pnTiquetesPrimera;
};

function determinarTiquetesPreferenciales(pnTiquetesRegular, pnRegular){
    pnTiquetesRegular += pnRegular;
    return pnTiquetesRegular;
};


//Determinar Kilometros
function determinarKilometros(pnTotalKilometros, pnDistancia){

    pnTotalKilometros += pnDistancia;
    return pnTotalKilometros;

};