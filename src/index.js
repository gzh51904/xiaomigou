import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'weui'
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";

/*  */
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify'
import Collect from './pages/Collect/Collect'
import Free from './pages/Free/Free'
import Mile from './pages/Mile/Mile'
import GoodsDetails from './pages/GoodsDetails/GoodsDetails'


import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

moment.locale('zh-cn');

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/free' component={Free} />
            <Route path='/classify' component={Classify} />
            <Route path='/collect' component={Collect} />
            {/* <Switch> */}
                <Route path='/goodsdetails/:goodsid/:id' component={GoodsDetails} />
            {/* </Switch> */}
            <Route path='/mile' component={Mile} />
        </Switch>
    </Router>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
