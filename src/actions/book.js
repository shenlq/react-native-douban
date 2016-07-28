import URL from '../constants/url';
import * as ActionType from '../constants/ActionType';

/**
 * 图书搜索.
 * @param  {[String]}  search   [搜索关键词]
 * @param  {Number}    start    [起始点]
 * @param  {Boolean}   isConcat [是否拼接]
 */
export const getBooks = (search, start=0, isConcat=false) => {
    return dispatch => fetch(`${URL.BOOK_SEARCH}?q=${search}&start=${start}`)
    .then(response => response.json())
    .then(result => {
        dispatch({
            type: isConcat? ActionType.BOOK_CONCAT_QUERY : ActionType.BOOK_QUERY,
            books: result.books,
            bookCount: result.total
        });
    });
};