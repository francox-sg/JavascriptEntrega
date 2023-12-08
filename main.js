/*
Calculadora de inversiones: Compara los rendimientos entre un Plazo Fijo (PF) vs Inversiones en Billetera Virtual (BV)

La diferencia basica radica en que:
--> el plazo fijo es justamente un % fijo pre pactado por un tiempo determinado
--> Las inversiones poseen aganancia diaria y el % de ganancia es acumulativo dia a dia

*/

/* Funciones */
const calculoCapitalFinalBV = (capitalInicial,tasaRetornoAnual, dias) => { 
    let capitalAcumulado = capitalInicial;
    let tasaRetornoDiaria = tasaRetornoAnual/365;
    for(i=0; i<dias; i++){
        capitalAcumulado += capitalAcumulado*(tasaRetornoDiaria/100);
    }
    return capitalAcumulado.toFixed(3);
}

const calculoCapitalFinalPF = (capitalInicial,tasaRetornoAnual, dias) => {
    let capitalAcumulado = capitalInicial;
    capitalAcumulado =  capitalAcumulado + capitalAcumulado* (tasaRetornoAnual/(365*100))*dias;
    return capitalAcumulado.toFixed(3);
}

/* Variables de Programa*/
let nuevaComparacion =1;
let capitalFinalBV =0;
let capitalFinalPF =0;


/* Inicio de Programa */
alert("¡Bienvenido! Comparemos los rendimientos obtenidos en Plazo Fijo e inverion en Billetera Virtual ");


while(nuevaComparacion){
    /* Datos */
    let capital=Number(prompt("Indique el capital a invertir"));
    let dias =Number(prompt("Indique el tiempo de inversion en dias"));
    let tasaInteresPF = Number(prompt("Indique la Tasa de Interes Anual del Plazo Fijo [%]"));
    let tasaRetornoBV = Number(prompt("Indique la Tasa de retorno Anual Historica de la Billetera Virtual [%]"));

    capitalFinalBV = calculoCapitalFinalBV(capital, tasaRetornoBV, dias);
    capitalFinalPF = calculoCapitalFinalPF(capital, tasaInteresPF, dias);

    let mejorOpcion, diferenciaMejorOpcion;

    if(capitalFinalBV>capitalFinalPF){
        mejorOpcion = "Billetera Virtual"
        diferenciaMejorOpcion = capitalFinalBV - capitalFinalPF;
    }else if(capitalFinalPF>capitalFinalBV){
        mejorOpcion = "Plazo Fijo"
        diferenciaMejorOpcion = (capitalFinalPF - capitalFinalBV);
    }else{
        mejorOpcion = "Ambas opciones poseen la misma ganancia"
        diferenciaMejorOpcion = 0;
    }

    alert(`El resultado de invertir $ ${capital} a ${dias} dias es: 

            Plazo Fijo a tasa de ${tasaInteresPF} % anual 
            Monto Final = $${capitalFinalPF}
            Ganancia= $${(capitalFinalPF - capital).toFixed(3)}

            Billetera Virtual a tasa de ${tasaRetornoBV} % anual 
            Monto Final = $${capitalFinalBV}
            Ganancia= $${(capitalFinalBV - capital).toFixed(3)}
            
            La mejor Opcion es: ${mejorOpcion}
            La diferencia es de $${diferenciaMejorOpcion.toFixed(3)}

            `);


    if(prompt("Escriba \"SI\" si desea realizar una nueva comparacion").toLowerCase() != "si"){
        nuevaComparacion=0;
    }
}