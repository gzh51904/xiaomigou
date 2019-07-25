import React,{Component} from 'react'

import { Form, Icon, Input, Button, Checkbox } from 'antd';

import Head from '../../components/head'

import {withRouter} from 'react-router-dom'

class Reg extends Component{
    constructor(){
        super();
        this.goto = this.goto.bind(this)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
      goto(){
      this.props.history.push('Reg')
        
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Head name='登录'></Head>
                <div>
                <h1 className="reg-top"></h1>
                <Form onSubmit={this.handleSubmit} className="login-form">
             <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: '请输入手机号码!' }],
                })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="手机号码"
              style={{ marginLeft:"35px",width: '85%', }}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
              style={{ marginLeft:"35px",width: '85%', }}
            />,
          )}
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" className="login-form-button" style={{width:"100%"}}>
          登录
          </Button>
          <p>还没有账号？立即 <a onClick={this.goto}>注册</a></p>
        </Form.Item>
             </Form>
                </div>
            </div>
        )
    }
}
    Reg = withRouter(Reg)

 Reg = Form.create({ name: 'normal_login' })(Reg);
export default Reg