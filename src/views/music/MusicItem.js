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
 * 音乐项.
 */
export default class MusicItem extends Component {
    goToDetailHandle = () => {
        let { music } = this.props;

        Context.getNavigator().push({
            component: WebView,
            params: {
                url: music.mobile_link || music.alt,
                title: music.title
            }
        });
    }
    render(){
        let { music } = this.props,
            authors = music.author? music.author.map(author => author.name).join('/') : '位置',
            tags = music.tags? music.tags.map(tag => tag.name).join('/') : '';

        console.log(music);
        return (
            <TouchableOpacity onPress={this.goToDetailHandle} style={styles.container} activeOpacity={0.6}>
                <View>
                    <Image source={{uri: music.image}} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>
                        {music.title}
                    </Text>
                    <Text style={styles.desc}>
                       演唱：{authors}
                    </Text>
                    <Text style={styles.desc} numberOfLines={1} lineBreakMode='middle'>
                        发布：{music.attrs.publisher && music.attrs.publisher.join(',') || '未知'}/
                             {music.attrs.pubdate && music.attrs.pubdate.join(',') || '未知'}
                    </Text>
                    <Text style={styles.desc} numberOfLines={2} lineBreakMode='tail'>
                        标签：{tags}
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
        marginBottom: 5,
    },
    rate: {
        color: '#ffbf18'
    }
});