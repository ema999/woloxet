import React from 'react';
import { connect } from 'react-redux';

import Header from '../../commons/Header/Header';
import TecnologiesList from '../../commons/TecnologiesList/TecnologiesList';
import { getTecnologies } from '../../../actions/tecnologies/getTecnologies';

import arrowUp from '../../../img/arrow-up.png';
import arrowDown from '../../../img/arrow-down.png';
import './Tecnologies.scss';

const MenuItems = [
    {url: '/home', desc: 'Inicio'},
    {url: '/tecnologies', desc: 'Tecnologías'},
    {url: '/', desc: 'Beneficios'},
    {url: '/', desc: 'Requerimientos'},
]

function Tecnologies(props) {

    const [state , setState] = React.useState({
        inputSearchText : '',
        inputSearchType: '',
        orderedByName: true,
    })
    
    React.useEffect(() => {
        props.getTecnologies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleInputSearchChange = (e) => {
        const {id, value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value.toLowerCase()
        }));
    }

    const handleInputOrder = (e) => {
        setState(prevState => ({
            ...prevState,
            orderedByName : !prevState.orderedByName
        }));
    }

    const filter = (techs) => {
        let techsFiltered = techs;

        if (state.inputSearchText.length) {

            let filteredByName = techsFiltered.filter((tech) => {
                return tech.tech.toLowerCase().includes(state.inputSearchText);
            });

            techsFiltered = filteredByName;
        }

        if (state.inputSearchType.length) {

            let filteredByType = techsFiltered.filter((tech) => {
                return tech.type.toLowerCase() === state.inputSearchType;
            });

            techsFiltered = filteredByType;
        }

        return techsFiltered;
    }

    const order = (techs) => {
        let ordered = techs.sort((a, b) => {
            if ( a.tech < b.tech ) {
              return -1;
            }
            if ( a.tech > b.tech ) {
              return 1;
            }
            return 0;
          });
        
        if (!state.orderedByName) return ordered.reverse();
        return ordered;
    }

    return (
        <div className="Tecnologies">
            <Header
                items={MenuItems}
                buttonText='Logout'
                buttonUrl='/logout'
            />
            <div className="container">
                <form className="formFilter">
                    <div>
                        <input 
                            type="text"
                            id="inputSearchText"
                            onChange={handleInputSearchChange}
                            value={state.inputSearchText}
                            placeholder="Buscar..."
                        >
                        </input>
                    </div>
                    <div>
                        <select id="inputSearchType" value={state.type} onChange={handleInputSearchChange}>
                            <option value="">Tipo</option>
                            <option value="Front-End">Front-end</option> 
                            <option value="Back-End">Back-end</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </div>
                    <div className="order">
                        Ordenado por: nombre 
                        <span onClick={handleInputOrder}>
                            {
                                state.orderedByName ?
                                <img src={arrowUp} alt="arrow-up"/> : <img src={arrowDown} alt="arrow-down"/>
                            }
                        </span>
                    </div>
                </form>
            </div>
            <TecnologiesList techs={order(filter(props.techs))}/>
        </div>
    );
}
 
const mapStateToProps = state => ({
    isLoading: state.techs.isLoading,
    techs: state.techs.techs,
})

const mapDispatchToProps = dispatch => ({
    getTecnologies: () => dispatch(getTecnologies())
})

export default connect(mapStateToProps, mapDispatchToProps)(Tecnologies);