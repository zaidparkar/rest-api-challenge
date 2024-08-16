import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../App.css';

const EditPage = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const id = searchParams.get('id');
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    useEffect(() => {
        if (!id || !title || !description) {
            navigate('/', { replace: true });
        } else {
            setText1(title);
            setText2(description);
        }
    }, [id, title, description, navigate]);

    async function handleButtonClick() {
        const editIssue = {
            id: id,
            title: text1,
            description: text2
        };

        try {
            const response = await fetch(`http://localhost:8080/issues/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(editIssue),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            alert('Issue edited successfully!');
        } catch (error) {
            alert('Failed to edit issue.');
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
                <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
                    Edit Issue
                </button>
            </div>
        </div>
    );
};

export default EditPage;