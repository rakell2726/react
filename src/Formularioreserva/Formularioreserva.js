import { useState } from "react"
import { ServicioReserva } from "../services/ServicoReserva.js"
import Swal from 'sweetalert2'

export function Formularioreserva(habitacionseleccionada){
    
    
    

    const[entrada,setEntrada]=useState("")
    const[salida,setSalida]=useState("")
    const[ninos,setNinos]=useState("")
    const[adultos,SetAdultos]=useState("")

    function EnvioFormulario(evento) {
        evento.preventDefault()
        evento.preventDefault()
        let data=
        {
            "idHabitacion":"habitacionseleccionada" ,
            "fechaEntrada":entrada,
            "fechaSalida":salida,
            "numeroNinos":ninos ,
            "numeroAdultos":adultos
        }
        ServicioReserva(data)
        .then(function(respuesta){
            console.log(respuesta)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Respuesta.mensaje',
                showConfirmButton: false,
                timer: 1500
              })
        })
        
    }

    return(
        <>

        <form className="text-white fw-bold" onSubmit={EnvioFormulario}>

            <div className="row">
                <div className="col-12 col-md-8 text-white">
                    <h4>Reserva c</h4>
                    <h5>hgggh</h5>
                    <h5>hhh</h5>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <label className="form-label">Fecha de entrada</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                        <input 
                        type="Date" 
                        className="form-control shadow"
                        onChange={(evento)=>{
                            setEntrada(evento.target.value)
                        }}
                        value = {entrada}
        />
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label">Fecha de salida</label>
                    <div class="input-group mb-3">
                        <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                        <input 
                        type="Date" 
                        className="form-control shadow"
                        onChange={(evento)=>{
                            setSalida(evento.target.value)
                        }}
                        value = {salida}
        />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <label className="form-label">Número de adultos</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <select 
                            className="form-select"
                            onChange={(evento)=>{
                                SetAdultos(evento.target.value)
                            }}
                            value = {adultos}
                            defaultValue="1"
                             >
                                
                                <option selected>Adultos</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label">Número de niños</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <select 
                            className="form-select" 
                            onChange={(evento)=>{
                                setNinos(evento.target.value)
                            }}
                            value = {ninos}
                            defaultValue="0"
                            >
                                <option selected>Niños</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>                                            
                </div>
                <div class="d-grid gap-2 col-8 mx-auto">
                <button type="Submit" class="btn btn-primary w-50">Reserva</button> 
                </div>
            </div>  
             

        </form>        
        
        </>
    )
}