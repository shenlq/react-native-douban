import {
    Dimensions
} from 'react-native';

/**
 * 获取屏幕宽度.
 * @return {[Number]} [屏幕宽度]
 */
export const getWindowWidth = () => {
    return Dimensions.get('window').width;
};

/**
 * 获取屏幕高度.
 * @return {[Number]} [屏幕高度]
 */
export const getWindowHeight = () => {
    return Dimensions.get('window').height;
}