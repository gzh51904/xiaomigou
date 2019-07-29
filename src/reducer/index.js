import React from 'react'

//初始化reducer
let initState = {
    CarGoodsList: []
}

// 设置默认值
let reduer = (state=initState, action) => {
    switch (action.type) {
        /* 添加商品 */
        case 'ADD_TO_CART':
            console.log('action:',action);
            console.log('state:',state);
            return {
                ...state,
                CarGoodsList: [action.payload, ...state.CarGoodsList]
            }
        /* 删除商品 */
        case 'REM_GOODS':
            return {
                ...state,
                CarGoodsList: state.CarGoodsList.filter(item => item.id != action.id)
            }
        /* 修改商品 */
        case 'ALTER_GOODS_QTY':
            let data = state.CarGoodsList.map(item => {
                if (item.id == action.payload.id) {
                    item.qty = action.payload.qty
                }
                return item;
            })
            return {
                ...state,
                CarGoodsList: data
            }

        default:
            return state
    }

}

export default reduer