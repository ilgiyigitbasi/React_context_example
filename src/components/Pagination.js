import React, {useContext} from 'react';
import LinkContext from "../context";

function Pagination(props) {
    const {pages, totalPage} = useContext(LinkContext)
    function selectPage (i) {
        totalPage(i)
    }
    return (
        <div>
            <div>
                <div>arrow</div>
                {pages?.map((i) =>
                    <div onClick={()=>selectPage(i.page)}>{i.page}</div>
                )}
                <div>arrow</div>
            </div>
        </div>
    );
}

export default Pagination;