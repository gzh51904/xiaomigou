import React from 'react'
import './GoodsList.css'
// import img from ''
class GoodsList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="glist" onClick={this.props.onClick}>
                {/* {console.log(this.props.data)} */}
                <div className="img_box">
                    <img src={this.props.data.pic} />
                </div>
                <ul className="teset_box">
                    <li><h3>{this.props.data.dtitle}</h3></li>
                    <li className="list_2">
                        <span>天猫价 ¥{this.props.data.yuanjia}</span>
                        <strong>已经售<i>{(this.props.data.xiaoliang / 10000).toFixed(2) + '万'}</i>件</strong>
                    </li>
                    <li className="list_3">
                        <span>劵后价 $<i>{this.props.data.quanJine}</i></span>
                        <img></img>
                    </li>
                    <p></p>
                </ul>
            </div>
        )
    }

}

export default GoodsList