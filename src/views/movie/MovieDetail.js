import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import WebView from '../../components/WebView';
import Header from '../../components/Header';

/**
 * 电影详情.
 */
export default class MovieDetail extends Component {
    render(){
        let { url, title } = this.props;

        return (
            <View style={styles.container}>
                <Header>{title}</Header>
                <WebView uri={url}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});