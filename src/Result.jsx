import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  console.log("Location state:", location.state); 

  const { submitted, imageUrl, username } = location.state || {};

  if (!location.state) {
    return <div>No data received.</div>; 
  }

  return (
    <div>
      {submitted && imageUrl ? (
        <div className="image-container">
          <img src={imageUrl} alt="Random from Picsum" className="random-image" />
          <div className="overlay">
            <h2 id="th">Thank You</h2>
            <p id="p">{username}</p>
          </div>
        </div>
      ) : (
        <p>No data submitted or image URL is missing</p>
      )}
    </div>
  );
};

export default Result;
