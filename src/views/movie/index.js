import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import Icons from '../../constants/icon';

/**
 * 电影列表页.
 */
export default class Movie extends Component {
    constructor(props){
        super(props);

        this.state = {

        };
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View style={styles.searchIcon}>
                        <Image style={styles.searchImg} source={require('../../images/search.png')}/>
                    </View>
                    <TextInput style={styles.searchInput} autoCapitalize='none' clearButtonMode='while-editing' placeholder="搜索电影/电视"/>
                    <TouchableOpacity style={styles.searchBtnGroup} activeOpacity={0.6}>
                        <Text style={styles.searchBtn}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex: 1}}>
                    <Text style={styles.count}>共12个电影</Text>
                </View>
            </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        borderTopColor: '#ddd',
        marginTop: 20,
    },
    searchInput: {
        flex: 1,
    },
    searchIcon: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
    },
    searchImg: {
        width: 15,
        height: 15,
    },
    searchBtnGroup: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    searchBtn: {
        color: 'white',
        backgroundColor: 'green',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 2,
    },
    count: {
        color: 'grey',
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 12,
    }
});