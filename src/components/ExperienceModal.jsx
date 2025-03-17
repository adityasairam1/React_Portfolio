import React, { useState } from 'react';

const ExperienceModal = ({ isOpen, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  if (!isOpen) return null;

  const experiences = [
    {
      title: "Software Engineer | Graduate Assistant",
      company: "Cleveland State University, OH",
      duration: "August 2023 – December 2024",
      details: [
        "Mentored students in full-stack web development using React.js, Node.js, Django, and Java.",
        "Built and deployed applications with React, Express, and Spring Boot.",
        "Led CI/CD workshops (Jenkins, GitHub Actions, Docker, Kubernetes).",
        "Guided API development using REST and GraphQL with secure auth (JWT, OAuth 2.0).",
        "Integrated WebSockets and Kafka for real-time systems.",
        "Taught SQL/NoSQL: PostgreSQL, MongoDB, DynamoDB (schema design, indexing).",
        "Covered UI/UX best practices with Tailwind CSS, Bootstrap, Redux.",
        "Introduced backend/frontend performance tuning and monitoring (Prometheus, Grafana, ELK).",
        "Helped integrate AI/ML using TensorFlow.js & PyTorch in full-stack apps.",
      ],
    },
    {
      title: "Data Catalog Engineer",
      company: "Amazon | Chennai, India",
      duration: "June 2021 – December 2022",
      details: [
        "Built full-stack data tools improving product catalog quality and accuracy.",
        "Developed dashboards (React.js + D3.js) to monitor pipeline performance.",
        "Built scalable REST APIs with Flask, Django, and Node.js (Express).",
        "Automated ETL using Python scripts for catalog updates.",
        "Audited data integrity with SQL/Python and visualized in React UI.",
        "Boosted DB performance in PostgreSQL and MongoDB.",
        "Set up CI/CD with Jenkins and GitHub Actions.",
        "Integrated ML models (TensorFlow, scikit-learn) for product recommendations.",
        "Secured web apps using OAuth 2.0, JWT & RBAC.",
        "Created tools that bridged sellers, account managers, and engineers.",
        "Practiced Agile — daily standups, sprint planning, retros.",
      ],
    },
    {
      title: "Full-Stack Engineer",
      company: "Cigna Health Care",
      duration: "May 2018 – May 2021",
      details: [
        "Developed full-stack healthcare portals with React.js, Angular, and ASP.NET Core (C#).",
        "Integrated GraphQL and REST APIs for seamless data sharing.",
        "Engineered real-time features with SignalR and WebSockets.",
        "Improved SQL Server and Azure SQL performance (25% boost).",
        "Used MongoDB for unstructured medical data.",
        "Built SSRS and D3.js dashboards for real-time insights.",
        "Deployed to Azure (Azure Functions, ML, Blob Storage).",
        "Implemented HIPAA-compliant security (RBAC, OAuth, TLS).",
        "Setup CI/CD (Azure DevOps, Jenkins) for automated pipelines.",
        "Monitored systems with Azure Monitor & App Insights.",
        "Integrated ML (TensorFlow, PyTorch) into health applications.",
      ],
    }
  ];

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <h2 className="modal-title">💼 Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index}>
            <button
              className={`accordion ${expandedIndex === index ? 'active' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <strong>{exp.title}</strong> <br />
                <span style={{ fontWeight: 500 }}>{exp.company} | {exp.duration}</span>
              </div>
              <span className="arrow-icon">{expandedIndex === index ? '▲' : '▼'}</span>
            </button>
            <div className="panel" style={{ display: expandedIndex === index ? 'block' : 'none' }}>
              <ul className="contact-info">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceModal;
