import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

  // Créer un composant LoginForm
const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Créer une fonction handleSubmit qui prend en paramètre un événement
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Récupérer les valeurs des champs email et password
    const email = e.target.querySelector("[name=email]").value;
    const password = e.target.querySelector("[name=password]").value;
    
    // Créer un objet login avec ces valeurs
    const login = { email, password };


    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });

      if (response.status === 200) {
        const data = await response.json(); // Récupérer les données de la réponse
        const token = data.body.token;      // Récupérer le token de la réponse
        sessionStorage.setItem('token', token);     // Stocker le token dans le sessionStorage
        console.log('Login success:', data);
        
       
        navigate('/user');
      } else {
        setError('Email ou mot de passe incorrect');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div className="body">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password"
            />
          </div>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id="remember-me" 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="sign-in-button" type="submit">Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;