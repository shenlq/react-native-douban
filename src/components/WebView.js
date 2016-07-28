import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    WebView
} from 'react-native';
import Header from './Header';
import * as Utils from '../utils';

/**
 * 电影详情.
 */
export default class NewWebView extends Component {
    render(){
        let { url, title } = this.props;

        return (
            <View style={styles.container}>
                <Header>{title}</Header>
                <WebView
                  startInLoadingState={true}
                  automaticallyAdjustContentInsets={false}
                  style={{width: Utils.getWindowWidth()}}
                  contentInset={{bottom: 50}}
                  source={{url}}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});