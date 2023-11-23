import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; 

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Login successful:', loginResult);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={(e) => e.preventDefault()} className="login-form">
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
          <button onClick={handleLogin}>Login</button>
          {/* Link para a página de registro */}
          <Link to="/signup" className="register-button">Registrar</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
