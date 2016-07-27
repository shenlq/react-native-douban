import * as ActionType from '../constants/ActionType';


/**
 * 初始状态.
 * @type {Object}
 */
const init = {
    movies:[],
    movieCount: 0,
};

export default function reducer(state=init, action){
    switch(action.type){
    case ActionType.MOVIE_QUERY: //电影搜索
        return {
            ...state,
            movies: action.movies,
            movieCount: action.movieCount
        };
    case ActionType.MOVIE_CONCAT_QUERY: //电影列表翻页
        console.log(state.movies, action.movies);
        return {
            ...state,
            movies: state.movies.concat(action.movies),
            movieCount: action.movieCount
        };
    default:
        return state;
    }
}
