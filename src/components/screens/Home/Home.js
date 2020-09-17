import React from 'react';
import { connect } from 'react-redux';

import Header from '../../commons/Header/Header';
import Tecno from '../../commons/Tecno/Tecno';
import Woloxers from '../../commons/Woloxers/Woloxers';
import Benefits from '../../commons/Benefits/Benefits';
import Requirements from '../../commons/Requirements/Requirements';
import Info from '../../commons/Info/Info';
import Footer from '../../commons/Footer/Footer';

import './Home.scss';

const MenuItems = [
    {url: '/home', desc: 'Inicio'},
    {url: '/tecnologies', desc: 'Tecnologías'},
    {url: '/', desc: 'Beneficios'},
    {url: '/', desc: 'Requerimientos'},
]
 
function Home(props) {
 
    return (
        <div className="Home">

            {
                props.isLogged ?
                <Header
                    items={MenuItems}
                    buttonText='Logout'
                    buttonUrl='/logout'
                    isJumboActive={true}
                /> :
                <Header
                    items={MenuItems}
                    buttonText='Login'
                    buttonUrl='/login'
                    isJumboActive={true}
                />
            }

            <Tecno />
            <Woloxers />
            <Benefits />
            <Requirements />
            <Info />
            <Footer />
        </div>
    );
}

const mapStateToProps = state => ({
    isLogged: state.auth.token || localStorage.getItem('token'),
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);