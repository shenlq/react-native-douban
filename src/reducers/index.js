import { combineReducers } from 'redux';
import movie from './movie';
import music from './music';
import book from './book';

const rootReducer = combineReducers({
    movie,
    music,
    book
});

export default rootReducer;
