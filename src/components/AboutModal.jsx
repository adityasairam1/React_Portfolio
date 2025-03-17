import React from 'react';

const AboutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ color: '#1abc9c', textAlign: 'center', marginBottom: '20px' }}>About Me</h2>
        <p style={{ textAlign: 'justify', fontSize: '1.1rem', color: '#444', lineHeight: '1.7' }}>
          Passionate about building scalable, AI-driven solutions, I specialize in designing and developing high-performance applications using 
          <strong> Java, Spring Boot, SQL, and No-SQL</strong>. With deep expertise in AI, I integrate intelligent systems into modern software architectures to drive efficiency and innovation.
          <br /><br />
          I have hands-on experience across major cloud platforms, including 
          <strong> Amazon Web Services (AWS)</strong>, 
          <strong> Google Cloud Platform (GCP)</strong>, and 
          <strong> Microsoft Azure</strong>, where I architect and deploy robust microservices, API integrations, and AI-powered applications.
          <br /><br />
          My focus is cutting-edge software engineering, cloud-native development, and intelligent automation — ensuring businesses leverage the best of AI and cloud technologies for scalable growth. Let's connect and discuss how technology can drive the future! 💡🌍
        </p>

        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <a
            href="https://www.linkedin.com/in/adityasairam"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#0077b5',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontSize: '1.1rem'
            }}
          >
            <i className="fab fa-linkedin" style={{ marginRight: '6px' }}></i>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
