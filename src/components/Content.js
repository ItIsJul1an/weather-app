import React from 'react';
import sunny from '../resources/assets/sunny-weather.png'

const Content = () => {

    return (
        <>
            <div className='main-container'>
                <div className='content-container'>
                    <div className='weather-info-container'>
                        <span className='large-bold-font'>Perg Wetter</span>
                        <span className='normal-font'>Stand 10:38 CET</span>
                        <span className='large-bold-cursive-font'>4°C</span>
                        <span className='normal-bold-font'>Bedeckt Regen</span>
                    </div>
                    <div className='weather-icon-container'>
                        <img src={sunny} alt={'Weather-Icon'} className='weather-icon'/>
                        <span className='normal-font'>Fühlt sich an wie 5°C</span>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='weather-info-container'>
                        <span className='large-bold-font'>Perg Wetter</span>
                        <span className='normal-font'>Stand 10:38 CET</span>
                        <span className='large-bold-cursive-font'>4°C</span>
                        <span className='normal-bold-font'>Bedeckt Regen</span>
                    </div>
                    <div className='weather-icon-container'>
                        <img src={sunny} alt={'Weather-Icon'} className='weather-icon'/>
                        <span className='normal-font'>Fühlt sich an wie 5°C</span>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='weather-info-container'>
                        <span className='large-bold-font'>Perg Wetter</span>
                        <span className='normal-font'>Stand 10:38 CET</span>
                        <span className='large-bold-cursive-font'>4°C</span>
                        <span className='normal-bold-font'>Bedeckt Regen</span>
                    </div>
                    <div className='weather-icon-container'>
                        <img src={sunny} alt={'Weather-Icon'} className='weather-icon'/>
                        <span className='normal-font'>Fühlt sich an wie 5°C</span>
                    </div>
                </div>
                <div className='content-container'>
                    <div className='weather-info-container'>
                        <span className='large-bold-font'>Perg Wetter</span>
                        <span className='normal-font'>Stand 10:38 CET</span>
                        <span className='large-bold-cursive-font'>4°C</span>
                        <span className='normal-bold-font'>Bedeckt Regen</span>
                    </div>
                    <div className='weather-icon-container'>
                        <img src={sunny} alt={'Weather-Icon'} className='weather-icon'/>
                        <span className='normal-font'>Fühlt sich an wie 5°C</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;