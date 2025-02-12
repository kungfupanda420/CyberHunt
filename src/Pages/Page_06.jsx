import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page_06() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

  
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/qn.txt'; 
        link.download = 'qn.txt';
        link.click();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === 'CYBER HUNT') { // Replace with the correct string to check
            setMessage('Correct!');
            navigate('/page_07'); // Redirect to Page_07
        } else {
            setMessage('Incorrect, try again.');
        }
    };

    return (
        <div>
            <h1>Page 06</h1>
            <button onClick={handleDownload}>Download Text File</button>
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

export default Page_06;