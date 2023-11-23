import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './singUpPage.css';

const SingUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      // Lógica para criar um usuário usando os dados (username e password)
      console.log('User created successfully!');
      navigate('/login');
    } catch (error) {
      console.error('Sign Up failed:', error);
    }
  };

  const handleCancel = () => {
    // Lógica para cancelar o cadastro
    navigate('/'); // Ou a rota desejada para redirecionamento
  };

  return (
    <div className="singUp-page">
      <div className="singUp-box">
        <h2>Crie Conta</h2>
        <form onSubmit={(e) => e.preventDefault()} className="singUp-form">
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
        </form>
        {/* Botões Cancele e Crie */}
        <div className="buttons-container">
          <button onClick={handleCancel} className="cancel-button">
            Cancele
          </button>
          <span className="button-spacing" /> {/* Espaço entre os botões */}
          <button onClick={handleSignUp} className="create-button">
            Crie
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingUpPage;
