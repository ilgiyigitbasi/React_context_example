import React, {useContext} from 'react';
import ListItem from "./ListItem";
import LinkContext from "../context";
import SortDropDown from "./SortDropDown";
import './MainList.scss'

function MainList(props) {
    const {listItems} = useContext(LinkContext)
    return (
        <div>
            {listItems?.length > 0 && <SortDropDown/>}
            {listItems?.length > 0 ? listItems.map((item, index) =>
                    (
                        <ListItem
                            item={item}
                            index={index}
                            key={index}
                        />
                    ))
                : <div className='no-content'>
                    There are no Items in your list to add please use SUBMIT A LINK button above
                </div>}
        </div>
    );
}

export default MainList;