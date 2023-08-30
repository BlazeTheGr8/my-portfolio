/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to my Portfolio</h1>
        <p>
          Hello! I'm Adam Castle, a Junior Software Developer. This evolving
          portfolio highlights my projects and skills, crafted with ReactJS.
          Stay tuned for more updates!
        </p>
        <a
          href="https://drive.google.com/file/d/1mVf6UxfTJbWWsYxTrAxqr4rAsGYG2NIb/view?usp=sharing"
          target="_blank"
        >
          <button>My CV</button>
        </a>
      </div>
    </div>
  );
};

export default Home;