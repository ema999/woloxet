import React from 'react';
import PropTypes from 'prop-types';

import header from '../../../img/header.png';
import logo from '../../../img/logo.png';

import './Header.scss';
 
function Header(props) {
 
    return (
        <header className="Header">
            <div className="container">
                <div className="top">
                    <img src={logo} alt="logo"/>
                    <menu>
                    <ul>
                        {
                            props.items.map((item) => {
                                return <li><a href={item.url}> {item.desc} </a></li>;
                            })
                        }
                    </ul>
                    <button className="btn btn-anim">Login</button>
                    </menu>
                </div>

                {
                    props.isJumboActive ? 
                    <section className="jumbotron">
                        <div>
                            <p>
                                Bienvenido a tu<br></br> <b>Entrevista Técnica</b> en <br></br> <span>Wolox</span>
                            </p>
                        </div>
                        <img src={header} alt="header" />
                    </section> : null
                }
            </div>
        </header>
    );
}

Header.propTypes = {
    items: PropTypes.array,
    buttonText: PropTypes.string,
    isJumboActive: PropTypes.bool
};
 
export default Header;