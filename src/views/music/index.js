import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    ListView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Constants from '../../constants';
import * as actions from '../../actions/music';
import Count from '../../components/Count';
import SearchBar from '../../components/SearchBar';
import ListTipBar from '../../components/ListTipBar';
import MusicItem from './MusicItem';



class Music extends Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            search: '五月天',
            isLoading: false,
            isPaging: false,
            musics: this.ds.cloneWithRows([]),
        };
    }
    changeTextHandle = search => {
        this.setState({
            search
        });
    }
    /**
     * 查找音乐.
     * @param  {Boolean} isConcat [是否拼接]
     */
    searchMusic = isConcat => {
        let { musics, getMusics } = this.props,
            { search } = this.state,
            start = isConcat && musics.length > 0 ? musics.length : 0;

        getMusics(search, start, isConcat).then(() => {
            this.isPaging = false;
            this.setState({
                isLoading: false,
                isPaging: false
            });
        });
    }
    /**
     * 搜索点击.
     */
    searchPressHandle = () => {
        this.setState({
            isLoading: true
        });

        this.searchMusic();
    }
    /**
     * 拉到底部.
     */
    onEndReachedHandle = () => {
        let { musics, musicCount } = this.props;

        if(this.isPaging){
            return false;
        }
        //请求下一页
        if(musics.length < musicCount){
            this.isPaging = true;
            this.setState({
                isPaging: true
            });
            this.searchMusic(true);
        }
    }
    /**
     * 初始化.
     */
    componentDidMount(){
        this.searchPressHandle();
    }
    /**
     * 音乐项渲染.
     * @param  {[Object]} music [音乐]
     */
    renderRow = music => {
        return <MusicItem music={music}/>;
    }
    /**
     * 音乐列表头部渲染.
     */
    renderHeader = () => {
        let { musicCount } = this.props;

        return <Count count={musicCount} desc='音乐'/>;
    }
    /**
     * 音乐列表底部渲染.
     */
    renderFooter = () => {
        let { musics, musicCount } = this.props,
            { isPaging } = this.state;

        //没有更多数据
        if(musics.length == musicCount){
            return <ListTipBar tip={Constants.LIST_TIP_NO_MORE}/>;
        }

        //刷新中
        if(isPaging){
            return <ListTipBar isLoading/>;
        }

        //上拉刷新
        if(musics.length < musicCount ){
            return <ListTipBar tip={Constants.LIST_TIP_REFRESH}/>;
        }
    }
    render() {
        let { search, isLoading } = this.state,
            { musics } = this.props;

        return (
            <View style={styles.container}>
                <SearchBar
                    isLoading={isLoading}
                    defaultValue={search}
                    placeholder="搜索音乐"
                    onChangeText={this.changeTextHandle}
                    onPress={this.searchPressHandle}/>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.ds.cloneWithRows(musics)}
                    renderRow={this.renderRow}
                    renderHeader={this.renderHeader}
                    renderFooter={this.renderFooter}
                    onEndReached={this.onEndReachedHandle}
                    onEndReachedThreshold={1}
                    enableEmptySections/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



export default connect(state => ({
        musics: state.music.musics,
        musicCount: state.music.musicCount,
    }), dispatch => bindActionCreators(actions, dispatch)
)(Music);