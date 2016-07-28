import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Navigator
} from 'react-native';
import * as Context from '../utils/context';

/**
 * Navigator
 */
export default class NewNavigator extends Component {
    render() {
        let { component } = this.props,
            initialRoute = {
                component,
                index: 0
            };

        return (
            <Navigator
                initialRoute={initialRoute}
                renderScene={Context.getComponent}/>
        );
    }
};


const styles = StyleSheet.create({

});
