import React, { Component } from 'react';
import {
    View,
    WebView
} from 'react-native';
import * as Utils from '../utils';

/**
 * WebView.
 */
export default class NewWebView extends Component {
    render(){
        let { uri } = this.props;

        return (
            <WebView
              startInLoadingState={true}
              automaticallyAdjustContentInsets={false}
              style={{width: Utils.getWindowWidth()}}
              contentInset={{bottom: 50}}
              source={{uri}}/>
        );
    }
};