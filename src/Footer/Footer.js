import './Footer.css'

export function Footer() {

    return(
        <>
        <div className='container-fluid'>
                <div class="row justify-content-center bg my-3 text-center p-3">
                    <div className="col-12 col-md-4">
                    <h1><i className="bi bi-house-heart"></i></h1>
                    <p>Cll 45 No 32-12</p>
                    <p>Medellín-Antioquia</p>
                    </div>
                    <div className='col-12 col-md-4'>
                    <h1><i className="bi bi-facebook"></i></h1>
                    <a>Facebook</a>
                    </div>
                    <div className='col-12 col-md-4'>
                    <h1><i className="bi bi-whatsapp"></i></h1>
                    <a>Whatsapp</a>
                    </div>
                </div>
            </div>

        </>
    )
    
}