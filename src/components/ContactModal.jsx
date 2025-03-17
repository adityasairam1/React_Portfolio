import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center', color: '#1abc9c' }}>📞 Contact</h2>

        <ul className="contact-info">
          <li><FaEnvelope /> Email: <a href="mailto:adityapsairam@gmail.com">adityapsairam@gmail.com</a></li>
          <li><FaPhone /> Phone: +1 216-413-2548</li>
          <li><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/aditya-sairam-pullabhatla-90561817b/" target="_blank" rel="noopener noreferrer">linkedin.com/in/aditya-sairam-pullabhatla</a></li>
          <li><FaGithub /> GitHub: <a href="https://github.com/adityasairam1" target="_blank" rel="noopener noreferrer">github.com/adityasairam1</a></li>
        </ul>

        <div className="contact-socials">
          <a href="https://www.linkedin.com/in/aditya-sairam-pullabhatla-90561817b/" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
          <a href="https://github.com/adityasairam1" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
          <a href="mailto:adityapsairam@gmail.com" className="social-link"><FaEnvelope /></a>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;