import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';
import techsReducer from './techs/techsReducer';

export default combineReducers({
    auth: loginReducer,
    techs: techsReducer
});