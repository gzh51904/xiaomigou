import React from 'react';
import './Header.css'
 class CollectHeader extends React.Component {
    constructor(){
        super();
        this.state ={
            edit:"编辑"
        }
    }
   edit = (a)=>{
            let edit = ''
        if(a == "完成"){
             edit = "编辑"
        }else if(a=="编辑"){
             edit = "完成"
        }
        this.setState({
            edit
        })
        this.props.name(a)
    }
    render() {
        let {edit} = this.state
        return (
            <header className='header_sc'>
            <div style={{height:"100%"}}>{this.props.title}</div>
            <a className="iconfont icon-zuojiantou" ui-back=""></a>
            <p className="text-b" onClick={this.edit.bind(this,edit)}>{edit}</p>
            </header>
        );
    }
};
export default CollectHeader