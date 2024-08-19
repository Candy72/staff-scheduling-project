import React, { useState, useEffect } from 'react';
import { Auth } from '@aws-amplify/auth'; // Updated import for Auth
import '../styles/global.css'; // Import global CSS


const Settings = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [notificationPref, setNotificationPref] = useState(false);

    useEffect(() => {
        fetchUserInfo();
    }, []);

    const fetchUserInfo = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            setUsername(user.username);
            setEmail(user.attributes.email);
            // Fetch other settings from your backend or user attributes
        } catch (error) {
            console.log('Error fetching user info:', error);
        }
    };

    const handleSaveSettings = async () => {
        try {
            // Save the settings, e.g., to your backend or update Cognito user attributes
            console.log('Settings saved:', { username, email, notificationPref });
            alert('Settings saved successfully!');
        } catch (error) {
            console.log('Error saving settings:', error);
            alert('Failed to save settings.');
        }
    };

    return (
        <div className="settings-container">
            <h1 className="title">Settings</h1>
            <p>Manage your profile settings and system preferences.</p>

            <div className="settings-form">
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Notification Preferences:</label>
                    <input
                        type="checkbox"
                        checked={notificationPref}
                        onChange={(e) => setNotificationPref(e.target.checked)}
                    /> Receive notifications
                </div>
                <button className="save-button" onClick={handleSaveSettings}>Save Settings</button>
            </div>
        </div>
    );
};

export default Settings;
