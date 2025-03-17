import React from 'react';
import resumeFile from '../assets/Resume.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxHeight: '90vh' }}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 style={{ textAlign: 'center', color: '#1abc9c', marginBottom: '20px' }}>📄 Resume</h2>

        {/* PDF Preview */}
        <div style={{ height: '70vh', overflow: 'auto', border: '1px solid #ccc', borderRadius: '6px' }}>
          <iframe
            src={resumeFile}
            title="Resume Preview"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          />
        </div>

        {/* Download Button */}
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <a
            href={resumeFile}
            download="Aditya_Sairam_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
            style={{
              display: 'inline-block',
              padding: '10px 25px',
              backgroundColor: '#1abc9c',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}
          >
            ⬇️ Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
