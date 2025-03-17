import React from 'react';

const ProjectsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>

        <h2 style={{ textAlign: 'center', color: '#1abc9c' }}>
          🚀 Projects
        </h2>

        <div>
          <h3>📁 <span style={{ color: '#0077b5' }}>FriendBook Contact List Management System</span></h3>
          <p><strong>Tech Stack:</strong> SQL Server, T-SQL, Stored Procedures, ER Diagrams, UML Class Diagrams</p>
          <p><strong>Project Overview:</strong><br />
            Developed a Contact List Management Subsystem for FriendBook, a social networking platform that enables users to manage and grow their network. The system allows users to add, view, update, and delete contacts, ensuring data integrity through structured database design and optimized SQL queries.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Designed User and Contact tables with primary and foreign key constraints.</li>
            <li>Implemented CRUD operations using stored procedures (Add, Retrieve, Update, Delete contacts).</li>
            <li>Developed comprehensive Entity-Relationship (ER) Diagrams and UML Class Diagrams to map system relationships.</li>
            <li>Optimized SQL queries for efficient data retrieval and manipulation.</li>
            <li>Ensured referential integrity and one-to-many relationships between users and their contacts.</li>
          </ul>
          <p><strong>Tools & Technologies:</strong><br />
            <strong>Database:</strong> SQL Server |
            <strong> Query Language:</strong> T-SQL |
            <strong> Modeling:</strong> ER Diagrams, UML Class Diagrams |
            <strong> Techniques:</strong> Stored Procedures, Primary/Foreign Keys, CRUD Operations
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>📁 <span style={{ color: '#0077b5' }}>Medline Search Engine (MSE)</span></h3>
          <p><strong>Tech Stack:</strong> Node.js, Express.js, Next.js, MongoDB, MySQL, Puppeteer, NLP, TF-IDF, Cosine Similarity</p>
          <p><strong>Project Overview:</strong><br />
            Designed and developed an AI-driven Medline Search Engine (MSE) to scrape, process, and index 4,481+ medical articles from MedlinePlus.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Built a web scraper using Puppeteer to collect and process over 4,400+ medical articles.</li>
            <li>Applied NLP (tokenization, stemming, lemmatization) for data preprocessing and indexing.</li>
            <li>Developed an inverted index for efficient search queries across large datasets.</li>
            <li>Implemented TF-IDF and Cosine Similarity algorithms for ranking search results.</li>
            <li>Designed a user-friendly interface with Next.js for real-time query inputs and result displays.</li>
          </ul>
          <p><strong>Tools & Technologies:</strong><br />
            <strong>Backend:</strong> Node.js, Express.js |
            <strong> Frontend:</strong> Next.js |
            <strong> Databases:</strong> MongoDB, MySQL |
            <strong> Web Scraping:</strong> Puppeteer |
            <strong> NLP & AI:</strong> TF-IDF, Cosine Similarity |
            <strong> Search Engine Design:</strong> Inverted Index
          </p>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3>📁 <span style={{ color: '#0077b5' }}>Linux Shell & Distributed Computing Platform</span></h3>
          <p><strong>Tech Stack:</strong> C, Sun RPC, POSIX Threads, Linux, NFS, Multithreading, Shell Scripting</p>
          <p><strong>Project Overview:</strong><br />
            Engineered a Linux Shell and an RPC-based Distributed Computing Platform that supports command execution, process management, and distributed task handling.
          </p>
          <p><strong>Key Features:</strong></p>
          <ul>
            <li>Built a custom Linux shell supporting standard commands (cd, pwd, ls, etc.) and command chaining.</li>
            <li>Developed a multi-threaded messageprint program using POSIX Threads to demonstrate thread synchronization.</li>
            <li>Implemented an RPC-based client-server system to distribute large jobs to multiple servers.</li>
            <li>Enabled real-time load balancing by monitoring server CPU loads and rescheduling jobs as needed.</li>
            <li>Integrated fault-tolerance mechanisms to handle server crashes and job rescheduling.</li>
          </ul>
          <p><strong>Tools & Technologies:</strong><br />
            <strong>Programming Language:</strong> C |
            <strong> Distributed Computing:</strong> Sun RPC |
            <strong> Multithreading:</strong> POSIX Threads |
            <strong> System Programming:</strong> Shell Scripting |
            <strong> Networking:</strong> NFS, RPC Communication
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsModal;
