import React from 'react';

import bullet1 from '../../../img/bullet1.png';
import bullet2 from '../../../img/bullet2.png';
import bullet3 from '../../../img/bullet3.png';
import './Requirements.scss';
 
function Requirements() {
 
    return (
        <section className="Requirements">
            <div className="container">
            <h1>Requerimientos</h1>
            <div>
                <div className="requirementItem">
                <img src={bullet1} alt="requerimiento 1"/>
                <span>
                    Estudiantes avanzados o recibidos de carreras del rubro informático, sistemas o  electrónicos.
                </span>
                </div>
                <div className="requirementItem">
                <img src={bullet2} alt="requerimiento 2"/>
                <span>
                    Inglés intermedio/avanzado.
                </span>
                </div>
                <div className="requirementItem">
                <img src={bullet3} alt="requerimiento 3"/>
                <span>
                    Conocimiento de metodologías ágiles (deseable)
                </span>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default Requirements;