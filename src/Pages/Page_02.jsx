import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page_01.css';

const Fake404 = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/page_03'); // Redirect to Page_03
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.errorText}>Oops! Page Not Found</h2>
            <button className="hide" onClick={handleClick}>don't click me ouch</button>
            <a href="/" style={styles.link}>Go Back Home</a>
        </div>
    );
};

const styles = {
    container: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f8f8f8",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        zIndex: 9999, // Ensure it's above other elements
    },
    errorCode: {
        fontSize: "120px",
        color: "#ff4a4a",
        margin: "0",
    },
    errorText: {
        fontSize: "24px",
        color: "#333",
    },
    link: {
        color: "#007BFF",
        textDecoration: "none",
        fontSize: "18px",
        marginTop: "20px",
    },
};

export default Fake404;
