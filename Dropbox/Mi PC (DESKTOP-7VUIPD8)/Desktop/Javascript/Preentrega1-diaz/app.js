const hamburguesaSimple = 1100
const hamburguesaCompleta = 1500
const hamburguesaDobleCheese = 2250
const hamburguesaTripleCheese = 2500

let pedido = 0
let valorOrden = 0
let descripcionPedido = ""
let eleccion = ""

solicitarPedido();

function solicitarPedido(){

    eleccion = prompt(`Elija que hamburguesa desea comer:
    1: Simple
    2: Completa
    3: Doblecheese
    4: Triplecheese
    5: Finalizar`) 

    while (eleccion != "5"){
        switch (eleccion){
            case "1":
                valorOrden = hamburguesaSimple
                descripcionPedido += `\n Hamburguesa simple por $${hamburguesaSimple}`
                break;
            case "2":
                valorOrden = hamburguesaCompleta
                descripcionPedido += `\n Hamburguesa completa por $${hamburguesaCompleta}`
                break;
            case "3":
                valorOrden = hamburguesaDobleCheese
                descripcionPedido += `\n Hamburguesa Doble Cheese por $${hamburguesaDobleCheese}`
                break;
            case "4":
                valorOrden = hamburguesaTripleCheese
                descripcionPedido += `\n Hamburguesa Triple Cheese por $${hamburguesaTripleCheese}`
                break;
            default:
                alert(`La opcion ingresada no es correcta`)
                solicitarPedido();
                break;
        }
        pedido = pedido + valorOrden;
        
        agrandarCombo();

        eleccion = prompt(`Agregar al pedido:
        1: Simple
        2: Completa
        3: Doblecheese
        4: Triplecheese
        5: Finalizar`) 
        } 

        alert(`Su pedido fue finalizado, su valor final es de $${pedido} \n\n ${descripcionPedido}`)
        return 0;
    }


function agrandarCombo(){
    let respuesta = prompt(`¿Desea agrandar el combo por $200
    Ingrese SI o NO`).toLowerCase()
    if(respuesta == "si"){
        pedido += 200;
        descripcionPedido += " + $200 (agrandado)"
        alert(`Su pedido es: ${descripcionPedido} \n\n Con un total de: $${pedido}`)
    } else if(respuesta == "no") {
        alert(`Su pedido es: ${descripcionPedido} \n\n Con un total de: $${pedido}`)
    } else {
        alert(`Por favor responda solo con "SI" o con "NO"`)
        agrandarCombo();
    } 
}
