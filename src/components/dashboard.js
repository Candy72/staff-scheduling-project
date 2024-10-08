import React, { useEffect } from 'react';
import { Auth } from '@aws-amplify';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/global.css';

const Dashboard = () => {
    const navigate = useNavigate(); // useNavigate replaces useHistory in react-router-dom v6+

    useEffect(() => {
        // Check if the user is authenticated
        Auth.currentAuthenticatedUser()
            .then(user => {
                console.log('User:', user);
            })
            .catch(() => {
                // If not authenticated, redirect to the login page
                navigate('/login');
            });
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await Auth.signOut();
            navigate('/login');
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
