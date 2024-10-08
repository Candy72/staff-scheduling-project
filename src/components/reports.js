import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from '@aws-amplify';
import '../styles/global.css';
import { listReports } from '../graphql/queries';


const Reports = () => {
    const [reports, setReports] = useState([]);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        fetchReports();
    }, []);

    const fetchReports = async () => {
        try {
            const reportData = await API.graphql(graphqlOperation(listReports));
            setReports(reportData.data.listReports.items);
        } catch (error) {
            console.error('Error fetching reports:', error);
        }
    };

    const handleReportClick = (report) => {
        setSelectedReport(report);
    };

    return (
        <div className="reports-container">
            <h1 className="title">Reports</h1>
            <p>View and generate reports on scheduling efficiency and lecturer workload.</p>
            
            <div className="report-list">
                <h2 className="title">Available Reports</h2>
                <ul>
                    {reports.map((report) => (
                        <li key={report.id} className="report-item" onClick={() => handleReportClick(report)}>
                            {`${report.name} - ${report.createdDate}`}
                        </li>
                    ))}
                </ul>
            </div>

            {selectedReport && (
                <div className="report-details">
                    <h2 className="title">Report Details</h2>
                    <p><strong>Name:</strong> {selectedReport.name}</p>
                    <p><strong>Date:</strong> {selectedReport.createdDate}</p>
                    <p><strong>Description:</strong> {selectedReport.description}</p>
                    <p><strong>Data:</strong></p>
                    <pre>{JSON.stringify(selectedReport.data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default Reports;
