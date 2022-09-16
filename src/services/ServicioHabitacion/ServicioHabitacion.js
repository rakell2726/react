export async function ServicioHabitacion() {

    // 1- uri del servicio
    const URI="https://servercomfama.herokuapp.com/viajescomfama/habitaciones"
   
    // 2- configurar la peticion
    const PETICION = {
        method: "GET"
    }

    // 3- CONSUMO 

    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()

    return datos
}