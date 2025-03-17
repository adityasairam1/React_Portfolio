import React, { useState } from 'react';
import './index.css'; // your portfolio styling
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutModal from './components/AboutModal';
import ProjectsModal from './components/ProjectsModal';
import SkillsModal from './components/SkillsModal';
import ExperienceModal from './components/ExperienceModal';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';






function App() {
  const [activeModal, setActiveModal] = useState('');

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal('');

  return (
    <>
      <Navbar openModal={openModal} />
      <Hero />
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <ProjectsModal isOpen={activeModal === 'projects'} onClose={closeModal} />
      <SkillsModal isOpen={activeModal === 'skills'} onClose={closeModal} />
      <ExperienceModal isOpen={activeModal === 'experience'} onClose={closeModal} />
      <ResumeModal isOpen={activeModal === 'resume'} onClose={closeModal} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={closeModal} />


      <Footer />
    </>
  );
}

export default App;
