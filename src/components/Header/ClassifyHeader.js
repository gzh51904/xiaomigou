import React from 'react';
import './ClassifyHeader.scss'
export default class ClassifyHeader extends React.Component {
    render() {
        return (
            <header className="header">
                <a className="goHome"></a>
                <div className="headerTitle">
                    {/* <input  /> */}
                    分类
                </div>
                <a className="header_more">

                </a>

            </header>
        );
    }
};

