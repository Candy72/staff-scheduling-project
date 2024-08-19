import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'; // Corrected import
import '../styles/global.css'; // Import global CSS
import { listSchedules } from '../graphql/queries';
import { createSchedule, updateSchedule, deleteSchedule } from '../graphql/mutations';

const ManageSchedule = () => {
    const [schedules, setSchedules] = useState([]);
    const [newSchedule, setNewSchedule] = useState({ subject: '', lecturer: '', time: '' });
    const [editMode, setEditMode] = useState(false);
    const [editScheduleId, setEditScheduleId] = useState(null);

    // Fetch schedules on component mount
    useEffect(() => {
        fetchSchedules();
    }, []);

    const fetchSchedules = async () => {
        try {
            const scheduleData = await API.graphql(graphqlOperation(listSchedules));
            const scheduleList = scheduleData.data.listSchedules.items;
            setSchedules(scheduleList);
        } catch (error) {
            console.log('Error fetching schedules:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSchedule({ ...newSchedule, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editMode) {
            await handleUpdateSchedule();
        } else {
            await handleCreateSchedule();
        }
        setNewSchedule({ subject: '', lecturer: '', time: '' });
    };

    const handleCreateSchedule = async () => {
        try {
            await API.graphql(graphqlOperation(createSchedule, { input: newSchedule }));
            fetchSchedules();
        } catch (error) {
            console.log('Error creating schedule:', error);
        }
    };

    const handleEditSchedule = (schedule) => {
        setEditMode(true);
        setEditScheduleId(schedule.id);
        setNewSchedule({ subject: schedule.subject, lecturer: schedule.lecturer, time: schedule.time });
    };

    const handleUpdateSchedule = async () => {
        try {
            await API.graphql(graphqlOperation(updateSchedule, { input: { id: editScheduleId, ...newSchedule } }));
            setEditMode(false);
            setEditScheduleId(null);
            fetchSchedules();
        } catch (error) {
            console.log('Error updating schedule:', error);
        }
    };

    const handleDeleteSchedule = async (id) => {
        try {
            await API.graphql(graphqlOperation(deleteSchedule, { input: { id } }));
            fetchSchedules();
        } catch (error) {
            console.log('Error deleting schedule:', error);
        }
    };

    return (
        <div className="manage-schedule-container">
            <h1 className="title">Manage Schedule</h1>
            <form onSubmit={handleSubmit} className="schedule-form">
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="input-field"
                        value={newSchedule.subject}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lecturer">Lecturer:</label>
                    <input
                        type="text"
                        id="lecturer"
                        name="lecturer"
                        className="input-field"
                        value={newSchedule.lecturer}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="text"
                        id="time"
                        name="time"
                        className="input-field"
                        value={newSchedule.time}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    {editMode ? 'Update Schedule' : 'Create Schedule'}
                </button>
            </form>

            <div className="schedule-list">
                <h2 className="title">Existing Schedules</h2>
                <ul>
                    {schedules.map((schedule) => (
                        <li key={schedule.id} className="schedule-item">
                            <span>{`${schedule.subject} - ${schedule.lecturer} at ${schedule.time}`}</span>
                            <button className="edit-button" onClick={() => handleEditSchedule(schedule)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteSchedule(schedule.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageSchedule;
