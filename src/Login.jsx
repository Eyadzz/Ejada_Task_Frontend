import  { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {setToken} from './globals';

const LoginForm = () => {
    const [email, setEmailValue] = useState('');
    const [password, setPasswordValue] = useState('');
    const navigate = useNavigate();
    const handleEmailInput = (event) => {
        setEmailValue(event.target.value);
    };

    const handlePasswordInput = (event) => {
        setPasswordValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    const formData = {
        email: email,
        password: password,
    };
    
    fetch('http://localhost:5235/api/Users/Login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {

            setToken(data.data.accessToken);
            navigate("/admin");
            console.log('Response from the backend:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    
    return (
        <>
            <h1>Welcome to Company X</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="container">
                        <span>Login</span>
                    </div>
                    <br/>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={handleEmailInput} />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input type="text" value={password} onChange={handlePasswordInput} />
                    </label>
                </div>
                <div className="container">
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
