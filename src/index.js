import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// import {connent} from 'react-redux'

import 'weui'
import { HashRouter as Router, Route, Redirect, Switch, withRouter } from "react-router-dom";

//引入样式
import 'antd/dist/antd.css';
import './css/base.css'

//全局引入swiper样式
import 'swiper/dist/css/swiper.min.css'
/*  */
// /*  */›
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify'
import Collect from './pages/Collect/Collect'
import BaoYou from './pages/BaoYou/index.jsx'
import Mile from './pages/Mile/Mile'
import GoodsDetails from './pages/GoodsDetails/GoodsDetails'
import GoodsPage from './components/GoodsPage/GoodsPage'

import Login from './pages/Mile/user/login'
import Reg from './pages/Mile/user/reg'
import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import axios from 'axios'


import { Provider } from 'react-redux';
import store from '../src/store/index.js'


moment.locale('zh-cn');

// 请求拦截：发送token
axios.interceptors.request.use((config)=>{
    // 每次利用axios发起的请求，都会进入到这里
    // 添加token
    let token = localStorage.getItem('Authorization');
        if(config.url != 'http://localhost:1904/api/find/login'){
          config.headers.Authorization = token;
        }
    return config;
  }, error=>{
    // 请求失败进入这个回调
    return Promise.reject(error);
  });

  // 响应拦截：校验token
  axios.interceptors.response.use(res=>{

    // 判断token是否校验成功
    // 校验不成功：过期或被伪造
    if(res.data.msg == "unauthorized" && res.data.code == 401){
      console.log(res);
    localStorage.removeItem("Authorization")
    }
    // console.log(res);
    
    return res;
  }, error=>{
      // Do something with response error
      return Promise.reject(error);
  });




ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/baoyou' component={BaoYou} />
        <Route path='/classify' component={Classify} />
        <Route path='/collect' component={Collect} />
        {/* <Switch> */}
        <Route path='/goodsdetails/:goodsid/:id' component={GoodsDetails} />
        <Route path='/goodspage' component={GoodsPage} />
        {/* </Switch> */}
        <Route path='/mile' component={Mile} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root'));

serviceWorker.unregister();
