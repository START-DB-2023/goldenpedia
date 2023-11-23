import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './singUpPage.css';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
     
      console.log('User created successfully!');
      
      navigate('/login');
    } catch (error) {
      console.error('Sign Up failed:', error);
    
    }
  };

  return (
    <div>
      <h2>Registre-se</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />    
      </form>
    </div>
  );
};

export default SignUpPage;
