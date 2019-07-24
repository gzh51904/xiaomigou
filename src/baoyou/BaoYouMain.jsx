import React from 'react'

import { Row, Col,Button } from 'antd';
// import 'antd/dist/antd.css';

function BaoYouMain(){
    
    return <main>
        <nav>  
            <div className="navLeft">
                <Row>
                    <Col span={12}> <Button type="link">Link</Button></Col>
                    <Col span={12}>2</Col>
                </Row>
            </div>  
            <div className="navRight">
                <Row>
                <Col span={6}>3</Col>
                <Col span={6}>4</Col>
                <Col span={6}>5</Col>
                <Col span={6}>6</Col>
                </Row>
            </div>  
        </nav>
    </main>
}
export default BaoYouMain