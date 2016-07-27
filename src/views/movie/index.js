import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/movie';
import { connect } from 'react-redux';
import Icons from '../../constants/icon';
import MovieItem from './MovieItem';

/**
 * 电影列表页.
 */
class Movie extends Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            search: '美国队长',
            movies: this.ds.cloneWithRows([]),
        };
    }
    /**
     * 电影Item渲染.
     * @param  {[Object]} movie [电影]
     * @param  {[Number]} index [索引]
     */
    renderRow = (movie, r, index) => {
        let { movieCount } = this.props;

        return <MovieItem movie={movie} index={index} count={movieCount}/>;
    }
    /**
     * 输入框内容变化.
     * @param  {[String]} search [搜索关键词]
     */
    changeTextHandle = search => {
        this.setState({
            search
        });
    }
    /**
     * 查找电影.
     */
    searchMovieHandle = () => {
        let { getMovies } = this.props,
            { search } = this.state;

        getMovies(search);
    }
    onEndReachedHandle = () => {
        this.setState({
            showNoMoreInfo: true
        });
    }
    /**
     * 初始化.
     */
    componentDidMount(){
        this.searchMovieHandle();
    }
    render(){
        let { movies, movieCount } = this.props,
            { search, showNoMoreInfo } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.search}>
                    <View style={styles.searchIcon}>
                        <Image style={styles.searchImg} source={require('../../images/search.png')}/>
                    </View>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={this.changeTextHandle}
                        defaultValue={search}
                        autoCapitalize='none'
                        clearButtonMode='while-editing'
                        placeholder="搜索电影/电视"/>
                    <TouchableOpacity style={styles.searchBtnGroup} activeOpacity={0.6}>
                        <Text style={styles.searchBtn} onPress={this.searchMovieHandle}>搜索</Text>
                    </TouchableOpacity>
                </View>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.ds.cloneWithRows(movies)}
                    renderRow={this.renderRow}
                    onEndReachedThreshold={1}
                    onEndReached={this.onEndReachedHandle}
                    enableEmptySections/>
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
    noMore: {
        paddingTop: 20,
        paddingBottom: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#ddd',
        paddingBottom: 70,
    },
    textCenter: {
        color: '#999',
        fontSize: 12,
        textAlign: 'center',
    }
});


export default connect(state => ({
        movies: state.movie.movies,
        movieCount: state.movie.movieCount,
    }), dispatch => bindActionCreators(actions, dispatch)
)(Movie);