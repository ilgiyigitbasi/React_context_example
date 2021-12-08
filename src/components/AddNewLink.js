import React, {useContext, useState} from 'react';
import LinkContext from "../context";
import './AddNewLink.scss'
import {ReactComponent as Back} from '../assets/arrow-left.svg'

function AddNewLink(props) {
    const {addNewLink} = useContext(LinkContext)
    const [linkName, setLinkName] = useState('')
    const [linkUrl, setLinkUrl] = useState('')

    function add(e) {
        if (e.target.name === 'name') {
            setLinkName(e.target.value)
        } else {
            setLinkUrl(e.target.value)
        }
    }

    function submit() {
        let obj = {numberofVotes: 0, name: linkName, url: linkUrl}
        addNewLink(obj)
        props.back()
    }

    return (
        <div className={'add-new-link-container'}>
            <div className='add-new-link-container__back' onClick={props.back}><Back style={{marginRight: '1rem'}}/>Return
                to List
            </div>
            <div className='add-new-link-container__title'>Add New Link</div>
            <div>
                <div>Link Name:</div>
                <input value={linkName} className='add-new-link-container__input' onChange={(e) => add(e)} name={'name'}
                       type="text"/>
            </div>
            <div>
                <div>Link URL:</div>
                <input value={linkUrl} className={'add-new-link-container__input'} onChange={(e) => add(e)} name={'url'}
                       type="text"/>
            </div>
            <button className='add-new-link-container__button' onClick={() => submit()}>Add</button>
        </div>
    );
}

export default AddNewLink;