import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import '../styles/global.css';  // Import global CSS

const Error = () => {
    const history = useHistory();

    const handleBackToHome = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            history.push('/dashboard');
        } catch {
            history.push('/');
        }
    };

    return (
        <div className="container error-container">
            <h1 className="title">404 - Page Not Found</h1>
            <p className="description">Sorry, the page you are looking for does not exist or may have been moved.</p>
            <button className="button" onClick={handleBackToHome}>Go Back to Home</button>
            <p className="description">
                If you believe this is an error, please contact support or try navigating back to the{' '}
                <Link to="/" className="link">Home Page</Link>.
            </p>
        </div>
    );
};

export default Error;
