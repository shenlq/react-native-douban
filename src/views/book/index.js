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
import * as actions from '../../actions/book';
import Count from '../../components/Count';
import SearchBar from '../../components/SearchBar';
import ListTipBar from '../../components/ListTipBar';
import BookItem from './BookItem';


/**
 * 图书查找页.
 */
class Book extends Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            search: '活法',
            isLoading: false,
            isPaging: false,
            books: this.ds.cloneWithRows([]),
        };
    }
    changeTextHandle = search => {
        this.setState({
            search
        });
    }
    /**
     * 查找图书.
     * @param  {Boolean} isConcat [是否拼接]
     */
    searchBook = isConcat => {
        let { books, getBooks } = this.props,
            { search } = this.state,
            start = isConcat && books.length > 0 ? books.length : 0;

        getBooks(search, start, isConcat).then(() => {
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

        this.searchBook();
    }
    /**
     * 拉到底部.
     */
    onEndReachedHandle = () => {
        let { books, bookCount } = this.props;

        if(this.isPaging){
            return false;
        }
        //请求下一页
        if(books.length < bookCount){
            this.isPaging = true;
            this.setState({
                isPaging: true
            });
            this.searchBook(true);
        }
    }
    /**
     * 初始化.
     */
    componentDidMount(){
        this.searchPressHandle();
    }
    /**
     * 图书项渲染.
     * @param  {[Object]} book [图书]
     */
    renderRow = book => {
        return <BookItem book={book}/>;
    }
    /**
     * 图书列表头部渲染.
     */
    renderHeader = () => {
        let { bookCount } = this.props;

        return <Count count={bookCount} desc='图书'/>;
    }
    /**
     * 图书列表底部渲染.
     */
    renderFooter = () => {
        let { books, bookCount } = this.props,
            { isPaging } = this.state;

        //没有更多数据
        if(books.length == bookCount){
            return <ListTipBar tip={Constants.LIST_TIP_NO_MORE}/>;
        }

        //刷新中
        if(isPaging){
            return <ListTipBar isLoading/>;
        }

        //上拉刷新
        if(books.length < bookCount ){
            return <ListTipBar tip={Constants.LIST_TIP_REFRESH}/>;
        }
    }
    render() {
        let { search, isLoading } = this.state,
            { books } = this.props;

        return (
            <View style={styles.container}>
                <SearchBar
                    isLoading={isLoading}
                    defaultValue={search}
                    placeholder="搜索图书"
                    onChangeText={this.changeTextHandle}
                    onPress={this.searchPressHandle}/>
                <ListView
                    style={{flex: 1}}
                    dataSource={this.ds.cloneWithRows(books)}
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
        books: state.book.books,
        bookCount: state.book.bookCount,
    }), dispatch => bindActionCreators(actions, dispatch)
)(Book);