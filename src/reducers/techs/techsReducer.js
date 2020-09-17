
const initialState = {
  techs: [],
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TECNOLOGIES_ATTEMPT':
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case 'FETCH_TECNOLOGIES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          error: false,
          techs: action.payload.techs
      }
      case 'FETCH_TECNOLOGIES_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: true,
          techs: {}
      }
      default:
        return state
    }
}