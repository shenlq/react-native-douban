import * as ActionType from '../constants/ActionType';


/**
 * 初始状态.
 * @type {Object}
 */
const init = {
    musics:[],
    musicCount: 0,
};

export default function reducer(state=init, action){
    switch(action.type){
    case ActionType.MUSIC_QUERY://音乐列表搜索
        return {
            ...state,
            musics: action.musics,
            musicCount: action.musicCount
        };
    case ActionType.MUSIC_CONCAT_QUERY://音乐列表翻页
        return {
            ...state,
            musics: [...state.musics, ...action.musics],
            musicCount: action.musicCount
        };
    default:
        return state;
    }
}
