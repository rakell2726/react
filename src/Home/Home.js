import './Home.css'
import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades.js'

export function Home() {
    
    return(
        <>

        <div className='banner'>
            <Formularioreserva/>
            
        </div>

        <div>
            <Actividades></Actividades>
        </div>
        
        </>
    )
}