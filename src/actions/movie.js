import URL from '../constants/url';
import * as ActionType from '../constants/ActionType';

/**
 * 电影搜索.
 * @param  {[String]} search [关键词]
 */
export const getMovies = search => {
    return dispatch => fetch(`${URL.MOVIE_SEARCH}?q=${search}`)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        dispatch({
            type: ActionType.MOVIE_QUERY,
            movies: result.subjects,
            movieCount: result.total
        });
    });
};