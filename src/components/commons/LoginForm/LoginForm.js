
// I'm using connect but i could use redux hooks like useSelector and useDispatch
import React, {useState, useRef} from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../../actions/auth/login';
import { useHistory } from "react-router";

import './LoginForm.scss';
import spin from '../../../img/spin.gif';
 
function LoginForm(props) {

    let formRef = useRef(null);
    const history = useHistory();

    const [state , setState] = useState({
        email : '',
        password : '',
        error: props.error ? 'Credenciales incorrectas' : '',
        message: 'Ingresa tus credenciales',
        isRemember: false
    })

    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }));
    }

    const handleChangeCheckbox = (e) => {
        setState(prevState => ({
            ...prevState,
            isRemember : !state.isRemember
        }));
      };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === '' || state.email === '' || !formRef.current.checkValidity()) {
            setState(prevState => ({
                ...prevState,
                error: 'Los campos son inválidos'
            }))
        } else {
            props.loginAction({ 
                email: state.email,
                password: state.password,
                isRemember: state.isRemember
            }).then((result) => {
                if(result.data) {
                    return history.push({pathname:  "/tecnologies"});
                }
                setState(prevState => ({
                    ...prevState,
                    error: 'Credenciales incorrectas'
                }))
            });
        }
    }
 
    return (
        <div className="LoginForm">
            <div className="container">
                <form ref={formRef}>
                    <div className="message">
                        {
                            props.isLoading ?
                            <img src={spin} className="spinner" alt="Loading..."/> :
                            <div className={state.error ? 'messageRed' : ''}>{state.error || state.message}</div>
                        }
                    </div>
                    <div>
                        <input type="email"
                            id="email"
                            placeholder="Email"
                            value={state.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="password"
                            id="password" 
                            placeholder="Password"
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input type="checkbox"
                            id="isRemember"
                            checked={state.isRemember}
                            onChange={handleChangeCheckbox}
                        />
                        Recordarme
                    </div>
                    {
                        !props.isLoading &&
                        <button 
                        type="submit"
                        className="btn btn-anim"
                        onClick={handleSubmitClick}
                        >
                            Login
                        </button>
                    }
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    token: state.auth.token,
    isLoading: state.auth.isLoading
})

const mapDispatchToProps = dispatch => ({
    loginAction: (credentials) => dispatch(loginAction(credentials))
})
 
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);