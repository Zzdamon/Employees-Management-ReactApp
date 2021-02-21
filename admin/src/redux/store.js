import { createStore, combineReducers, applyMiddleware } from 'redux';
import { employeesReducer } from './EmployeesReducer';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = employeesReducer;
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;