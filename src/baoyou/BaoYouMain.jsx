import React from 'react'

import { Row, Col } from 'antd';

function BaoYouMain(){
    
    return <main>
        <nav>  
            <div className="navLeft">
                <Row>
                    <Col span={12}/>
                    <Col span={12}/>
                </Row>
            </div>  
            <div className="navRight">
                <Row>
                <Col span={6}/>
                <Col span={6}/>
                <Col span={6}/>
                <Col span={6}/>
                </Row>
            </div>  
        </nav>
    </main>
}
export default BaoYouMain