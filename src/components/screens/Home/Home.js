import React from 'react';

import Header from '../../commons/Header/Header';
import Tecno from '../../commons/Tecno/Tecno';
import Woloxers from '../../commons/Woloxers/Woloxers';
import Benefits from '../../commons/Benefits/Benefits';
import Requirements from '../../commons/Requirements/Requirements';
import Info from '../../commons/Info/Info';
import Footer from '../../commons/Footer/Footer';

import './Home.scss';

const MenuItems = [
    {url: '#home', desc: 'Inicio'},
    {url: '#aboutus', desc: 'Tecnologías'},
    {url: '#service', desc: 'Beneficios'},
    {url: '#products', desc: 'Requerimientos'},
]
 
function Home() {
 
    return (
        <div className="Home">

            <Header
                items={MenuItems}
                buttonText='Login'
                isJumboActive={true}
            />

            <Tecno />
            <Woloxers />
            <Benefits />
            <Requirements />
            <Info />
            <Footer />
        </div>
    );
}
 
export default Home;