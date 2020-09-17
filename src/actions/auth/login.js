import API from '../../resources/api';

export const loginAction = (credentials) => dispatch => {
    dispatch({type: 'LOGIN_ATTEMPT'})

    return API.post(`login`, { email: credentials.email, password: credentials.password})
        .then(res => {
            localStorage.removeItem('token');
            if (res.data.token) {

                if(credentials.isRemember) localStorage.setItem('token', res.data.token);
                dispatch({type: 'LOGIN_SUCCESS', payload: { token: res.data.token}});

                return res;
            }
            return null;
        })
        .catch((error) => {
            localStorage.removeItem('token');
            dispatch({type: 'LOGIN_FAILURE'});
            return error;
        })
}