import React from 'react'
/* 添加info */
export const ADD_INFO = 'ADD_INFO'
/* 修改info */
export const REREVISON_INFO = 'REREVISON_INFO'
/* 修改商品数据 */
export const ADD_GOODS_DATA = 'ADD_GOODS_DATA'
/* 修改商品数据 */
export const REREVISON_GOODS_DATA = 'REREVISON_GOODS_DATA'


export function add_info(info) {
    return {
        type: ADD_INFO,
        payload: info
    }
}

export function revision_info(info) {
    return {
        type: REREVISON_INFO,
        payload: info
    }
}

export function revision_goods_data(data) {
    return {
        type: REREVISON_GOODS_DATA,
        payload: data
    }
}

export function add_goods_data(data) {
    return {
        type: ADD_GOODS_DATA,
        payload: data
    }
}