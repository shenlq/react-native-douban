import { combineReducers } from 'redux';
import movie from './movie';
import music from './music';

const rootReducer = combineReducers({
    movie,
    music
});

export default rootReducer;
