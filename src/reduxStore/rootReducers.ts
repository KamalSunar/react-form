import { combineReducers } from 'redux';
import { authentication, registration } from './reducers';

const rootReducer = combineReducers({
	authentication,
	registration,
});

export default rootReducer;
