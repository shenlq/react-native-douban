import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Icons from '../constants/icon';
import * as Context from '../utils/context';

/**
 * 头部栏.
 */
export default class Header extends Component {
    /**
     * 回退.
     */
    goBack = () => {
        Context.getNavigator().pop();
    }
    render(){
        let { children } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.goBack}>
                    <Image style={styles.back} source={{uri: Icons.back}}/>
                </TouchableOpacity>
                <Text style={styles.text}>{children}</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#40bd55',
        flexDirection: 'row',
        marginTop: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
    },
    text: {
        color: 'white'
    },
    back: {
        width: 15,
        height: 15,
        tintColor: 'white',
        marginRight: 10
    },
});