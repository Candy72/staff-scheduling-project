import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
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
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// Configure Amplify
Amplify.configure(awsExports);

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Sashboard" element={<Dashboard />} />
                <Route path="/Manage-Schedule" element={<ManageSchedule />} />
                <Route path="/Availability" element={<Availability />} />
                <Route path="/Manage-Subjects" element={<ManageSubjects />} />
                <Route path="/Reports" element={<Reports />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/Help" element={<Help />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default withAuthenticator(App);  // Wrap with Authenticator if authentication is required
