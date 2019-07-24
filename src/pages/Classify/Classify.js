import React from 'react'
import ClassifyHeader from '../../components/Header/ClassifyHeader'
import Tabbar from '../../components/Tabbar/Tabbar'
class Classify extends React.Component {
    render() {
        return (
            <div>
                <ClassifyHeader />
                <Tabbar/>
            </div>
        )
    }
}

export default Classify