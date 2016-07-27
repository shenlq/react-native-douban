import URL from '../constants/url';
import * as ActionType from '../constants/ActionType';

/**
 * 电影搜索.
 * @param  {[String]}  search   [搜索关键词]
 * @param  {Number}    start    [起始点]
 * @param  {Boolean}   isConcat [是否拼接]
 */
export const getMovies = (search, start=0, isConcat=false) => {
    return dispatch => fetch(`${URL.MOVIE_SEARCH}?q=${search}&start=${start}`)
    .then(response => response.json())
    .then(result => {
        dispatch({
            type: isConcat? ActionType.MOVIE_CONCAT_QUERY : ActionType.MOVIE_QUERY,
            movies: result.subjects,
            movieCount: result.total
        });
    });
};