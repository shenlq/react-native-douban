import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

/**
 * 电影项.
 */
export default class MovieItem extends Component {
    render(){
        let { movie } = this.props,
            casts = movie.casts.map(cast => cast.name).join("/"),
            directors = movie.directors.map(director => `${director.name}(导演)`).join("/");

        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.6}>
                <View>
                    <Image source={{uri: movie.images.medium}} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <Text style={styles.title}>
                        {movie.title}
                    </Text>
                    <Text style={styles.desc}>
                        {movie.genres.join('/') || '未知'}
                        /{movie.year || '-'}年
                        <Text style={styles.rate}> {' ' + movie.rating.average || 0}分</Text>
                    </Text>
                    <Text style={styles.desc}>
                        {`${directors}/${casts}`}
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