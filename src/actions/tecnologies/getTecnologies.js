import API from '../../resources/api';

export const getTecnologies = () => dispatch => {
    dispatch({type: 'FETCH_TECNOLOGIES_ATTEMPT'});

    return API.get(`techs`)
        .then(res => {
            dispatch({type: 'FETCH_TECNOLOGIES_SUCCESS', payload: { techs: res.data}});
        })
        .catch((error) => {
            dispatch({type: 'FETCH_TECNOLOGIES_FAILURE'});
            return error;
        })
}