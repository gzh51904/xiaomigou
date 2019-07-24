import React from 'react';
import './Header.css'
export default class ClassifyHeader extends React.Component {
    render() {
        return (
            <header className='header'>{this.props.title}</header>
        );
    }
};