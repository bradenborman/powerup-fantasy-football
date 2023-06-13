import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.scss';

const App: React.FC = () => {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/">
                        <div className="landing-page">
                            <div className="branding">
                                <h1>PowerUP Fantasy Football</h1>
                            </div>
                            <div className="glass">
                                <div className="features">
                                    <div className="feature">
                                        <h2>Auto Lineup</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>Player Blocker</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>Data Analysis</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>Custom Strategies</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>In-Depth Statistics</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>In-Depth Statistics</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>In-Depth Statistics</h2>
                                    </div>
                                    <div className="feature">
                                        <h2>In-Depth Statistics</h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
