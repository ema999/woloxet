import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import header from '../../../img/header.png';
import logo from '../../../img/logo.png';

import './Header.scss';
 
function Header(props) {
 
    return (
        <header className="Header">
            <div className="container">
                <div className="top">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                    <menu>
                    <ul>
                        {
                            props.items.map((item, index) => {
                                return <li key={item.desc + index}><Link to={item.url}> {item.desc} </Link> </li>;
                            })
                        }
                    </ul>
                    {
                        props.buttonText && props.buttonUrl ? 
                        <Link to={props.buttonUrl}>
                            <button className="btn btn-anim">{props.buttonText}</button>
                        </Link> : null
                    }
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
    buttonUrl: PropTypes.string,
    isJumboActive: PropTypes.bool
};
 
export default Header;