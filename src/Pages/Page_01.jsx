import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Page_01.css';

function Page_01() {
    const [inputValue, setInputValue] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const expectedValue = import.meta.env.VITE_APP_KEY1; // Ensure this is set in your .env file
        if (inputValue === expectedValue) {
            setMessage('Correct!');
            navigate('/page_02'); // Redirect to Page_02
        } else {
            setMessage('Incorrect, try again.');
        }
    };

    return (
        <>
            <div className="Page">
                <p>"this is text" is written as "vjku ku vgz"</p>
                <p>so what is "codm" is called?</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="give out your answer"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </>
    );
}

export default Page_01;