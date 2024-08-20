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
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/manage-schedule" element={<ManageSchedule />} />
                <Route path="/availability" element={<Availability />} />
                <Route path="/manage-subjects" element={<ManageSubjects />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/help" element={<Help />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
