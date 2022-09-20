import './Actividades.css'

export function Actividades() {

    return(
        <>
            <div className="container-fluid">

                <div className="row">

                    <div className="col-12 col-md-3 bg-dark mx-2 my-5 text-white">
                        <p>Areas verdes</p>
                        <div className="progress mt-2">
                            <div className="progress-bar progreso1" role="progressbar"></div>
                        </div>
                        <p>Restaurante</p>
                        <div className="progress mt-2">
                            <div className="progress-bar progreso2" role="progressbar"></div>
                        </div>
                        <p>Atencion del personal</p>
                        <div className="progress mt-2">
                            <div className="progress-bar progreso3" role="progressbar"></div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                       <h1>HOTEL</h1>
                       <h3>Nuestra misión</h3>
                        <p>
                        Nuestro hotel ofrece los mejores espacios cinco estrellas, para el descanso , la gastronomía, y los negocios, junto a un gran equipo de trabajo que sirve con pasión, brinda servicios de alta calidad e innovación a sus huéspedes y clientes, para hacerlos sentir como en casa y maximizando así el valor de la empresa.
                        </p>
                        <h3>Nuestra visión</h3>
                        <p>
                        Seguir siendo líderes en la industria en el 2020, con instalaciones renovadas y servicios innovadores, para ser siempre la primera opción en el mercado, promoviendo la armonía con el medio ambiente y la comunidad, maximizando el valor de la empresa para nuestros accionistas.
                        </p>
                        <h3>Nuestros valores</h3>
                        <ul>
                            <li>   
                            RESPETO: Con nosotros mismos, el cliente interno y externo, para promover un ambiente de armonía.                     
                            </li>
                            <li>   
                            COMPROMISO: Nuestra pasión es brindarles la mejor atención a nuestros huéspedes.              
                            </li>
                            <li>   
                            INTEGRIDAD: Somos responsables de nuestros actos y decisiones, haciendo siempre lo correcto desde la ética.                   
                            </li>
                            <li>   
                            COOPERACIÓN:Trabajamos en equipo en todo lo que hacemos, para lograr los objetivos de nuestra empresa.                   
                            </li>
                            <li>   
                            PROACTIVIDAD: Trabajamos con iniciativa y positivismo en el desarrollo de acciones creativas.                   
                            </li>
                        </ul>                      
                                            
                        <div className="row mt-5">
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto1.jpg?alt=media&token=8fd28516-44f2-421d-bdeb-b2e871ea3886" className="img-fluid w-100 h-100"></img>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto2.jpg?alt=media&token=f4996aef-cea1-40a4-b8d4-80fa137a0714" className="img-fluid w-100 h-100"></img>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto3.jpg?alt=media&token=55e90788-db0c-46b6-9862-dd8ea5eb122e" className="img-fluid w-100 h-100"></img>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto4.jpg?alt=media&token=ccc25533-7333-4c03-b990-3e2427c92370" className="img-fluid h-100 w-100"></img>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto5.jpg?alt=media&token=e219df8a-8cdb-4845-b33f-3160247c43ad" className="img-fluid h-100 w-100"></img>
                            </div>
                            <div className="col-12 col-md-4">
                                <img src="https://firebasestorage.googleapis.com/v0/b/consecionario-5f80b.appspot.com/o/foto6.jpg?alt=media&token=5a823039-7343-4305-b2e0-a3d083e970df" className="img-fluid h-100 w-100"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    )
    
}