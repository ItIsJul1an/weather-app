import React, {useRef} from 'react';
import logo from '../resources/assets/weather-app-icon.svg'
import search_icon from '../resources/assets/search-icon.svg'

const Header = () => {

    const inputRef = useRef()

    return (
        <>
            <div className='main-container'>
                <div className='app-info-container'>
                    <img src={logo} alt={'App-Logo'} className='app-logo'/>
                    <label className='app-label'>Wetter App</label>
                </div>
                <div className='search-container'>
                    <input type='text' ref={inputRef} placeholder='Stadtnamen eingeben ...' className='input-field'/>
                    <img src={search_icon} alt={'Search-Icon'} className='search-icon'/>
                </div>
            </div>
        </>
    );
};

export default Header;