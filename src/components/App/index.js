import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Statistics from '../Statistics';
import Login from '../Login';
import Navigation from '../Navigation';
import Loader from '../Loader';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <BrowserRouter>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <Navigation />
                    <Routes>
                        <Route path='/home' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/statistics' element={<Statistics />} />
                        <Route path='/login' element={<Login />} />
                    </Routes>
                </>
            )}
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;