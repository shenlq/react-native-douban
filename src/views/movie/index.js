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
import Constants from '../../constants';
import Count from '../../components/Count';
import SearchBar from '../../components/SearchBar';
import ListTipBar from '../../components/ListTipBar';
import MovieItem from './MovieItem';

/**
 * 电影搜索列表页.
 */
class Movie extends Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            search: '古惑仔',
            movies: this.ds.cloneWithRows([]),
        };
    }
    /**
     * 电影Item渲染.
     * @param  {[Object]} movie [电影]
     * @param  {[Number]} index [索引]
     */
    renderRow = (movie, r, index) => {
        let { movies, movieCount } = this.props;

        //统计信息
        if(index == 0){
            return (
                 <View>
                    <Count count={movieCount} desc='电影'/>
                    <MovieItem movie={movie}/>
                </View>
            );
        }

        //没有更多数据
        if(index == movieCount - 1){
            return (
                <View>
                    <MovieItem movie={movie}/>
                    <ListTipBar tip={Constants.LIST_TIP_NO_MORE}/>
                </View>
            );
        }

        //上拉刷新
        if(index == movies.length - 1 && index != movieCount - 1 ){
            return (
                <View>
                    <MovieItem movie={movie}/>
                    <ListTipBar tip={Constants.LIST_TIP_REFRESH}/>
                </View>
            );
        }

        return <MovieItem movie={movie}/>;
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
     * @param  {Boolean} isConcat [是否翻页]
     */
    searchMovieHandle = isConcat => {
        let { movies, getMovies } = this.props,
            { search } = this.state,
            start = movies.length > 0 ? movies.length : 0;

        getMovies(search, start, isConcat);
    }
    /**
     * 拉到底部.
     */
    onEndReachedHandle = () => {
        let { movies, movieCount } = this.props;

        //请求下一页
        if(movies.length < movieCount){
            this.searchMovieHandle(true);
        }
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
                    placeholder="搜索电影/电视"
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
});


export default connect(state => ({
        movies: state.movie.movies,
        movieCount: state.movie.movieCount,
    }), dispatch => bindActionCreators(actions, dispatch)
)(Movie);