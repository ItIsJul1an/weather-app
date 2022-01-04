import React from 'react';
import Header from './components/Header';
import Content from "./components/Content";

const App = () => {

    const titleText = 'Weather App - by Juan'

    return (
        <>
            <Header titleText={titleText}/>
            <Content/>
        </>
    );
};

export default App;