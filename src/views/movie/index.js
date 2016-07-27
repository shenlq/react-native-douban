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
import Count from '../../components/Count';
import SearchBar from '../../components/SearchBar';
import MovieItem from './MovieItem';

/**
 * 电影搜索列表页.
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
        return index == 0? (
                <View>
                    <Count count={movieCount} desc='电影'/>
                    <MovieItem movie={movie} index={index} count={movieCount}/>
                </View>
            ) :
        <MovieItem movie={movie} index={index} count={movieCount}/>;
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
                <SearchBar
                    defaultValue={search}
                    onChangeText={this.changeTextHandle}
                    onPress={this.searchMovieHandle}/>
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