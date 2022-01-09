import React from 'react';
import sunny from '../resources/assets/sunny-weather.png'

const Content = () => {

    return (
        <>
            <div className='main-container'>
                <div className='content-container-grid-flow-column'>
                    <div className='grid-flow-row'>
                        <span className='large-bold-font'>Perg Wetter</span>
                        <span className='normal-font'>Stand 10:38 CET</span>
                        <span className='large-bold-cursive-font'>4°C</span>
                        <span className='normal-bold-font'>Bedeckt Regen</span>
                    </div>
                    <div className='grid-flow-row white-border'>
                        <img src={sunny} alt={'Weather-Icon'} className='weather-icon'/>
                        <span className='normal-font'>Fühlt sich an wie 5°C</span>
                    </div>
                </div>

                <div className='content-container-grid-flow-row last-element-margin'>
                    <span className='medium-bold-font medium-padding'>Weitere Informationen</span>
                    <div className='grid-flow-column'>
                        <div className='flow-left grid-flow-row'>
                            <span className='normal-bold-font'>Max/Min</span>
                            <span className='normal-bold-font'>Luftfeuchte</span>
                            <span className='normal-bold-font'>Luftdruck</span>
                            <span className='normal-bold-font'>Sichtweite</span>
                        </div>
                        <div className='flow-right grid-flow-row'>
                            <span className='normal-font'>8°C/2°C</span>
                            <span className='normal-font'>73%</span>
                            <span className='normal-font'>1002,4 mb</span>
                            <span className='normal-font'>11,27 km</span>
                        </div>
                    </div>
                    <div className='grid-flow-column'>
                        <div className='flow-left grid-flow-row'>
                            <span className='normal-bold-font'>Wind</span>
                            <span className='normal-bold-font'>Taupunkt</span>
                            <span className='normal-bold-font'>UV-Index</span>
                            <span className='normal-bold-font'>Mondphase</span>
                        </div>
                        <div className='flow-right grid-flow-row'>
                            <span className='normal-font'>23 km/h</span>
                            <span className='normal-font'>3°C</span>
                            <span className='normal-font'>0 von 10</span>
                            <span className='normal-font'>zunehmender Sichelmond</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;