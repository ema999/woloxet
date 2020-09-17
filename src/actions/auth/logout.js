
export const logoutAction = () => dispatch => {
    dispatch({type: 'LOGOUT_ATTEMPT'});
    localStorage.removeItem('token');
    dispatch({type: 'LOGOUT_SUCCESS'});

    return true;
}