import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const getAllIssues = async () => {
        try {
            const response = await fetch('http://localhost:8080/all-issues');
            const data = await response.json();
            setIssues(data);
        } catch (error) {
            console.error('Error fetching issues:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (issue) => {
        navigate(`/Edit/?id=${issue.id}&title=${issue.title}&description=${issue.description}`);
    };

    async function handleDelete(id) {
        const isConfirmed = window.confirm("Are you sure you want to delete this issue?");
        if (!isConfirmed) {
            return;
        }
        const response = await fetch(`http://localhost:8080/issues/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert('Issue deleted successfully!');
        getAllIssues()
    };

    useEffect(() => {
        getAllIssues();
    }, []);

    return (
        <div className="container mt-2">
            <h1 className="text-center">Welcome to the Issue Tracker</h1>
            <p>All Issues</p>

            {loading ? (
                <div className="text-center">Loading...</div>
            ) : (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map(issue => (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.title}</td>
                                <td>{issue.description}</td>
                                <td>
                                    <i className="bi bi-pencil-square" style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => handleEdit(issue)}></i>
                                    <i className="bi bi-trash" style={{ cursor: 'pointer' }} onClick={() => handleDelete(issue.id)}></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default HomePage;