import React from 'react';
import PropTypes from 'prop-types';

import './TecnologiesList.scss';
 
function TecnologiesList(props) {
 
    return (
        <section className="TecnologiesList">
            <div className="container">
            <div className="total">{props.techs.length} resultados</div>
            <ul className="list">
                {
                    props.techs.map((tech, index) => {
                        return (
                            <li key={tech.tech + index} className="tech">
                                <div className="logo">
                                    <img src={tech.logo} alt={tech.tech}></img>
                                </div>
                                <div className="desc">
                                    <ul>
                                        <li>Name: {tech.tech}</li>
                                        <li>Language: {tech.language}</li>
                                        <li>License: {tech.license}</li>
                                        <li>Type: {tech.type}</li>
                                        <li>Year: {tech.year}</li>
                                        <li>Author: {tech.author}</li>
                                    </ul>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
            </div>
        </section>
    );
}

TecnologiesList.propTypes = {
    techs: PropTypes.array,
};
 
export default TecnologiesList;