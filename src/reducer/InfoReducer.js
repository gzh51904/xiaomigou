import React from 'react'
import { ADD_INFO, REREVISON_INFO, ADD_GOODS_DATA, REREVISON_GOODS_DATA } from '../store/InfoActios.js'

//初始化reducer
let initState = {
    info: {},
    goodsData: {},
}


// 设置默认值
let InfoReducer = (state = initState, action) => {
    // console.log(action);
    switch (action.type) {
        case ADD_INFO:
            console.log(action);
            return {
                ...state,
                info: action.payload
            }
        case REREVISON_INFO:
            return {
                ...state,
                info: action.payload
            }
        case ADD_GOODS_DATA:
            return {
                ...state,
                goodsData: action.payload
            }
        case REREVISON_GOODS_DATA:
            return {
                ...state,
                goodsData: action.payload
            }
        default:
            return state
    }

}

export default InfoReducer