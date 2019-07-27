import React,{Component} from 'react'

import Head from '../../components/head'

import axios from 'axios'

import './reg.css'

import {
    Form,
    Input,
    Select,
    Row,
    Col,
    Button,
  } from 'antd';

  const { Option } = Select;



class Reg extends Component{
    constructor(){
        super();
        this.state = {
            confirmDirty: false,
            autoCompleteResult: [],
          };
    };
    componentWillMount(){
      console.log(this.props);
      
    }
   handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll( async (err, values) => {
          if (!err) {
          let {data} = await axios.post('http://localhost:1904/api/reg',{values})
            console.log(data, values);
            alert(data)
          }
        });
      };
      validateToNextPassword = (rule, value, callback) => {
        let patrn = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,16}$/
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['password'], { force: true });
        }
        if(patrn.exec(value)){
          callback();
        }else{
          callback("格式错误")
        }
      
      };

      phone = (rule,value,callback) => {
          let patrn = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
          if(patrn.exec(value)){
            callback();
          }else{
            callback("格式错误")
          }
      }
    render(){
        const { getFieldDecorator } = this.props.form;
        const { autoCompleteResult } = this.state;
        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };
          const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 0,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
          };
          const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
          })(
            <Select style={{ width: 69 }}>
              <Option value="86">+86</Option>
              <Option value="87">+87</Option>
            </Select>,
          );
        return (
            <div style={{overflow:'hidden'}}>
                <Head name="注册"></Head>
                <div>
                  <h1 className="reg-top"></h1>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="">
                {getFieldDecorator('phone', {
                rules: [{ required: true, message: '请输入你的手机号码!' },{validator:this.phone}],
                })(<Input addonBefore={prefixSelector} style={{ marginLeft:"35px",width: '85%', }} placeholder="请输入手机号码"/>)}
            </Form.Item>
            <Form.Item label="" hasFeedback>
                 {getFieldDecorator('password', {
                rules: [
                {
                required: true,
                message: ' ',
                 },
                 {
                validator: this.validateToNextPassword,
                },
                ],
                })(<Input.Password style={{ marginLeft:"35px",width: '80%', }} placeholder="请输入密码"/>)}
            </Form.Item>

            <Form.Item label="" extra="">
                <Row gutter={8}>
                 <Col span={12}>
                {getFieldDecorator('captcha', {
                rules: [{ required: true, message: 'Please input the captcha you got!' }],
                })(<Input style={{ marginLeft:"35px",width: '80%', }} placeholder="请输入验证码"/>)}
                </Col>
                <Col span={12}>
                <Button>发送短信</Button>
                </Col>
                </Row>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}  style={{width:"100%"}}>
                <Button type="primary" htmlType="submit" style={{width:"100%"}}>
                注册
                </Button>
            </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}
 Reg = Form.create({ name: 'register' })(Reg);
export default Reg