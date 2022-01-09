import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Content from "./components/Content";
import logo from "./resources/assets/icons/weather-app-icon.svg";
import search_icon from "./resources/assets/icons/search-icon.svg";
import sunny from "./resources/assets/sunny-weather.png";

const api = {
    key: '67b6be7208461828ada5f8350f08c711',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const App = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    const [gradientColor, setGradientColor] = useState('')
    const [headerColor, setHeaderColor] = useState('')
    const [backgroundClass, setBackgroundClass] = useState('app cold')

    const convertUnixToUTC = (time) => {
        return new Date(time * 1000).toLocaleTimeString()
    }

    useEffect(() => {
        if (weather.main && weather.main.temp > 18) {
            setGradientColor('linear-gradient(to bottom, #ff724d, #ff9f4d)')
            setHeaderColor('#ff724d')
            setBackgroundClass('app warm')
        } else {
            setGradientColor('linear-gradient(to bottom, #485c79, #7a8e8a)')
            setHeaderColor('#485c79')
            setBackgroundClass('app cold')
        }
    }, [weather])

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&lang=de&units=metric&APPID=${api.key}`)
                .then(response => response.json())
                .then(result => {
                    setWeather(result);
                    setQuery('')
                });
        }
    }

    return (
        <div className={backgroundClass}>
            <a href='#' className='back-to-top'/>

            <div className='main-container-header' style={{background: headerColor}}>
                <div className='app-info-container'>
                    <img src={logo} alt={'App-Logo'} className='app-logo'/>
                    <label className='app-label'>Wetter App</label>
                </div>
                <div className='search-container'>
                    <input type='text' onChange={event => setQuery(event.target.value)} value={query}
                           onKeyPress={search}
                           placeholder='Stadtnamen eingeben ...'
                           className='input-field normal-font'/>
                    <img src={search_icon} alt={'Search-Icon'} className='search-icon'/>
                </div>
            </div>


            {weather.main ? (
                <div className='main-container'>
                    <div className='content-container-grid-flow-column' style={{background: gradientColor}}>
                        <div className='grid-flow-row'>
                            <span className='large-bold-font'>{weather.name} {weather.sys.country}</span>
                            <span className='normal-font'>Stand {convertUnixToUTC(weather.dt)} CET</span>
                            <span className='large-bold-cursive-font'>{weather.main.temp}°C</span>
                            <span className='normal-bold-font'>{weather.weather[0].description}</span>
                        </div>
                        <div className='grid-flow-row white-border'>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                                 alt={'Weather-Icon'} className='weather-icon'/>
                            <span className='normal-font'>Fühlt sich an wie {weather.main.feels_like}°C</span>
                        </div>
                    </div>
                    <div className='content-container-grid-flow-row last-element-margin'
                         style={{background: gradientColor}}>
                        <span className='medium-bold-font medium-padding'>Weitere Informationen</span>
                        <div className='grid-flow-column'>
                            <div className='flow-left grid-flow-row'>
                                <span className='normal-bold-font'>Max/Min</span>
                                <span className='normal-bold-font'>Luftfeuchte</span>
                                <span className='normal-bold-font'>Luftdruck</span>
                                <span className='normal-bold-font'>PLACEHOLDER</span>
                            </div>
                            <div className='flow-right grid-flow-row'>
                                    <span
                                        className='normal-font'>{weather.main.temp_max}°C/{weather.main.temp_min}°C</span>
                                <span className='normal-font'>{weather.main.humidity}%</span>
                                <span className='normal-font'>{weather.main.pressure} mb</span>
                                <span className='normal-font'>PLACEHOLDER</span>
                            </div>
                        </div>
                        <div className='grid-flow-column'>
                            <div className='flow-left grid-flow-row'>
                                <span className='normal-bold-font'>Wind</span>
                                <span className='normal-bold-font'>Sonnenaufgang</span>
                                <span className='normal-bold-font'>Sonnenuntergang</span>
                                <span className='normal-bold-font'>PLACEHOLDER</span>
                            </div>
                            <div className='flow-right grid-flow-row'>
                                <span className='normal-font'>{weather.wind.speed} km/h</span>
                                <span className='normal-font'>{convertUnixToUTC(weather.sys.sunrise)}</span>
                                <span className='normal-font'>{convertUnixToUTC(weather.sys.sunset)}</span>
                                <span className='normal-font'>PLACEHOLDER</span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='main-container last-element-margin'>
                    <div className='content-container-grid-flow-row'>
                        <span className='medium-bold-center-font'>Um Wetterinformationen einsehen zu können, bitte rechts oben danach suchen und mit "Enter" bestätigen!</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;