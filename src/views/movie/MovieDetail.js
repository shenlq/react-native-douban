import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import WebView from '../../components/WebView';

/**
 * 电影详情.
 */
export default class MovieDetail extends Component {
    render(){
        let { url } = this.props;
        console.log();
        url = 'https://movie.douban.com/subject/1301283/';
        return (
            <WebView uri={url}/>
        );
    }
};