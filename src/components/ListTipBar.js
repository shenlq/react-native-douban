import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

/**
 * 没有更多数据.
 */
export default class NoMoreBar extends Component {
    render(){
        let { tip } = this.props;

        return (
            <View style={styles.noMore}>
                <View style={styles.line}/>
                <Text style={styles.text}>{tip}</Text>
                <View style={styles.line}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    noMore: {
        paddingTop: 20,
        paddingBottom: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#ddd',
        paddingBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingLeft: 30,
        paddingRight: 30,
    },
    text: {
        color: '#ccc',
        fontSize: 12,
        textAlign: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    line: {
        backgroundColor: '#eee',
        height: 0.5,
        width: 60,
    }
});