import React from 'react';

const SkillsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2>💡 Skills</h2>

        <h3>🖥 Front-End Development</h3>
        <ul>
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
          <li><strong>Frameworks & Libraries:</strong> React.js, Angular, Vue.js</li>
          <li><strong>State Management:</strong> Redux, Context API, MobX</li>
          <li><strong>Styling & UI:</strong> Tailwind CSS, Bootstrap, Material-UI (MUI), SASS/SCSS</li>
          <li><strong>Build Tools:</strong> Webpack, Vite, Babel</li>
          <li><strong>Testing:</strong> Jest, React Testing Library, Cypress</li>
        </ul>

        <h3>🛠 Back-End Development</h3>
        <ul>
          <li><strong>Languages:</strong> Node.js, Java, Python, PHP</li>
          <li><strong>Frameworks:</strong> Express.js, Spring Boot, Django, Flask</li>
          <li><strong>API:</strong> RESTful APIs, GraphQL</li>
          <li><strong>Auth:</strong> JWT, OAuth 2.0, Passport.js, Firebase Auth</li>
          <li><strong>Testing:</strong> Mocha, Chai, JUnit</li>
        </ul>

        <h3>🗄 Database Management</h3>
        <ul>
          <li><strong>Relational:</strong> MySQL, PostgreSQL, SQL Server</li>
          <li><strong>NoSQL:</strong> MongoDB, Firebase Firestore, Redis</li>
          <li><strong>ORM/ODM:</strong> Sequelize, Mongoose, Hibernate</li>
          <li><strong>Concepts:</strong> Normalization, Indexing, Query Optimization</li>
        </ul>

        <h3>☁️ DevOps & Deployment</h3>
        <ul>
          <li><strong>Version Control:</strong> Git, GitHub, GitLab, Bitbucket</li>
          <li><strong>CI/CD:</strong> Jenkins, GitHub Actions, GitLab CI/CD</li>
          <li><strong>Containers:</strong> Docker, Kubernetes</li>
          <li><strong>Servers:</strong> Nginx, Apache</li>
          <li><strong>Cloud:</strong> AWS, Azure, Google Cloud</li>
          <li><strong>Deployment:</strong> Heroku, Netlify, Vercel</li>
        </ul>

        <h3>🔒 Security Best Practices</h3>
        <ul>
          <li>OWASP Top 10, HTTPS, CORS, CSRF Protection</li>
          <li>Data Encryption (SSL/TLS, bcrypt)</li>
          <li>Input Validation & Sanitization</li>
        </ul>

        <h3>📊 Tools & Others</h3>
        <ul>
          <li><strong>Package Managers:</strong> npm, yarn</li>
          <li><strong>API Testing:</strong> Postman, Swagger</li>
          <li><strong>Agile:</strong> Scrum, Kanban</li>
          <li><strong>Project Management:</strong> Jira, Trello, Asana</li>
          <li><strong>Docs:</strong> Markdown, JSDoc, Swagger</li>
        </ul>

        <h3>💡 Soft Skills</h3>
        <ul>
          <li>Problem-solving, Critical Thinking</li>
          <li>Communication & Collaboration</li>
          <li>Time Management, Adaptability</li>
          <li>Mentorship & Continuous Learning</li>
        </ul>

        <h3>💼 Optional Add-ons</h3>
        <ul>
          <li>Mobile: React Native, Flutter</li>
          <li>Serverless: AWS Lambda, Firebase Functions</li>
          <li>Microservices: Docker + Kubernetes</li>
          <li>AI/ML: TensorFlow.js, OpenAI API</li>
          <li>Web3: Solidity, Ethereum, Web3.js</li>
        </ul>
      </div>
    </div>
  );
};

export default SkillsModal;
