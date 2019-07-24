import React from 'react'
import './ConTab.css'
class ConTab extends React.Component {
    constructor() {
        super();
        this.state = {
            tab: ['女装', '美食', '男装', '美妆', '居家日用', '鞋品', '数码家电', '母婴', '内衣', '箱包', '配饰', '文娱车品', '家装家纺', '户外运动']
        }
    }

    render() {
        return (
            // <div className="contab">
            //     <span className="span_fl">精选</span>
            //     <div className="span_box">
            //         {/* {
            //             this.state.tab.map(item => {
            //                 return <span className="center-span" key={item}>{item}</span>
            //             })
            //         } */}
            //     </div>
            //     <span className="span_fr">V</span>
            // </div>
            <div className="contab">
                <div className="span_fl">精选</div>
                <div className="span_box">
                    <ul>
                        {
                            this.state.tab.map(item => {
                                return (
                                    <li className="center-span" key={item}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="span_fr">V</div>
            </div>
        )
    }
};


export default ConTab