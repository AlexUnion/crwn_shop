import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/header.module';
import HomePage from "./pages/homePage.component";
import Collection from "./pages/collection/collection.component";
import ShopCollection from "./pages/shopCollection/shopCollection.component";

export default function App() {
    return (
        <div className="App">
        <Header/>
        <Switch>
            <Route path="/shop/:collection" component={Collection}/>
            <Route path="/shop" component={ShopCollection}/>
            <Route path="/" component={HomePage}/>
        </Switch>
        </div>
    );
}
