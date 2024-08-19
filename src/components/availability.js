import React, { useState, useEffect } from 'react';
import { Auth, API } from 'aws-amplify';
import '../styles/global.css'; // Import global CSS

const Availability = () => {
    const [availability, setAvailability] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                const response = await API.get('availabilityApi', `/availability/${user.username}`);
                setAvailability(response.availability);
            } catch (err) {
                console.error('Error fetching availability:', err);
                setError('Failed to load availability.');
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
    }, []);

    const handleSave = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            await API.post('availabilityApi', '/availability', {
                body: {
                    username: user.username,
                    availability,
                },
            });
            alert('Availability updated successfully');
        } catch (err) {
            console.error('Error updating availability:', err);
            setError('Failed to update availability.');
        }
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="availability-container">
            <h1 className="title">Set Availability</h1>
            <p className="description">Update your availability for the upcoming terms.</p>
            <textarea
                className="availability-input"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                placeholder="Enter your availability here..."
            />
            <button className="save-button" onClick={handleSave}>Save Availability</button>
        </div>
    );
};

export default Availability;
