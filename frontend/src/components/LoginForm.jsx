import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword, setToken } from '../app/authSlice'; 



const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => { 
    e.preventDefault();
    setError('');
    const email = e.target.querySelector("[name=email]").value;
    const password = e.target.querySelector("[name=password]").value;
    const login = { email, password };

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(login),
      });
      console.log(response);


      if (response.status === 200) {
        const data = await response.json();           
        const token = data.body.token;               
        sessionStorage.setItem('token', token);     
        dispatch(setEmail(email));
        dispatch(setPassword(password));
        if (rememberMe) {
          localStorage.setItem('token', token);
        }
      }
      if (sessionStorage.getItem("token") || localStorage.getItem("token")) { 
        navigate("/user");
        dispatch(setToken(sessionStorage.getItem("token") || localStorage.getItem("token"))); 
      }else {
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
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)} 
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button className="sign-in-button" type="submit">
            Sign In</button>
        </form>
      </section>
    </div>
  );
};

export default LoginForm;