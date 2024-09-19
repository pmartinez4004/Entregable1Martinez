// Define los descuentos en funcion de la cantidad de pasajeros
const pasajeros = [0, 10, 15, 20]

//Define los descuentos en funcion de la cantidad de excursiones
const excursiones = [0, 12, 16, 22]

// Selecciona descuento en funcion de la cantidad ingresada
const descuentoPasajeros = function (nroPasajeros) {
    let descuentoP = pasajeros[nroPasajeros - 1]
    return descuentoP
}

// Selecciona descuento en funcion de la cantidad ingresada
const descuentoExcursiones = function (nroExcursiones) {
    let descuentoE = excursiones[nroExcursiones - 1]
    return descuentoE
}

// Muestra los resultados de las selecciones realizadas
const mostrarResultados = function (cantPasaj, cantExcur, descPasaj, descExcur, descTotal) {
    alert("El descuento por " + cantPasaj + " pasajeros es: " + descPasaj + "%\nEl descuento por " + cantExcur + " excursiones es: " + descExcur + "%\nEl descuento total es: " + descCantPersonas + "% + " + desCantExcursiones + "%  = " + descTotal + "%")
}

const titulo = "CALCULO DE DESCUENTOS"

console.log(titulo)
let continuar = true
while (continuar) { // Lazo principal
    
    let cantPasajeros = parseInt(prompt("Cálculo de Descuentos para Excursiones \n\nIngrese la cantidad de pasajeros:"))

    let cantExcursiones = parseInt(prompt("Ingrese la cantidad de excursiones:"))

    //Coloca el limite superior de descuentos para valores mayores a 4
    if (cantPasajeros > 4) {
        cantPasajeros = 4
    }
    if (cantExcursiones > 4) {
        cantExcursiones = 4
    }

    //Calcular descuentos
    descCantPersonas = (descuentoPasajeros(cantPasajeros))
    desCantExcursiones = (descuentoExcursiones(cantExcursiones))
    let descTotal = descCantPersonas + desCantExcursiones

    mostrarResultados(cantPasajeros, cantExcursiones, descCantPersonas, desCantExcursiones, descTotal)

    let confirmacion = prompt("Desea hacer otra consulta si/no? ").toLowerCase()
    if (confirmacion == "no") {
        continuar = false
    }

}












/*

let comision = 74480
let academia = "CoderHouse"
let flex = true

console.log("Hola Mundo")
console.log(academia)

let comision1=parseInt(prompt("Indique su numero de comision:"))

console.log("Esta es la comision "+comision1+ " de la Academia "+academia)
//alert("Esta es la comision "+comision+ " de la Academia "+academia)

let numA=30
let numB=40

let suma=numA+numB
//alert("la suma es: "+numA+comision1)

if (comision1==5){
    console.log("Es 5")
}
else if (comision1==7){
    console.log("es 7")
}
else if (comision1==8){
    console.log("Es 8")
}
else{
    console.log("no es ni 5 ni 7 ni 8")

}

for(let i=1;i<=10;i++){
    console.log(comision1+" x "+i+" = "+i*comision1)
}*/