import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './components/header/header.module';
import HomePage from "./pages/homePage.component";

export default function App() {

    const [state, setState] = useState({});

    return (
        <div className="App">
        <Header/>
        <HomePage/>
        </div>
    );
}
