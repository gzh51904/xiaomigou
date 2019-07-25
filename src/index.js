import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'weui'
import { HashRouter as Router, Route, Redirect, Switch, withRouter, router } from "react-router-dom";

/*  */
import Home from './pages/Home/Home'
import Classify from './pages/Classify/Classify'
import Collect from './pages/Collect/Collect'
import Free from './pages/Free/Free'
import Mile from './pages/Mile/Mile'
import Login from './pages/Mile/user/login'
import Reg from './pages/Mile/user/reg'

import zhCN from 'antd/es/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import axios from 'axios'

moment.locale('zh-cn');

// 请求拦截：发送token
axios.interceptors.request.use(config=>{
    // 每次利用axios发起的请求，都会进入到这里
    // 添加token
    let token = localStorage.getItem('Authorization');
    if(config.url != '/login'){
      config.headers.Authorization = token;
    }
    return config;
  }, error=>{
    // 请求失败进入这个回调
    return Promise.reject(error);
  });
  
//   // 响应拦截：校验token
//   axios.interceptors.response.use(res=>{
//     // 判断token是否校验成功
//     // 校验不成功：过期或被伪造
//     if(axios && res.data.code == 401){
//         console.log(Route,Router);
        
//     //   router.replace({
//     //     path:'/login',
//     //     query:{
//     //       redirectTo:router.currentRoute.fullPath
//     //     }
//     //   })
//     }
//     return res;
//   }, error=>{
//       // Do something with response error
//       return Promise.reject(error);
//   });




ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/free' component={Free} />
            <Route path='/classify' component={Classify} />
            <Route path='/collect' component={Collect}/>
            <Route path='/mile' component={Mile} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
        </Switch>
    </Router>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
