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
                                <img src="../../assets/football.svg" alt="Football Icon" className="football-icon" />
                                <h1>PowerUP Fantasy Football</h1>
                            </div>
                            <div className="glass">
                                <div className="features">
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Auto Lineup</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Auto lineup feature description.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Player Stats</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>View detailed player stats and performance.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Live Scoring</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Real-time updates on scores and results.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Trading</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Trade players with other fantasy managers.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Weekly Challenges</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Participate in weekly challenges for extra rewards.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Drafting</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Experience the thrill of drafting your fantasy team.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>Customizable Leagues</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Create and customize your own fantasy leagues.</p>
                                        </div>
                                    </div>
                                    <div className="feature">
                                        <div className="top">
                                            <h2>PowerUP Boosters</h2>
                                        </div>
                                        <div className="bottom">
                                            <p>Unlock PowerUP boosters to enhance your team's performance.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="call-to-action">
                                <h2>Sign up now and dominate the fantasy football world!</h2>
                                <div className="button-group">
                                    <button className="signup-button">Sign Up</button>
                                    <button className="learn-more-button">Learn More</button>
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
