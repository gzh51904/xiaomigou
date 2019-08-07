import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import axios from 'axios'

import './user.css'
class User extends Component{
    constructor(){
        super();
        this.state = {
            isLgn : false
        }
        this.user_goto = this.user_goto.bind(this)
    }
    async componentWillMount(){
        let data = await axios.get('http://localhost:19041/api/find/login');
        let {code,msg} = data;
        if(code==401 && msg=="unauthorized"){
            localStorage.removeItem('Authorization')
           this.setState({
               isLgn:false
           })
        }else if(code==1000){
            this.setState({
                isLgn:true
            })
        }
    }
    user_goto(pathname){
        this.props.history.push({
            pathname:pathname,
        })
    }
    render(){
        return (
            <div>
                <div className="user_info">
                    <div className="col-mar-a">
                    <a className="img"><img src="https://cmsstatic.dataoke.com//wap_new/user/images/user_info_tx.png?v=201907171617"/></a>
                    <div className="info">
                        {
                            this.state.isLgn ?
                          <p className='name'>
                              <a className='user_a'>已登录</a>
                          </p>  :  <>
                          <p className="name">
                          <a className="user_a" onClick={this.user_goto.bind(this,"Login")}>登录</a>
                          /
                          <a className="user_a" onClick={this.user_goto.bind(this,"Reg")}>注册</a>
                      </p>
                          </>
                        }
                        
                    </div>
                </div>
                <a className="icon-shez setup">设置</a>
                </div>
            </div>
        )
    }
}
User = withRouter(User)
export default User