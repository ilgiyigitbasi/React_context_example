import React, {useState} from 'react';
import NewLinkButton from "./NewLinkButton";
import './VoteList.scss'
import MainList from "./MainList";
import AddNewLink from "./AddNewLink";

function VoteList(props) {
    const [showNewLink, setShowNewLink] = useState(false)
    return (
        <div className={'main-container'}>
            {!showNewLink ? <><NewLinkButton add={()=> setShowNewLink(true)}/>
                <MainList/></> : <AddNewLink back={() => setShowNewLink(false)}/>}
        </div>

    );
}

export default VoteList;