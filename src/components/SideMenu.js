import React, { useState } from 'react';
import './sidemenu.css'
import logo from '../assets/logo/webscript.png'

const SideMenu = () => {
    const [inactive,setInactive]=useState(false)


    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt=""  />
                </div>
                <div onClick={()=>setInactive(!inactive)} className='toggle-menu-btn'>
                    <i class="bi bi-arrow-left-square-fill"></i>
                </div>
            </div>

            <div className='search-controller'>
                <button className='search-btn'>
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder='search' />
            </div>

            <div className='divider'></div>
        </div>
    );
};

export default SideMenu;