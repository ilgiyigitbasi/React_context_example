import React, {useContext, useState} from 'react';
import './ListItem.scss'
import {ReactComponent as Delete} from "../assets/x-circle.svg";
import {ReactComponent as UpVote} from "../assets/arrow-up.svg";
import {ReactComponent as DownVote} from "../assets/arrow-down.svg";
import LinkContext from "../context";


function ListItem(props) {
    const {upVote, downVote, showDeletePopup} = useContext(LinkContext)
    const [hover, setHover] = useState(false)
    return (
        <div className='container'>
            <div className={'row listItem align-center'} onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}>
                {hover &&
                <div onClick={() => showDeletePopup(props.item, props.index)} className='listItem__delete-icon'><Delete/></div>}
                <div className={'voteNumber'} >{props.item.numberofVotes}</div>
                <div className={'voteDetails'}>
                    <div>
                        <div className={'voteDetails__name'}>{props.item.name}</div>
                        <div className={'voteDetails__url'}>({props.item.url})</div>
                    </div>
                    <div className={'row justify-between align-center'}>
                        <div onClick={() => upVote(props.index)} className={'vote-button'}>Upvote<UpVote/>
                        </div>
                        <div onClick={() => downVote(props.index)}
                             className={'vote-button'}>DownVote<DownVote/></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListItem;