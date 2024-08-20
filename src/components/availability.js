import React, { useState, useEffect } from 'react';
import { API, graphqlOperation, Auth } from 'aws-amplify'; // Import everything from 'aws-amplify'
import '../styles/global.css'; // Import global CSS
import { listAvailabilities } from '../graphql/queries';
import { updateAvailability } from '../graphql/mutations';

const Availability = () => {
    const [availability, setAvailability] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                const response = await API.graphql(graphqlOperation(listAvailabilities, { filter: { lecturerId: { eq: user.attributes.sub } } }));
                setAvailability(response.data.listAvailabilities.items[0]?.availability || '');
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
            await API.graphql(graphqlOperation(updateAvailability, {
                input: {
                    id: user.attributes.sub,
                    availability,
                },
            }));
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
