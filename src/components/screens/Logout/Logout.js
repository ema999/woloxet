import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { logoutAction } from '../../../actions/auth/logout';

import { Redirect } from "react-router-dom";
 
function Login(props) {

    useEffect(() => {
        props.logoutAction();
    });
 
    return (
        <Redirect
            to={{
                pathname: "/login"
            }}
        />
    );
}
 
const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    logoutAction: () => dispatch(logoutAction())
})
 
export default connect(mapStateToProps, mapDispatchToProps)(Login);