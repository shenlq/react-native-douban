import * as ActionType from '../constants/ActionType';


/**
 * 初始状态.
 * @type {Object}
 */
const init = {
    books:[],
    bookCount: 0,
};

export default function reducer(state=init, action){
    switch(action.type){
    case ActionType.BOOK_QUERY://图书列表搜索
        return {
            ...state,
            books: action.books,
            bookCount: action.bookCount
        };
    case ActionType.BOOK_CONCAT_QUERY://图书列表翻页
        return {
            ...state,
            books: [...state.books, ...action.books],
            bookCount: action.bookCount
        };
    default:
        return state;
    }
}
