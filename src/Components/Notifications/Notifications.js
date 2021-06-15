import React , {useState} from "react";


import './Notifications.sass'
import notify from './notification.png'

const Notifications = ()=>{


    return(
        <div className="notify">
        <div className="notification">
        <img src={notify} alt='notification-icon'/>
            <div className='counter'>0</div>
        </div>
        </div>
    )
}

export default Notifications