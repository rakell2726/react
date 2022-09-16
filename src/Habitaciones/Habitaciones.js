import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import { useEffect,useState} from "react"
export function Habitaciones() {

    //usando el usestate : (function especial para crear vaiable global dentro del 
    //componente)
    const [estadoCarga, setEstadoCarga]=useState(true)
    const [habitaciones,setHabitaciones]=useState(null)

    //usan ek useffect:funcion que controla el render(el pintado) de un componente
    useEffect(function(){
        ServicioHabitacion()    
        .then (function (respuesta){
            
            setHabitaciones(respuesta)
            console.log(respuesta)
            setEstadoCarga(false)
        })
    },[])

    //evaluando la carga para renderizar respuesta
    if (estadoCarga){
        return(
            <>
    
            <h1>estoy cargando</h1>
            </>
        )
    }  
    else{
        return(

            <div>
                {
                    habitaciones.datos.map(function(habitacion){

                        return(

                            <div>
                                <h1>{habitacion.nombre}</h1>
                                <img src={habitacion.imagenes[0]}></img>
                            </div>
                        

                        )
                    })
                }
            </div>
        )
    }




   
}