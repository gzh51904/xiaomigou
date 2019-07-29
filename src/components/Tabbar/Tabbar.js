import React from 'react'
import { NavLink} from 'react-router-dom'
import './Tabbar.css'

// 高亮的样式，表示我们在哪个导航下
const selectedStyle = {
    backgroundColor: 'white',
    color: 'red'
  }

class Tabbar extends React.Component {
    constructor() {
        super();
        this.state = {
            tabs: [{
                title: '首页',
                name: 'Home',
                path: '/home',
                img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2GCzpnVkoBKNjSZFkXXb4tFXa-2053469401.png',
                activeimg: 'https://img.alicdn.com/imgextra/i4/2053469401/TB24KbjnZj_B1NjSZFHXXaDWpXa-2053469401.png',
            }, {
                title: '9.9包邮',
                name: 'BaoYou',
                path: '/baoyou',
                img: 'https://img.alicdn.com/imgextra/i4/2053469401/TB23GLTn77mBKNjSZFyXXbydFXa-2053469401.png',
                activeimg: 'https://img.alicdn.com/imgextra/i4/2053469401/TB2kBbrn_qWBKNjSZFAXXanSpXa-2053469401.png',
            }, {
                title: '分类',
                name: 'Classify',
                path: '/classify',
                img: 'https://img.alicdn.com/imgextra/i2/2053469401/TB2nLTXn7omBKNjSZFqXXXtqVXa-2053469401.png',
                activeimg: 'https://img.alicdn.com/imgextra/i1/2053469401/TB2y4_qnVkoBKNjSZFkXXb4tFXa-2053469401.png'
            }, {
                title: '收藏',
                name: 'Collect',
                path: '/collect',
                img: 'https://img.alicdn.com/imgextra/i1/2053469401/TB26bEfnQZmBKNjSZPiXXXFNVXa-2053469401.png',
                activeimg: 'https://img.alicdn.com/imgextra/i2/2053469401/TB2b3cKnL6TBKNjSZJiXXbKVFXa-2053469401.png'
            }, {
                title: '我的',
                name: 'Mile',
                path: '/mile',
                img: 'https://img.alicdn.com/imgextra/i3/2053469401/TB2WXrhqFkoBKNjSZFkXXb4tFXa-2053469401.png',
                activeimg: 'https://img.alicdn.com/imgextra/i2/2053469401/TB21aHkqRsmBKNjSZFFXXcT9VXa-2053469401.png'
            }],
            currentIndex:0
        }
        // this.goto = this.goto.bind(this);
    }

    

    render() {
        return (
            <div className="weui-tabbar" style={{height:'50px'}}>
                {
                    this.state.tabs.map(item => {
                        return (
                            <NavLink className="weui-tabbar__item" key={item.title} to={item.path} activeStyle = {selectedStyle}>
                                <div className="weui-tabbar__icon">
                                    <img src={item.img} />
                                </div>
                                <p className="weui-tabbar__label" >{item.title}</p>
                            </NavLink>
                            // <div className="weui-tabbar__item weui-bar__item_on" key={item.title} onClick={this.goto.bind(this, item.path)}>
                            //     <div className="weui-tabbar__icon">
                            //         <img src={item.img} />
                            //     </div>
                            //     <p className="weui-tabbar__label" style={{ color: '#949495' }}>{item.title}</p>
                            // </div>
                        )
                    })
                }
            </div>
        )
        
    }
}
export default Tabbar
