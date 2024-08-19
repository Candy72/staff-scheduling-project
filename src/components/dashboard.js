import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import '../styles/global.css';  // Import global CSS

const Dashboard = () => {
    const history = useHistory();

    useEffect(() => {
        // Check if the user is authenticated
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log('User:', user);
            })
            .catch(() => {
                // If not authenticated, redirect to the login page
                history.push('/login');
            });
    }, [history]);

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            history.push('/login');
        } catch (error) {
            console.log('Error signing out: ', error);
        }
    };

    return (
        <div className="container"> {/* Apply the container class for consistent padding and width */}
            <h1 className="title">Dashboard</h1> {/* Apply title class for consistent heading styling */}
            <nav>
                <ul>
                    <li><Link to="/manage-schedule">Manage Schedule</Link></li>
                    <li><Link to="/availability">Set Availability</Link></li>
                    <li><Link to="/manage-subjects">Manage Subjects</Link></li>
                    <li><Link to="/reports">View Reports</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/help">Help</Link></li>
                </ul>
            </nav>
            <button className="button logout-button" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
