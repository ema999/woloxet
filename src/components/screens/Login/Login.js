import React from 'react';

import Header from '../../commons/Header/Header';
import Footer from '../../commons/Footer/Footer';
import LoginForm from '../../commons/LoginForm/LoginForm';

import './Login.scss';

const MenuItems = [
    {url: '/home', desc: 'Inicio'},
    {url: '/tecnologies', desc: 'Tecnologías'},
    {url: '/', desc: 'Beneficios'},
    {url: '/', desc: 'Requerimientos'},
]
 
function Login() {
 
    return (
        <div className="Login">

            <Header
                items={MenuItems}
            />
            <LoginForm />
            <Footer />
        </div>
    );
}
 
export default Login;