import React from 'react';

import './Benefits.scss';
import benefit1 from '../../../img/benefit-1.png';
import benefit2 from '../../../img/benefit-2.png';
import benefit3 from '../../../img/benefit-3.png';
import benefit4 from '../../../img/benefit-4.png';
import benefit5 from '../../../img/benefit-5.png';
import benefit6 from '../../../img/benefit-6.png';
 
function Benefits() {
 
    return (
        <section className="Benefits">
            <div className="container">
            <h1>Entre los beneficios que ofrecemos se encuentran <span className="txtBlueSky">;)</span></h1>
            <div className="benefitsList">
                <div>
                <div className="avatar"><img src={benefit1} alt="Flexibilidad Horaria"/></div>
                <div className="txt">Flexibilidad Horaria</div>
                </div>
                <div>
                <div className="avatar"><img src={benefit2} alt="Home Office"/></div>
                <div className="txt">Home Office</div>
                </div>
                <div>
                <div className="avatar"><img src={benefit3} alt="Capacitaciones y workshops"/></div>
                <div className="txt">Capacitaciones y workshops</div>
                </div>
                <div>
                <div className="avatar"><img src={benefit4} alt="Snacks, frutas y bebidas gratis"/></div>
                <div className="txt">Snacks, frutas y bebidas gratis</div>
                </div>
                <div>
                <div className="avatar"><img src={benefit5} alt="Semana Remota"/></div>
                <div className="txt">Semana Remota</div>
                </div>
                <div>
                <div className="avatar"><img src={benefit6} alt="Trabajar en ultimas tecnologías"/></div>
                <div className="txt">Trabajar en ultimas tecnologías</div>
                </div>
            </div>
            </div>
        </section>
    );
}
 
export default Benefits;