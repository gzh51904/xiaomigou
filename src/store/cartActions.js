/* 添加商品 */
export const ADD_TO_CART = 'ADD_TO_CART'
/* 删除商品 */
export const REM_GOODS = 'REM_GOODS'
/* 修改商品 */
export const ALTER_GOODS_QTY = 'ALTER_GOODS_QTY'


export function createAdd2careAction(goods) {
    return {
        type: ADD_TO_CART,
        payload: goods
    }
}

export function createRemGoodsAction(id) {
    return {
        type: REM_GOODS,
        payload: id
    }
}

export function createALTER_QTYAction({id,qty}) {
    return {
        type: ALTER_GOODS_QTY,
        payload: {id,qty}
    }
}


/* 
引用处需要用方法  
import { bindActionCreators } from 'redux';
需要将方法默认导出(default)
 */
export default {
    createAdd2careAction,
    createRemGoodsAction,
    createALTER_QTYAction
}