import React, { Component } from 'react';

let _navigator = undefined,
    _route = undefined;


/**
 * 设置navigator.
 * @param  {[Navigator]} navigator [navigator]
 */
export const setNavigator = navigator => {
    return _navigator = navigator;
};

/**
 * 获取navigator.
 * @return {[Navigator]} [avigator]
 */
export const getNavigator = () => {
    return _navigator;
};

/**
 * 设置路由.
 * @param  {[Route]} route [路由]
 */
export const setRoute = route => {
    return _route = route;
};

/**
 * 获取路由.
 * @return {[Route]} [路由]
 */
export const getRoute = () => {
    return _route;
};

/**
 * 获取navigator渲染组件.
 * @param  {[Route]}     route     [路由]
 * @param  {[Navigator]} navigator [Navigator]
 * @return {[Component]}           [组件]
 */
export const getComponent = (route, navigator) => {
    let Component = route.component;

    setNavigator(navigator);
    setRoute(route);
    return <Component {...route.params}/>;
};

