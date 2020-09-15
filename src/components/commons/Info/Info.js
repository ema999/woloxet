import React from 'react';

import './Info.scss';
 
function Info() {
 
    return (
        <section className="Info">
            <div className="container">
            <h1>Gracias por <span className="txtBlueSky">completar el ejercicio</span></h1>
            <p>Te invitamos a ver mas información</p>
            <button className="btn btn-fill">Conocer más</button>
            </div>
        </section>
    );
}
 
export default Info;