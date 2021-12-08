import React, {useContext} from 'react';
import {ReactComponent as Cross} from '../assets/x-circle.svg'
import './DeletePopup.scss'
import LinkContext from "../context";

function DeletePopup(props) {
    const {deleteItem, setShowDelete, deletingItem} = useContext(LinkContext)
    return (
        <div className='popup-main-container'>
            <div className='popup-header'><span>Remove Link</span> <Cross onClick={() => setShowDelete(false)}
                                                                          style={{padding: '1.5rem'}}/></div>
            <div className={'popup-body'}>Do you want to remove:
                <div>{deletingItem.name}</div>
            </div>
            <div className={'popup-footer'}>
                <button onClick={() => deleteItem(deletingItem.index)}>OK</button>
                <button onClick={() => setShowDelete(false)}>Cancel</button>
            </div>
        </div>
    );
}

export default DeletePopup;