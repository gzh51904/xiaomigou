import React,{Component} from 'react'
 import './head.css'

 import {withRouter} from 'react-router-dom'

class Head extends Component{
    constructor(){
        super();
        this.goto = this.goto.bind(this)
    }
    goto(){
        this.props.history.goBack()
    }
    render(){
        return (
            <div className="header_pr">
                <header className="icon_header">
                   <a className="iconfont icon-zuojiantou" onClick={this.goto}></a>
                   <div></div>
                </header>
            </div>
        )
    }
}
Head = withRouter(Head)
export default Head