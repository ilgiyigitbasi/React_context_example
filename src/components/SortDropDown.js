import React, {useContext} from 'react';
import LinkContext from "../context";
import './SortDropDown.scss'

function SortDropDown(props) {
    const {orderByLessVoted, orderByMostVoted} = useContext(LinkContext)

    function order(e) {
        if (e.target.value === "most") {
            return orderByMostVoted()
        } else {
            return orderByLessVoted()
        }
    }
    return (
        <div className='drop-down'>
            <select className='drop-down__select' onChange={(e) => order(e)}>
                <option value="">
                    Order By
                </option>
                <option value="most">Most Voted (Z->A)</option>
                <option value="less">Less Voted (A->Z)</option>
            </select>
        </div>
    );
}

export default SortDropDown;