import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


let composeItems = [],
    middleware = applyMiddleware(thunk);

composeItems.push(middleware);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, compose(...composeItems));
}

