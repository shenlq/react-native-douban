import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

/**
 * 没有更多数据.
 */
export default class NoMoreBar extends Component {
    render(){
        let { tip, isLoading } = this.props;

        if(isLoading){
            return (
                <View style={styles.noMore}>
                    <View style={styles.line}/>
                    <ActivityIndicator style={styles.indicator}/>
                    <Text style={styles.text}>加载中</Text>
                    <View style={styles.line}/>
                </View>
            );
        }

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
    indicator: {
        marginLeft: 10,
    },
    line: {
        backgroundColor: '#eee',
        height: 0.5,
        width: 60,
    }
});