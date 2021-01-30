import React from 'react';

import logo from './logo.svg';
import './App.css';

import Count from './Components/Count';

// 1. Las clases se llaman className
// 2. TODAS las etiquetas tienen que cerrarse
// 3. Solo podemos devolver un elemento padre
const App = () => {
    const renderCounts = () => {
        return [1, 2, 3, 4, 5, 6].map(number => {
            return <Count name={number} />;
        });
    };

    return <div>{renderCounts()}</div>;
};

export default App;
