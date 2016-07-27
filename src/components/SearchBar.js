import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

/**
 * 搜索条.
 */
export default class SearchBar extends Component {
    render(){
        let { defaultValue, placeholder, isLoading, onChangeText, onPress } = this.props;

        return (
            <View style={styles.search}>
                <View style={styles.searchIcon}>
                    <Image style={styles.searchImg} source={require('../images/search.png')}/>
                </View>
                <TextInput
                    style={styles.searchInput}
                    onChangeText={onChangeText}
                    defaultValue={defaultValue}
                    autoCapitalize='none'
                    clearButtonMode='while-editing'
                    placeholder={placeholder}/>
                <TouchableOpacity style={styles.searchBtnGroup} activeOpacity={0.6}>
                    { isLoading?
                        <ActivityIndicator color="green"/> :
                        <Text style={styles.searchBtn} onPress={onPress}>搜 索</Text>
                    }
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
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
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
});