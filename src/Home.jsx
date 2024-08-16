import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Home = () => {
    const [username, setUsername] = useState('');
   
    const [imageUrl, setImageUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
     
      const randomImageUrl = `https://picsum.photos/400/500?random=${Math.floor(Math.random() * 1000)}`;
      setImageUrl(randomImageUrl);
      setSubmitted(true);
  
      navigate('/result', { state: { submitted: true, imageUrl: randomImageUrl, username } });
    };
    
  
  return (
    <div>
      <center>
        <h1 className="text1">Welcome Fella!</h1>
        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Type your Name</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>
            
            <button type="submit">Submit</button>
          </form>
        </div>
        {submitted && (
          <div>
            <h2>Submission Successful!</h2>
            <img src={imageUrl} alt="Random Image" />
            <p>Name: {username}</p>
          
          </div>
        )}
      </center>
    </div>
  );
}

export default Home;
