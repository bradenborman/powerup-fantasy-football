import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';
import { LandingPage } from '../landingpage/landingpage';
import { Linup } from '../linup/linup';
import Card from '../card/card';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/info">
                    <LandingPage />
                </Route>
                <Route exact path="/linup">
                    <Linup />
                </Route>
                <Route path="/">
                    <Card />
                </Route>
            </Switch>
        </Router>
    );
};
  
export default App;
