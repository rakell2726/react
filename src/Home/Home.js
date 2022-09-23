import './Home.css'
import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades.js'
import { Footer } from "../Footer/Footer.js"
import { useEffect,useState} from "react"
import { ServicioHabitacion } from "../services/ServicioHabitacion/ServicioHabitacion.js"
import Swal from 'sweetalert2'

export function Home() {

    const [habitaciones,setHabitaciones]=useState(null)
    const [estadoCarga, setEstadoCarga]=useState(true)
    const [idHabitacion, setHabitacion]=useState("")

    useEffect(function(){
        ServicioHabitacion()    
        .then (function (respuesta){
            
            setHabitaciones(respuesta)
            console.log(respuesta)
            setEstadoCarga(false)
        })
    },[])

    if (estadoCarga){
        return(
            <>
                <h1>estoy cargando</h1>
            </>
        )
    } else{

        return(
            <>
    
            <div className='banner'>
                <Formularioreserva habitacionseleccionada={idHabitacion} />
                
            </div>
    
            <div>
                <Actividades></Actividades>
            </div>
    
                <div className="mt-5">
    
                            <div className='container-fluid my-5'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <h1>Habitaciones: </h1>
                                    </div>
                                </div>
                                <div className='row row-cols-1 row-cols-md-3 g-2'>
                                {
    
                                    habitaciones.datos.map(function(habitacion){
                                        return(
                                            <>
                                                
                                                    <div className="col">
    
                                                        <div className='card h-100'>
                                                            <img src={habitacion.imagenes[0]} alt="img" height="250px" className=''/>
                                                            <h3 className='text-center'>{habitacion.nombre}</h3>
                                                            <p className='mx-2'>{habitacion.descripcion}</p>
                                                            <h2 className='text-start'>${habitacion.valorNoche}</h2>
                                                            <div className='mx-2 d-inline'>
                                                                <i className="bi bi-person-fill"></i>
                                                                <i className="bi bi-person-fill"></i>
                                                                <i className="bi bi-person-fill"></i>
                                                            </div>
                                                            <button onClick={()=>{
                                                                setHabitacion(habitacion._id)
                                                                Swal.fire({
                                                                    position: 'center',
                                                                    icon: 'success',
                                                                    title: 'Habitacion seleccionada',
                                                                    showConfirmButton: false,
                                                                    timer: 2500
                                                                  })

                                                            }} className='btn btn-primary'>Reservar</button>
                                                        </div>
    
                                                    </div>
                                                 
                                                
                                            </>
                                           
                                                
                                        )
                                    })
    
                                }
    
                                </div>
                            
    
                            </div>
                            
                    </div>
            <div>
                <Footer></Footer>
            </div>
            </>
        )

    } 
    
    
}