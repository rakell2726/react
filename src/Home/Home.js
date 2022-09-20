import './Home.css'
import { Formularioreserva } from '../Formularioreserva/Formularioreserva.js'
import { Actividades } from '../Actividades/Actividades.js'
import { Footer } from "../Footer/Footer.js"

export function Home() {
    
    return(
        <>

        <div className='banner'>
            <Formularioreserva/>
            
        </div>

        <div>
            <Actividades></Actividades>
        </div>
        <div>
            <Footer></Footer>
        </div>
        </>
    )
}