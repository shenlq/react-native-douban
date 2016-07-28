import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import * as Context from '../../utils/context';
import WebView from '../../components/WebView';


/**
 * 图书项.
 */
export default class BookItem extends Component {
    goToDetailHandle = () => {
        let { book } = this.props;

        Context.getNavigator().push({
            component: WebView,
            params: {
                url: book.alt,
                title: book.title
            }
        });
    }
    render(){
        let { book } = this.props,
            tags = book.tags? book.tags.map(tag => tag.name).join('/') : null;

        return (
            <TouchableOpacity onPress={this.goToDetailHandle} style={styles.container} activeOpacity={0.6}>
                <View>
                    <Image source={{uri: book.image}} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>
                        {book.title}
                    </Text>
                    <Text style={styles.desc}>
                        {book.price} /
                        {book.pages || 0}页 /
                        {book.pubdate || '未知'} /
                        {book.publisher || '未知'}
                    </Text>
                    <Text style={styles.desc} numberOfLines={1} lineBreakMode='tail'>
                        {tags}
                    </Text>
                    <Text style={[styles.desc, styles.summary]} numberOfLines={2} lineBreakMode='tail'>
                        {book.summary}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#ddd',
    },
    image: {
        width: 65,
        height: 100,
    },
    info: {
        flex: 1,
        paddingLeft: 10,

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    desc: {
        color: '#919191',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 5,
    },
    summary: {
        marginTop: 3,
    },
    rate: {
        color: '#ffbf18'
    }
});