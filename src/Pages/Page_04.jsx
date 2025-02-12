import { useNavigate } from 'react-router-dom';

function Page_04() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/page_05'); // Update the path to match the route in App.jsx
    };

    return (
        <div>
            <button onClick={handleClick}>click me for now  (2*38)</button>
        </div>
    );
}

export default Page_04;