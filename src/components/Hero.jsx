import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        backgroundImage: `url("/images/IMG_7708.JPG")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
      }}
    >
      <div className="hero-content">
        <h1>
          Hello, I'm <span>Aditya Sairam</span>
        </h1>
        <p>Software Developer | Backend Developer | Cloud Specialist</p>
      </div>
    </section>
  );
};

export default Hero;
