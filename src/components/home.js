import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Auth } from '@aws-amplify/auth'; // Updated import for Auth
import '../styles/global.css'; // Import global CSS


const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if a user is authenticated
        Auth.currentAuthenticatedUser()
            .then(user => setUser(user))
            .catch(() => setUser(null));
    }, []);

    return (
        <div className="container home-container">
            <header className="header">
                <h1 className="title">Welcome to the Staff Scheduling System</h1>
                <p className="description">Manage your schedules efficiently and effectively.</p>
            </header>
            
            <section className="overview section">
                <h2 className="section-title">System Overview</h2>
                <p className="description">The Staff Scheduling System is designed to help educational institutions manage their teaching staff and course schedules efficiently. Whether you’re an administrator managing multiple schedules or a lecturer looking to manage your availability, our system makes it easy and intuitive.</p>
            </section>
            
            <section className="quick-links section">
                <h2 className="section-title">Get Started</h2>
                <nav>
                    <ul className="link-list">
                        {user ? (
                            <>
                                <li><Link to="/dashboard" className="link">Dashboard</Link></li>
                                <li><Link to="/settings" className="link">Settings</Link></li>
                                <li><Link to="/help" className="link">Help & Support</Link></li>
                                <li><Link to="/logout" className="link" onClick={() => {
                                    Auth.signOut();
                                    setUser(null);
                                }}>Logout</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to="/login" className="link">Login</Link></li>
                                <li><Link to="/help" className="link">Help & Support</Link></li>
                            </>
                        )}
                    </ul>
                </nav>
            </section>
            
            <section className="features section">
                <h2 className="section-title">Key Features</h2>
                <ul className="feature-list">
                    <li className="feature-item">Efficient schedule management for lecturers and administrators.</li>
                    <li className="feature-item">Real-time availability updates and notifications.</li>
                    <li className="feature-item">Comprehensive reports on scheduling and staff utilization.</li>
                    <li className="feature-item">Integration with AWS services for scalable and secure performance.</li>
                </ul>
            </section>
            
            <section className="testimonials section">
                <h2 className="section-title">What Our Users Say</h2>
                <blockquote className="testimonial">
                    <p>"The Staff Scheduling System has transformed the way we manage our teaching staff. It's intuitive and powerful!"</p>
                    <footer className="testimonial-footer">- Dr. Jane Doe, University Administrator</footer>
                </blockquote>
            </section>
            
            <footer className="footer">
                <p>&copy; 2024 Staff Scheduling System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
