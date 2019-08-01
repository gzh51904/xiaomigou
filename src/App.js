import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify'
import Collect from './pages/Collect/Collect'
import BaoYou from './pages/BaoYou/index.jsx'
import Mile from './pages/Mile/Mile'
import GoodsDetails from './pages/GoodsDetails/GoodsDetails'
import GoodsPage from './components/GoodsPage/GoodsPage'
import Login from './pages/Mile/user/login'
import Reg from './pages/Mile/user/reg'


import 'antd/dist/antd.css';
import './css/base.css'

//全局引入swiper样式
import 'swiper/dist/css/swiper.min.css'

import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios'


import {Provider} from 'react-redux'
import store from './store'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/baoyou' component={BaoYou} />
          <Route path='/classify' component={Classify} />
          <Route path='/collect' component={Collect} />
          <Route path='/goodsdetails/:goodsid/:id' component={GoodsDetails} />
          <Route path='/goodspage' component={GoodsPage} />
          <Route path='/mile' component={Mile} />
          <Route path='/login' component={Login} />
          <Route path='/reg' component={Reg} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
