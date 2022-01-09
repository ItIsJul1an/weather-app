import React from 'react';
import logo from '../resources/assets/icons/weather-app-icon.svg'
import search_icon from '../resources/assets/icons/search-icon.svg'

const Header = () => {

    return (
        <>
            <div className='main-container-header'>
                <div className='app-info-container'>
                    <img src={logo} alt={'App-Logo'} className='app-logo'/>
                    <label className='app-label'>Wetter App</label>
                </div>
                <div className='search-container'>
                    <input type='text' placeholder='Stadtnamen eingeben ...'
                           className='input-field normal-font'/>
                    <img src={search_icon} alt={'Search-Icon'} className='search-icon'/>
                </div>
            </div>
        </>
    );
};

export default Header;