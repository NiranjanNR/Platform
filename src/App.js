import React from 'react'
import Login from './Pages/Login';
import Hmm from './Pages/Hmm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Router>
                <Switch>
                    {0 ? <Login /> :
                        <>
                            <Route exact path="/Login" component={Login} />
                            <Route exact path="/Hmm" component={() => <Hmm authorized={true} />} />
                        </>}

                </Switch>
            </Router>
        </div>
    )
}

export default App;