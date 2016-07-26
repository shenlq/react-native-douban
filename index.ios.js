/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';
import Icons from './src/constants/icon';

class reactNativeDouban extends Component {
    constructor(props){
        super(props);

        this.state = {
            tab: 'movie'
        };
    }
    /**
     * 选择Tab.
     * @param  {[String]} tab [tab]
     */
    pressTabHandle = tab => {
        this.setState({
            tab
        });
    }
    render() {
        let { tab } = this.state;

        return (
            <TabBarIOS barTintColor="white"
                       unselectedTintColor="lightgray"
                       tintColor="green">
                <TabBarIOS.Item
                    title="首页"
                    icon={{uri: Icons.home, scale: 2.5}}
                    selected={tab === 'home'}
                    onPress={() => this.pressTabHandle('home')}>
                    <View>
                        <Text>首页</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="电影"
                    icon={{uri: Icons.movie, scale: 2.5}}
                    selected={tab === 'movie'}
                    onPress={() => this.pressTabHandle('movie')}>
                    <View>
                        <Text>电影</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="音乐"
                    icon={{uri: Icons.music, scale: 2.5}}
                    selected={tab === 'music'}
                    onPress={() => this.pressTabHandle('music')}>
                    <View>
                        <Text>音乐</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="图书"
                    icon={{uri: Icons.book, scale: 2.5}}
                    selected={tab === 'book'}
                    onPress={() => this.pressTabHandle('book')}>
                    <View>
                        <Text>图书</Text>
                    </View>
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="我的"
                    icon={{uri: Icons.user, scale: 2.5}}
                    selected={tab === 'user'}
                    onPress={() => this.pressTabHandle('user')}>
                    <View>
                        <Text>我的</Text>
                    </View>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('reactNativeDouban', () => reactNativeDouban);
