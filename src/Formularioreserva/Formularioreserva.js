export function Formularioreserva(){

    return(
        <>

        <form className="text-white fw-bold">

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
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                        <input type="Date" class="form-control shadow"/>
                    </div>
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label">Fecha de salida</label>
                    <div class="input-group mb-3">
                        <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                        <input type="Date" class="form-control shadow"/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-4">
                    <label className="form-label">Número de adultos</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                </div>
                <div className="col-12 col-md-4">
                    <label className="form-label">Número de niños</label>
                        <div class="input-group mb-3">
                            <span class="input-group-text"><i class="bi bi-calendar-date"></i></span>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Niños</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
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