import React from 'react';
import './Header.css'
export default class CollectHeader extends React.Component {
    render() {
        return (
            <header className='header_sc'>
            <div style={{height:"100%"}}>{this.props.title}</div>
            <a className="iconfont icon-zuojiantou" ui-back=""></a>
            <a className="text-b">编辑</a>
            </header>
        );
    }
};