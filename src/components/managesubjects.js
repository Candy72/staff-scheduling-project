import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listSubjects, createSubject, updateSubject, deleteSubject } from '../graphql/queries'; // Assuming you have these GraphQL queries/mutations
import '../styles/global.css'; // Import global CSS

const ManageSubjects = () => {
    const [subjects, setSubjects] = useState([]);
    const [newSubject, setNewSubject] = useState({ name: '', complexity: '', requiredExpertise: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingSubjectId, setEditingSubjectId] = useState(null);

    // Fetch subjects when component mounts
    useEffect(() => {
        fetchSubjects();
    }, []);

    const fetchSubjects = async () => {
        try {
            const subjectData = await API.graphql(graphqlOperation(listSubjects));
            setSubjects(subjectData.data.listSubjects.items);
        } catch (error) {
            console.log('Error fetching subjects:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewSubject({ ...newSubject, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEditing) {
            await handleUpdateSubject();
        } else {
            await handleCreateSubject();
        }
        setNewSubject({ name: '', complexity: '', requiredExpertise: '' });
        setIsEditing(false);
    };

    const handleCreateSubject = async () => {
        try {
            await API.graphql(graphqlOperation(createSubject, { input: newSubject }));
            fetchSubjects();
        } catch (error) {
            console.log('Error creating subject:', error);
        }
    };

    const handleEditSubject = (subject) => {
        setIsEditing(true);
        setEditingSubjectId(subject.id);
        setNewSubject({ name: subject.name, complexity: subject.complexity, requiredExpertise: subject.requiredExpertise });
    };

    const handleUpdateSubject = async () => {
        try {
            await API.graphql(graphqlOperation(updateSubject, { input: { id: editingSubjectId, ...newSubject } }));
            fetchSubjects();
        } catch (error) {
            console.log('Error updating subject:', error);
        }
    };

    const handleDeleteSubject = async (id) => {
        try {
            await API.graphql(graphqlOperation(deleteSubject, { input: { id } }));
            fetchSubjects();
        } catch (error) {
            console.log('Error deleting subject:', error);
        }
    };

    return (
        <div className="manage-subjects-container">
            <h1 className="title">Manage Subjects</h1>
            <form onSubmit={handleSubmit} className="subject-form">
                <div className="form-group">
                    <label htmlFor="name">Subject Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="input-field"
                        value={newSubject.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="complexity">Complexity Level:</label>
                    <input
                        type="text"
                        id="complexity"
                        name="complexity"
                        className="input-field"
                        value={newSubject.complexity}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="requiredExpertise">Required Expertise:</label>
                    <input
                        type="text"
                        id="requiredExpertise"
                        name="requiredExpertise"
                        className="input-field"
                        value={newSubject.requiredExpertise}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className="submit-button">
                    {isEditing ? 'Update Subject' : 'Add Subject'}
                </button>
            </form>

            <div className="subject-list">
                <h2 className="title">Existing Subjects</h2>
                <ul>
                    {subjects.map((subject) => (
                        <li key={subject.id} className="subject-item">
                            {`${subject.name} - ${subject.complexity} - ${subject.requiredExpertise}`}
                            <button className="edit-button" onClick={() => handleEditSubject(subject)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDeleteSubject(subject.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageSubjects;
