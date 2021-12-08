import React, {useState, createContext} from 'react'

export const LinkContext = createContext();

export const LinkProvider = (props) => {
    const [listItems, setListItems] = useState([]);
    const [showDelete, setShowDelete] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const [pages, setPages] = useState('')
    const [deletingItem, setDeletingItem] = useState('')
    const [showToaster, setShowToaster] = useState(false)

    function showDeletePopup(item, index) {
        setShowDelete(true)
        setDeletingItem({index: index, name: item.name})
    }

    function totalPage() {
        setPageNumber((listItems.length % 5))
        const pagesArr = []
        for (let i = 0; i < (listItems.length % 5); i++) {
            pagesArr.push({page: i + 1})
        }
        setPages(pagesArr)
    }

    function pagination(selected) {
        setListItems(listItems.slice(((selected - 1) * 5), (selected - 1) * 5 + 5))
    }


    function deleteItem(indexToDelete) {
        setListItems(listItems.filter((obj, index) => index !== indexToDelete))
        localStorage.setItem('listStorageVoteList', JSON.stringify(listItems.filter((obj, index) => index !== indexToDelete)))
        setShowDelete(false)
        setShowToaster(true)
        setTimeout(() => setShowToaster(false), 5000)
    }

    function upVote(indexToUpVote) {
        setListItems(listItems.map((obj, index) => {
            if (index === indexToUpVote) {
                obj.numberofVotes++;
            }
            return obj;
        }))
        localStorage.setItem('listStorageVoteList', JSON.stringify(listItems))
    }

    function downVote(indexToUpVote) {
        setListItems(listItems.map((obj, index) => {
            if (index === indexToUpVote) {
                obj.numberofVotes--;
            }
            return obj;
        }))
        localStorage.setItem('listStorageVoteList', JSON.stringify(listItems))
    }

    function orderByLessVoted() {
        setListItems([...listItems.sort((a, b) => a.numberofVotes > b.numberofVotes ? 1 : -1)])
    }

    function orderByMostVoted() {
        setListItems([...listItems.sort((a, b) => a.numberofVotes < b.numberofVotes ? 1 : -1)])
    }

    function addNewLink(obj) {
        listItems.push(obj)
        setListItems(listItems)
        localStorage.setItem('listStorageVoteList', JSON.stringify(listItems))
    }

    const value = {
        listItems,
        deleteItem,
        upVote,
        downVote,
        orderByLessVoted,
        orderByMostVoted,
        addNewLink,
        showDelete,
        setShowDelete,
        showDeletePopup,
        totalPage,
        pages,
        pagination,
        setListItems,
        setDeletingItem,
        deletingItem,
        showToaster
    }
    return <LinkContext.Provider value={value}>{props.children}</LinkContext.Provider>
}

export default LinkContext;
