import React from 'react';
import './NewLinkButton.scss'
import {ReactComponent as Plus} from '../assets/plus.svg'

function NewLinkButton(props) {
    return (
        <div className='row align-center divider newLink'>
            <button onClick={props.add} className='newLink__button '>
                <Plus style={{width: '2rem', height: '2rem'}}/>
            </button>
            <div>SUBMIT A LINK</div>
        </div>
    );
}

export default NewLinkButton;