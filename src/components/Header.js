import React from 'react';
import './Header.scss'
import '../App.scss'

function Header(props) {
    return (
        <div className='header row justify-between align-center'>
            <div className={'logo'}>hepsiburada</div>
            <div>LinkVOTE Challenge</div>
        </div>
    );
}

export default Header;