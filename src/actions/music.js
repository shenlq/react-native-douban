import URL from '../constants/url';
import * as ActionType from '../constants/ActionType';

/**
 * 电影搜索.
 * @param  {[String]}  search   [搜索关键词]
 * @param  {Number}    start    [起始点]
 * @param  {Boolean}   isConcat [是否拼接]
 */
export const getMusics = (search, start=0, isConcat=false) => {
    return dispatch => fetch(`${URL.MUSIC_SEARCH}?q=${search}&start=${start}`)
    .then(response => response.json())
    .then(result => {
        dispatch({
            type: isConcat? ActionType.MUSIC_CONCAT_QUERY : ActionType.MUSIC_QUERY,
            musics: result.musics,
            musicCount: result.total
        });
    });
};