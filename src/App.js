import React from 'react';
import Header from './components/Header';
import Content from "./components/Content";

const App = () => {

    const api = {
        key: '67b6be7208461828ada5f8350f08c711',
        base: 'https://api.openweathermap.org/data/2.5'
    }

    return (
        <>
            <Header/>
            <Content/>
        </>
    );
};

export default App;