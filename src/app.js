import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ManageSchedule from './components/ManageSchedule';
import Availability from './components/Availability';
import ManageSubjects from './components/ManageSubjects';
import Reports from './components/Reports';
import Settings from './components/Settings';
import Help from './components/Help';
import Error from './components/Error';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/manage-schedule" component={ManageSchedule} />
                <Route path="/availability" component={Availability} />
                <Route path="/manage-subjects" component={ManageSubjects} />
                <Route path="/reports" component={Reports} />
                <Route path="/settings" component={Settings} />
                <Route path="/help" component={Help} />
                <Route component={Error} />
            </Switch>
        </Router>
    );
}

export default App;
