import React, { useState } from 'react';
import '../App.css'

const CreatePage = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const handleButtonClick = async () => {
        const newIssue = {
            title: text1,
            description: text2
        };

        try {
            const response = await fetch('http://localhost:8080/issues', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newIssue),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            alert('Issue created successfully!');
        } catch (error) {
            alert('Failed to create issue.');
        }
    };

    return (
        <div className="create-container">
            <div className="form-group">
                <input
                    type="text"
                    value={text1}
                    onChange={(e) => setText1(e.target.value)}
                    placeholder="Issue Title"
                    className="text-field"
                />
                <input
                    type="text"
                    value={text2}
                    onChange={(e) => setText2(e.target.value)}
                    placeholder="Description"
                    className="text-field"
                />
                <button type="button" class="btn btn-primary" onClick={handleButtonClick()}>
                    Push Issue
                </button>
            </div>
        </div>
    );
};

export default CreatePage;