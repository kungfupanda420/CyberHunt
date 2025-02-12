import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page_05() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/images/download.jpg'; // Update the path to match the location of your image
        link.download = 'image.jpg';
        link.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === 'hey,Zuko here') { // Replace with the correct string to check
            setMessage('Correct!');
            navigate('/page_06'); // Redirect to Page_06
        } else {
            setMessage('Incorrect, try again.');
        }
    };

    return (
        <div>
            <p>give me the hidden meaning of this Image</p>
            <button onClick={handleDownload}>Download JPG</button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your answer"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Page_05;