import React from 'react';

const About = () => {
  return (
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">
            About <span className="text-green-400">Me</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Background</h2>
              <p className="text-gray-400 mb-6">
                I'm a Frontend and Backend Developer with a background in Electronics and Computer Engineering
                from Nnamdi Azikiwe University. My journey in tech has been driven by a passion
                for building intuitive user experiences and reliable backend systems that solve real problems.
              </p>
              <p className="text-gray-400 mb-6">
                Over time, I’ve expanded from frontend-focused work into full-stack development,
                building and deploying applications with React, Spring Boot, PostgreSQL, and third-party service integrations.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

              <div className="mb-6">
                <h3 className="text-xl text-green-400 mb-2">Backend Developer Intern</h3>
                <p className="text-gray-300 font-medium">Xpress Payments Solutions Limited</p>
                <p className="text-gray-400 italic mb-2">January 2026 – Present</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Implemented external service providers into the company’s notification service</li>
                  <li>• Worked on integrating Ikeja Electric with the company’s biller service</li>
                  <li>• Contributed to backend features and service integrations for payment-related systems</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl text-green-400 mb-2">Lead Frontend Developer (Contract)</h3>
                <p className="text-gray-300 font-medium">Emmounts Technologies</p>
                <p className="text-gray-400 italic mb-2">June 2025 – August 2025</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Led frontend development for client-facing projects using React and Tailwind CSS, achieving high cross-device responsiveness</li>
                  <li>• Built reusable UI components that improved development speed and consistency</li>
                  <li>• Collaborated with backend developers and product managers to deliver projects within deadlines</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl text-green-400 mb-2">Frontend Developer Intern</h3>
                <p className="text-gray-300 font-medium">Foretrust Digital Consulting Limited</p>
                <p className="text-gray-400 italic mb-2">4 months</p>
                <ul className="text-gray-400 space-y-2">
                  <li>• Collaborated with senior developers on client projects</li>
                  <li>• Implemented responsive designs using modern CSS frameworks</li>
                  <li>• Participated in code reviews and team meetings</li>
                  <li>• Contributed to the development of user interfaces</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <div className="mb-6">
                <h3 className="text-xl text-green-400 mb-2">Electronics and Computer Engineering</h3>
                <p className="text-gray-300">Nnamdi Azikiwe University</p>
                <p className="text-gray-400 italic">2025</p>
              </div>
              <div className="mb-6">
                <h3 className="text-xl text-green-400 mb-2">Java and Spring Boot Course</h3>
                <p className="text-gray-300">Udemy</p>
                <p className="text-gray-400 italic">Currently Learning</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-green-400 mb-2">Frontend</h3>
                  <ul className="text-gray-400">
                    <li>• HTML5</li>
                    <li>• CSS3</li>
                    <li>• JavaScript</li>
                    <li>• React.js</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h3 className="text-green-400 mb-2">Backend & Tools</h3>
                  <ul className="text-gray-400">
                    <li>• Java</li>
                    <li>• Spring Boot</li>
                    <li>• PostgreSQL</li>
                    <li>• REST APIs</li>
                    <li>• Git & GitHub</li>
                    <li>• Docker</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
              <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <ul className="text-gray-400 grid grid-cols-2 gap-2">
                  <li>• Problem Solving</li>
                  <li>• Team Collaboration</li>
                  <li>• Communication</li>
                  <li>• Time Management</li>
                  <li>• Adaptability</li>
                  <li>• Quick Learning</li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <div className="bg-gray-800 p-4 rounded-lg">
                <ul className="text-gray-400">
                  <li>• English (Professional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
  );
};

export default About;