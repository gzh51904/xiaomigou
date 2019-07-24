import React from 'react';
import './Header.css'
export default class HomeHeader extends React.Component {
    render() {
        return (
            <header className='header'>
                <input className="home-input" placeholder="输入商品名或粘上宝贝标题搜索" />
            </header>
        );
    }
};