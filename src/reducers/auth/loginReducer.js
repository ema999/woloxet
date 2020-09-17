
const initialState = {
  token: localStorage.getItem('token'),
  isLoading: false,
  error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_ATTEMPT':
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          error: false,
          token: action.payload.token
      }
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: true,
          token: false
      }
      case 'LOGOUT_ATTEMPT':
        return {
          ...state,
          isLoading: true,
          error: false
        };
      case 'LOGOUT_SUCCESS':
        return {
          ...state,
          isLoading: false,
          error: false,
          token: false
      }
      case 'LOGOUT_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: true,
      }
      default:
        return state
    }
}