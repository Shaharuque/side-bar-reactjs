import React, { useState } from 'react';
import './sidemenu.css'
import logo from '../assets/logo/webscript.png'
import user from '../assets/user.jpg'
import MenuItem from './subMenu/MenuItem';


const SideMenu = () => {
    const [inactive, setInactive] = useState(false)


    return (
        <div className={`side-menu ${inactive ? "inactive" : ""}`}>
            <div className='top-section'>
                <div className='logo'>
                    <img src={logo} alt="" />
                </div>
                <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
                    {inactive ? <i class="bi bi-arrow-right-square-fill"></i> : <i class="bi bi-arrow-left-square-fill"></i>}
                </div>
            </div>

            <div className='search-controller'>
                <button className='search-btn'>
                    <i class="bi bi-search"></i>
                </button>
                <input type="text" placeholder='search' />
            </div>

            <div className='divider'></div>

            <div className="main-menu">
                <ul>
                    <li>
                        <a className='menu-item' >
                            <div className='menu-icon'>
                                <i class="bi bi-speedometer2"></i>
                            </div>
                            <span>Dashboard</span>
                        </a>
                    </li>

                   <MenuItem name={'Design'} subMenus={[{name:'Courses'},{name:'Graphics'}]}></MenuItem>

                    <li>
                        <a className='menu-item' >
                            <div className='menu-icon'>
                                <i class="bi bi-bar-chart"></i>
                            </div>
                            <span>Charts</span>
                        </a>
                    </li>

                    <li>
                        <a className='menu-item' >
                            <div className='menu-icon'>
                                <i class="bi bi-app-indicator"></i>
                            </div>
                            <span>Profits</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div className='side-menu-footer'>
                <div className="avatar">
                    <img src={user} alt="" />
                </div>
                <div className="user-info">
                    <h4>Adward Oma</h4>
                    <p>adward444@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;