// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/home/Hero';
import TechStack from '../components/home/TechStack';
import ProjectList from '../components/projects/ProjectList';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <TechStack />
      <ProjectList />
    </main>
  );
};

export default Home;