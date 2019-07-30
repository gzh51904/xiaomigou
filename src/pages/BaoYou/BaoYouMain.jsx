import React,{Component} from 'react'



import Navs from './navs'
import GoodsNav from './goodsNav'
import CommodityList from './commodity_list'
import List from './list'

function BaoYouMain(){
    return <main>
        <Navs></Navs>
        <GoodsNav></GoodsNav>
        <CommodityList></CommodityList>
        <List></List> 
    </main>
}

export default BaoYouMain