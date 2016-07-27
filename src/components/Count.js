import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

/**
 * 列表数据统计.
 */
export default class Count extends Component {
    render(){
        let { count, desc } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    共<Text style={styles.number}>{' ' + count + ' '}</Text>个{desc}
                </Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {

    },
    text: {
        color: '#c6c6c6',
        paddingLeft: 10,
        fontSize: 12,
        paddingBottom: 10,
    },
    number: {
        color: '#999',
        fontSize: 13,
        fontWeight: 'bold',
    }
});
