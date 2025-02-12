import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Page_03() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/pdf/hehe.pdf'; 
        link.download = 'file.pdf';
        link.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      //  const expectedValue = process.env.REACT_APP_KEY2; // Ensure this is set in your .env file
        if (inputValue === 'kungfupanda') {
            setMessage('Correct!');
            navigate('/page_04'); // Redirect to Page_04
        } else {
            setMessage('Incorrect, try again.');
        }
    };

    return (
        <div>
           <p>give me the author name of this book
            
           </p>
            <button onClick={handleDownload}>Download PDF</button>
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

export default Page_03;