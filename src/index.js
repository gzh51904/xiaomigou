import React from 'react';
import ReactDOM from 'react-dom';

//引入路由模式
import {HashRouter} from 'react-router-dom'
// import App from './App.js';
import BaoYou from './baoyou/index'

//引入样式
import './css/base.css'

//引入react-redux
// import {Provider} from 'react-redux'


ReactDOM.render(
            <HashRouter>
                 {/* <App /> */}
                 <BaoYou/>
            </HashRouter>
           , 
            document.getElementById('root')
            );


