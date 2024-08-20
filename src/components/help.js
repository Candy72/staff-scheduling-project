import React from 'react';
import '../styles/global.css';  // Import global CSS

const Help = () => {
    return (
        <div className="container help-container">
            <h1 className="title">Help & Support</h1>
            <p className="description">If you have questions or need assistance, you&apos;re in the right place.</p>
            
            <section className="faq-section section">
                <h2 className="section-title">Frequently Asked Questions (FAQs)</h2>
                <ul className="faq-list">
                    <li className="faq-item">
                        <strong>How do I reset my password?</strong>
                        <p>You can reset your password by clicking the &quot;Forgot Password&quot; link on the login page. Follow the instructions sent to your registered email.</p>
                    </li>
                    <li className="faq-item">
                        <strong>How do I update my availability?</strong>
                        <p>To update your availability, go to the &quot;Set Availability&quot; page under your Dashboard and select the time slots you are available.</p>
                    </li>
                    <li className="faq-item">
                        <strong>How can I view my assigned schedules?</strong>
                        <p>Your assigned schedules can be viewed in the &quot;Manage Schedule&quot; section under your Dashboard.</p>
                    </li>
                </ul>
            </section>

            <section className="contact-section section">
                <h2 className="section-title">Contact Support</h2>
                <p className="description">If you need further assistance, please contact our support team:</p>
                <ul className="contact-list">
                    <li>Email: <a href="mailto:support@staffscheduling.com" className="link">support@staffscheduling.com</a></li>
                    <li>Phone: +1 (800) 123-4567</li>
                    <li>Live Chat: <a href="/chat-support" className="link">Start a live chat</a></li>
                </ul>
            </section>

            <section className="resources-section section">
                <h2 className="section-title">Additional Resources</h2>
                <ul className="resources-list">
                    <li><a href="/user-guide" className="link">User Guide</a></li>
                    <li><a href="/video-tutorials" className="link">Video Tutorials</a></li>
                    <li><a href="/community-forum" className="link">Community Forum</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Help;
