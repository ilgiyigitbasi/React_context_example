import React, {useContext} from 'react';
import './Toaster.scss'
import LinkContext from "../context";
import {ReactComponent as Check} from "../assets/check-circle.svg";

function Toaster(props) {
    const {toasterMessage} = useContext(LinkContext)
    return (

        <div className={'toaster transition'}>
            {toasterMessage}
            <Check style={{marginLeft: '0.2rem'}}/>
        </div>

    );
}

export default Toaster;