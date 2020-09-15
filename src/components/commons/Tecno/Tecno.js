import React from 'react';

import tecno from '../../../img/tecno.png';

import './Tecno.scss';
 
function Tecno() {
 
    return (
        <section className="Tecno">
            <div className="container">
            <p>
                Estamos buscando para incorporar gente increíble para estas tecnologías:
            </p>
            <img src={tecno} alt="tecnologías"/>
            </div>
        </section>
    );
}
 
export default Tecno;