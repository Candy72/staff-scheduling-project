import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to use useNavigate instead of useHistory
import { Auth } from 'aws-amplify';
import '../styles/global.css';  // Import global CSS

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Updated to use useNavigate instead of useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Use AWS Amplify to sign in the user
            await Auth.signIn(username, password);
            // Redirect to the dashboard after successful login
            navigate('/dashboard');
        } catch (error) {
            // Handle error during sign-in
            setError(error.message);
        }
    };

    return (
        <div className="container">
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
