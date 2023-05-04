import { useState } from 'react';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';
import moment from "moment"

const Signup = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSendData = (event) => {
    event.preventDefault();
  
    localStorage.setItem("name", name)
    localStorage.setItem("created_datetime", moment().format());
    localStorage.setItem("user_posts", JSON.stringify([]));

    setName('');
    // Redireciona o usuário para outra página usando o navigate
    navigate('/post');
  };

  return (
    <div className={styles.container}>
      <div className={styles.signupContent}>
      <p className={styles.containerText}>Welcome to CodeLeap network!</p>
      <form onSubmit={handleSendData} className={styles.signupBox}>
        <p className={styles.signupText}>Please enter your username</p>
        <input 
          name="username" 
          value={name} 
          onChange={(event) => setName(event.target.value)}
          type='text' 
          className={styles.signupInput} 
          placeholder='John Doe'
          required
          >
        </input>
        <button disabled={name.length == 0} onClick={handleSendData}>Enter</button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
