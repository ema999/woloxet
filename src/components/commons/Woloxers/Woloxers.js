import React from 'react';

import twitter from '../../../img/icon-twitter.png';
import './Woloxers.scss';
 
function Woloxers(props) {
 
    return (
        <section className="Woloxers">
            <div className="container">
            <div className="workers">
                <div className="plus txtBlueSky"><span className="txtGreen">350 +</span> Woloxers</div>
                <div className="twitter"><img src={twitter} alt="twitter"/>@Wolox</div>
                <button className="btn btn-transparent btn-anim">Siguenos</button>
            </div>
            <p>
                Trabajamos para <span className="txtBlueSky">convertir</span> <span className="txtGreen">ideas</span> en productos.
            </p>
            </div>
        </section>
    );
}
 
export default Woloxers;