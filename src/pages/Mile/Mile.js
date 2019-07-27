import React from 'react'
import Header from '../../components/Header/HomeHeader'
import Tabbar from '../../components/Tabbar/Tabbar'

import {Switch,Route} from 'react-router-dom'

import User from './user'
import MineList from './mineList'
class Mile extends React.Component {
    render() {
        return (
            <div className="layout">
                <User></User>
                <MineList></MineList>
                <Tabbar/>
            </div>
            
        )
    }
}

export default Mile