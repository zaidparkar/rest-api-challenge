import React, { useEffect, useState } from 'react';

const HomePage = () => {

    const [issues, setIssues] = useState([]);
    const [loading, setLoading] = useState(true);

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

    

    // const readIssue = () => {
    //     axios.get('http://localhost:3000/issues/1').then(res => setIssue(res.data));
    // };

    // const updateIssue = () => {
    //     const updatedIssue = { id: 1, title: 'Updated Issue', description: 'Updated description' };
    //     axios.put('http://localhost:3000/issues/1', updatedIssue).then(res => console.log(res.data));
    // };

    // const deleteIssue = () => {
    //     axios.delete('http://localhost:3000/issues/1').then(() => console.log('Deleted'));
    // };

    useEffect(() => {
        console.log('Component mounted');
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
                        </tr>
                    </thead>
                    <tbody>
                        {issues.map(issue => (
                            <tr key={issue.id}>
                                <td>{issue.id}</td>
                                <td>{issue.title}</td>
                                <td>{issue.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default HomePage;