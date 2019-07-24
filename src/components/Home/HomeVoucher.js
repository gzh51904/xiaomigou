import React from 'react'
import './HomeVoucher.css'

class HomeVoucher extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="home_oucher">
                <div className="home_ant_voucher ">
                    <h3 className="voucher_h3">
                        大家都在领  <span>906,322</span><strong>次实时领劵</strong>
                    </h3>
                    <ul style={{width:'100%'}}>
                        <li>
                            {/* <img src={} /> */}
                            <h3>超值价!诺必行...</h3>
                            <p className="money">$9.99 <del>¥19.99</del></p>
                            <p className="progress"></p>
                        </li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default HomeVoucher