import React, {useState} from "react";
import './Dropdown.sass'

import exit from './img/exit.png'
import settings from './img/settings.png'
import ask from './img/ask.png'
import down from './img/down.png'
const UserMenu = ()=>{
    const [isToggle, setToggle] = useState(false);
   if(isToggle){
      return(
          <div className='Choice'>
          <div className='UserMenu' onClick={()=>setToggle(false)}><p className="name">Егорьичев И.А.</p> <img src={down} alt=""/></div>
           <div className='Menu'>
               <button className='Menu-btn'><img src={settings}  className='icon' alt="settings-icon"/>Настройки</button>
               <button className='Menu-btn'><img src={ask} className='icon' alt="ask-icon"/>Помощь</button>
               <button className='Menu-btn'><img src={exit} className='icon' alt="exit-icon"/>Выйти из системы</button>
           </div>
          </div>
      )
   }
   else{
     return(  <div className='UserMenu' onClick={()=>setToggle(true)}><p className="name">Егорьичев И.А.</p> <img src={down} alt=""/></div>)
   }
}
export default UserMenu