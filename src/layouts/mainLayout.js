import React, {useContext, useEffect} from 'react';
import Header from "../components/Header";
import VoteList from "../components/VoteList";
import './mainlayout.scss'
import LinkContext from "../context";
import DeletePopup from "../components/DeletePopup";
import Pagination from "../components/Pagination";
import Toaster from "../components/Toaster";

function MainLayout(props) {
    const {showDelete, setShowDelete, setListItems, listItems, showToaster, totalPage} = useContext(LinkContext)
    useEffect(() => {
        let listStorageVoteList = localStorage.getItem('listStorageVoteList')
        if (listStorageVoteList === null) {
            localStorage.setItem('listStorageVoteList', '[]')
            setListItems([])
        }
        if (listStorageVoteList !== null && JSON.parse(listStorageVoteList).length > 0 && listItems?.length === 0) {
            console.log('here')
            setListItems(JSON.parse(listStorageVoteList))
        }

    })
    return (
        <div data-testid="mainLayout">
            <div className={showDelete && 'popup-background'} onClick={showDelete ? () => setShowDelete(false) : null}/>
            {showDelete && <DeletePopup/>}
            {showToaster && <Toaster/>}
            <Header/>
            <div className='layout-body'>
                <VoteList/>
            </div>
            {/*<Pagination/>*/}
        </div>
    );
}

export default MainLayout;