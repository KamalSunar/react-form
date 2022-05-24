import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './rootReducers';

export const store = createStore(rootReducer, applyMiddleware(Thunk));
